---
title: Determining MPI placement on the HPC clusters
author: Mike Croucher
slug: mpi_placement
date: 2017-04-01 16:03:00 UTC
tags:
category:
link:
description:
type: text
---

Say you request a 16 slot MPI job on ShARC with 3GB per-process using a submission script like the one below:

```
#!/bin/bash
#Tell the scheduler that maximum runtime is 1 hour
#$ -l h_rt=1:00:00
#Request 16 slots
#$ -pe mpi 16
#Request 3 Gigabytes per slot
#$ -l rmem=3G

#Load gcc 4.9.4 and OpenMPI 2.0.1
module load dev/gcc/4.9.4
module load mpi/openmpi/2.0.1/gcc-4.9.4

mpirun  ./MPI_hello_world
```

The scheduler is free to decide where on the system your 16 slots get placed. You may have all 16 slots running on one node, one slot per node for 16 nodes or anything in between. The exact placement of your jobs may affect runtime.

We can find out where the scheculer placed your MPI processes using the `$PE_HOSTFILE` environment variable. When your job starts running, this points to a file that contains placement information. We make use of it in a submission script as follows

```
#!/bin/bash
#Tell the scheduler that maximum runtime is 1 hour
#$ -l h_rt=1:00:00
#Request 16 slots
#$ -pe mpi 16
#Request 3 Gigabytes per slot
#$ -l rmem=3G

#Load gcc 4.9.4 and OpenMPI 2.0.1
module load dev/gcc/4.9.4
module load mpi/openmpi/2.0.1/gcc-4.9.4

#Put placement information into node_info.txt
cat $PE_HOSTFILE  > node_info.txt

mpirun  ./MPI_hello_world
```
You'll now get a file called `node_info.txt` that contains information about which nodes your MPI slots were placed. For example
```
sharc-node031.shef.ac.uk 1 shortint.q@sharc-node031.shef.ac.uk UNDEFINED
sharc-node069.shef.ac.uk 1 shortint.q@sharc-node069.shef.ac.uk UNDEFINED
sharc-node112.shef.ac.uk 1 shortint.q@sharc-node112.shef.ac.uk UNDEFINED
sharc-node108.shef.ac.uk 1 shortint.q@sharc-node108.shef.ac.uk UNDEFINED
sharc-node081.shef.ac.uk 1 shortint.q@sharc-node081.shef.ac.uk UNDEFINED
sharc-node090.shef.ac.uk 2 shortint.q@sharc-node090.shef.ac.uk UNDEFINED
sharc-node080.shef.ac.uk 2 shortint.q@sharc-node080.shef.ac.uk UNDEFINED
sharc-node050.shef.ac.uk 3 shortint.q@sharc-node050.shef.ac.uk UNDEFINED
sharc-node059.shef.ac.uk 4 shortint.q@sharc-node059.shef.ac.uk UNDEFINED
```

In the above example, 4 slots were placed on node059, 3 slots on node 50, 2 slots on nodes 080 and 090 and one slot on the other listed nodes. 
