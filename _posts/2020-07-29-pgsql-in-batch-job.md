---
layout: post
title: "Running PostgreSQL within HPC batch jobs"
author: Will Furnass
slug: 2020-07-29-pgsql-in-batch-job
date: 2020-07-29 17:00:00 UTC
tags: postgresql singularity
category:
link:
description:
type: text
---

**TL;DR It's occasionally useful to run service applications such as PostgreSQL *within* high-performance computing (HPC) batch jobs.
Running such services within [Singularity][singularity] containers can simplify the process of setting this up.**

---

## Installing PostgreSQL on HPC - why not?

Recently a researcher asked whether the [PostgreSQL][postgresql] Relational Database Management System
could be installed one one of the [University of Sheffield's HPC clusters][uos-hpc]
to allow him to concurrently run a large number of simulations using data stored in a PostgreSQL database dump.

He was told that installing PostgreSQL and setting it up as a long-running service on a cluster wouldn't be possible as
it's not really compatible with how administrators want to manage resources on clusters.
Typically you want all resources (memory, CPU time etc) requested and used by research workflows
to be consumed *within* batch jobs (or interactive sessions) established by a job scheduler / resource manager such as [Slurm][slurm] or [Grid Engine][gridengine],
with that resource manager ensuring that resources are shared fairly between all users of the system.
PostgreSQL consists of (at least) two bits: a long-running service (server part) and a library or application that talks to that service (client).
If the server part were set up as a long-running service external to any batch job,
which is how you'd normally configure PostgreSQL on a non-HPC server,
then it would be able to consume resources out of the reach/control of the job scheduler / resource manager;
this could result in the unfair use of computational resources.

## Alternative approaches: SQLite or an external PostgreSQL?

A relational database system more naturally compatible with HPC batch jobs is [SQLite][sqlite].
This doesn't have a long-running server component;
instead, it's just a library that reads a self-contained database file on disk.
A database can therefore be created, accessed and managed entirely within one or more batch jobs/interactive sessions
with all associated computational resources remaining under the control of the job scheduler / resource manager.
However, SQLite has some limitations in terms of
supported data types and
support for [stored procedures][pg-stored-proc]
(functions stored within the database and processed by the database management software),
so porting an existing PostgreSQL database to a SQLite database might not always be possible.

Another possible approach is to set up the PostgreSQL server on a virtual machine external to the HPC cluster
and connect to it from PostgreSQL clients running in multiple batch jobs.
This wouldn't cause problems for the job scheduler / resource manager and
would allow databases managed by PostgreSQL to be accessed by multiple users/jobs
(it's not as easy/safe to share SQLite databases between users/jobs).

However, neither approach was practical in this situation as
the most intensive parts of the workflow are PostgreSQL stored procedures that can't be ported to SQLite and
have to run on the PostgreSQL server component
(so running more clients in parallel wouldn't help with getting through all simulations quicker).

Some basic profiling of the workflow suggested it was limited by disk bandwidth,
presumably because PostgreSQL's stored procedures are reading from/writing to disk too frequently.
Ideally, the workflow would have been rewritten to keep the (relatively small amount of) data in memory during each simulation and
the simulation procedures would be written in e.g. Python or Go and executed externally to PostgreSQL.
However, in this case the researcher had very limited time to complete the full suite of simulations
so we explored another option: **running the PostgreSQL server and client parts within HPC batch jobs distributed across multiple HPC nodes,
so as to distribute the demand for disk bandwidth.**

## Running a PostgreSQL in a batch job

Compiling, installing and configuring PostgreSQL so it can be run in a batch job could be a fair bit of work,
so I opted to instead use a [Docker image from DockerHub](https://registry.hub.docker.com/r/postgis/postgis/)
containing a pre-built PostgreSQL, plus the PostGIS GIS extensions for PostgreSQL, which were required for this workflow.
Docker isn't installed on our clusters, but [Singularity][singularity] is,
which allows unprivileged users such as the researcher to run containerised processes within Docker or Singularity images
in a way that is compatible with the cluster's resource manager.

Singularity does understand Docker images but to use them it needs to convert them to its own format.  The following most likely only needs to be done once:

```sh
singularity pull /fastdata/$USER/postgis_12-master.sif docker://postgis/postgis:12-master
```

Here we've created the Singularity image file (.sif) within the `/fastdata/$USER/` as image files can be quite large and we know we've got lots of space there.

What follows is what then needs to be included in a batch job submission script 
to start both a PostgreSQL server and connect to it from a PostgreSQL client 
(in this case MATLAB plus a [JDBC][ml-jdbc] driver MATLAB can use to talk to PostgreSQL).
Some technical things to note:

 - (For those who know about Unix domain sockets):
   JDBC doesn't understand Unix domain sockets
   so all client-server comms needs to be over TCP.
 - TCP connections to the server must originate from the same node
   and require a password for security.
   A password should (the only thing) specified in a file called e.g. `~/.pgpasswd`
   before submitting a job that includes the lines below.
   Permissions on that file should be set so *only* the user has read/write access.
- The database for the workflow is re-instatiated from a database dump at the start of each job; 
  this is fine for this workflow as all simulations are independent.

```bash
# Identify a unused TCP port that the PostgreSQL server we're about to set up
# can listen to connections from PostgreSQL clients on:
get_ephemeral_port() {
    LOW_BOUND=49152
    RANGE=16384
    while true; do
        CANDIDATE=$(( LOW_BOUND + (RANDOM % RANGE) ))
        (echo "" >/dev/tcp/127.0.0.1/${CANDIDATE}) >/dev/null 2>&1
        if [ $? -ne 0 ]; then
            echo $CANDIDATE
            break
        fi
    done
}
export PGPORT="$(get_ephemeral_port)"

# Create some temporary writable directories for storing PostgreSQL server data
PGRUNDIR="$(mktemp -d)"
PGDATADIR="$(mktemp -d)"

# Create a temporary file in the current directory for storing log data.
PGLOGFILE="$(mktemp -t -p $PWD --suffix=-$(date +%F-%H-%M-%S).pg.log)"

# Database dump to restore when the PostgreSQL container/server starts
SQLFILE='path/to/my/database_dump.sql'

# PostgreSQL user; for this workflow this needs to be set to match a value
# specified in the $SQLFILE database dump
export PGUSER='somename'
# Chosen PostgreSQL password for that user (see notes above)
export PGPASSWD="$(cat ~/.pgpasswd)"
# Chosen name of PostgreSQL database that database dump restored into
export PGDB='mydatabase'

# Variables of the form `SINGULARITYENV_SOMENAME=xxx` result in
# `SOMENAME=xxx` being set *inside* any Singularity containers
# started in this environment.
export SINGULARITYENV_POSTGRES_USER="$PGUSER"
export SINGULARITYENV_POSTGRES_PASSWORD="$PGPASSWD"
export SINGULARITYENV_POSTGRES_DB="$PGDB"
# Require a password for TCP PostgreSQL connections (inc from localhost)
export SINGULARITYENV_POSTGRES_HOST_AUTH_METHOD=md5
export SINGULARITYENV_POSTGRES_INITDB_ARGS='--auth-host=md5'
export SINGULARITYENV_PGPORT="$PGPORT"
# The following three lines are required if using this Docker image
export SINGULARITYENV_LANG=en_US.UTF-8
export SINGULARITYENV_LC_ALL=en_US.UTF-8
export SINGULARITYENV_LC_COLLATE=C

# Start PostgreSQL in a container as a background process (see the trailing '&')
# (and restore the database dump):
singularity -d exec \
    -B $SQLFILE:/docker-entrypoint-initdb.d/create.sql \
    -B "$PGRUNDIR:/var/run/postgresql" \
    -B "$PGDATADIR:/var/lib/postgresql" \
    /fastdata/$USER/postgis_12-master.sif \
    /docker-entrypoint.sh postgres -h localhost 2>&1 >$PGLOGFILE &
PGPID=$!

# Wait for PostgreSQL to start
timeout 60 bash -c "until echo > /dev/tcp/localhost/$PGPORT; do sleep 1; done" 2>/dev/null
sleep 2

# Ensure MATLAB (R2019b) is loaded
module load apps/matlab/2019b

# Ensure MATLAB can find the JDBC driver needed to talk to PostgreSQL
mkdir -p ~/jars
wget -nv -N https://jdbc.postgresql.org/download/postgresql-42.2.14.jar -P ~/jars/
mkdir -m 0700 -p ~/.matlab/R2019b
grep -q "$HOME/jars/postgresql-42.2.14.jar" ~/.matlab/R2019b/javaclasspath.txt || \
    echo "$HOME/jars/postgresql-42.2.14.jar" >> ~/.matlab/R2019b/javaclasspath.txt

# Run a MATLAB script, 'pg_jdbc_test.m', that talks to the PostgreSQL server:
matlab -nodesktop -nosplash -r 'pg_jdbc_test;quit'

# Kill the PostgreSQL server after the MATLAB script finishes
[ -d /proc/$PGPID ] && kill $PGPID
```

The MATLAB script mentioned in the last comment above, `pg_jdbc_test.m`
should reside in the same directory the batch job script was submitted from.
This MATLAB script could contain something like the following to connect to the database.
MATLAB variables are populated using environment variables to avoid specifying the same info in two places.

```matlab
dbname = getenv('PGDB');
username = getenv('PGUSER');
password = getenv('PGPASSWD');
host = 'localhost';
driver = 'org.postgresql.Driver';
port = str2double(getenv('PGPORT'));
url = sprintf('jdbc:postgresql://%s:%d/%s', host, port, dbname);
conn = database(dbname, username, password, driver, url)
```

The database could then be queried from MATLAB using something like:

```matlab
selectquery = 'SELECT * FROM sometable;';
data = select(conn, selectquery);
% ...
close(conn);
```

When running all of the above as a batch job, MATLAB and Singularity plus the PostgreSQL server will all run within the control of the job manager:
if the job runs out of execution time or exceeds memory limits then it will rightfully be terminated, which is what the HPC system administrator would want.

**For Singularity geeks**: those familiar with Singularity know it's supposedly possible to run containers as background processes.
The use of [`singularity instance`](https://sylabs.io/guides/3.0/user-guide/running_services.html)
could have simplified the above shell script but
I couldn't get it to work
(the containerised service would always exit prematurely without creating any useful log info).

[gridengine]: https://arc.liv.ac.uk/trac/SGE
[postgresql]: https://www.postgresql.org/
[singularity]: https://sylabs.io/singularity/
[slurm]: https://slurm.schedmd.com/
[uos-hpc]: https://docs.hpc.shef.ac.uk/en/latest/
[sqlite]: https://www.sqlite.org/index.html
[ml-jdbc]: https://uk.mathworks.com/products/database/driver-installation.html
[pg-stored-proc]: https://www.postgresql.org/docs/12/xplang.html
