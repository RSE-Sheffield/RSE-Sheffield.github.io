---
title: Job validation with Grid Engine
author: Will Furnass
slug: sge-job-validation
date: 2017-03-20 10:44:00 UTC
tags:
category:
link:
description:
type: text
---

(**Edit**: caveats are listed in a [more recent post](link://slug/sge-job-validation-2))

Computer cluster job scheduling software is fantastic at managing resources 
and permitting many jobs to run efficiently and simultaneously.  
However, schedulers aren't always great at giving end-users feedback 
when things go wrong.  

For example, on our ShARC cluster, which runs the (Son of) Grid Engine (SGE) scheduler, 
if you request a longer run-time than is permitted by any of the cluster's job queue configurations 
then your job will sit there queueing indefinitely until you or someone else deletes it.  
For example, let's use [qsub](http://docs.hpc.shef.ac.uk/en/latest/hpc/scheduler/sge.html#running-batch-jobs-on-iceberg) 
to submit a job where we ask for 1000 hours of run time and 4 GiB of RAM:

```bash
[will@mysofa ~]$ ssh sharc
...
[te1st@sharc-login1 ~]$ qsub -l h_rt=1000:00:00 -l rmem=4G -m bea -M w.furnass@sheffield.ac.uk -N longtask myjobscript.sge

Your job 236268 ("STDIN") has been submitted
[te1st@sharc-login1 ~]$ qstat -u $USER
job-ID  prior   name       user         state submit/start at     queue                          slots ja-task-ID 
-----------------------------------------------------------------------------------------------------------------
 217834 0.00000 longtask   te1st        qw    03/20/2017 10:48:39                                    1        
```

Job 217834 will now sit queuing forever.  
Not only will you not be told why, 
you won't be given *any* notification that the job will not run.

In situations like this it can be useful to ask the scheduler to validate a job.  
One way of doing this is to run '``qalter -w v <myjobid>``' after job submission 
if say you think that a job has now been queueing for longer 
than previously-submitted jobs of a similar nature:

```
[te1st@sharc-login1 ~]$ qalter -w v 217834
Job 217834 (-l h_rt=3600000) cannot run in queue "flybrain.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "gpu.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "gen2reg.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "rse.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "gpu-vis.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "insigneo-polaris.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "interactive.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "shortint.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "all.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "evolgen.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "rse-training.q" because of cluster queue
Job 217834 (-l h_rt=3600000) cannot run in queue "cstest.q" because of cluster queue
verification: no suitable queues
```

What this '`qalter -w v <myjobid>`' command does is check to see whether the job could run 
in any of the job queues on the cluster 
if the cluster were free of other jobs. 

The last line of output is key: 
our job will never be run given the current cluster configuration.  
Looking above that, we can see that it cannot run in any of the general-purpose job queues 
(such as `all.q`) and 
there is specific mention of our 1000 hour (3600000s) run-time resource request.  
We can therefore deduce that our run-time resource request wasn't satisfiable.

## Modifying a resource request post-submission

Once we know that our job can't run we could then delete our job...

```bash
[te1st@sharc-login1 ~]$ qdel 217834 
te1st has deleted job 217834 
```

...then consult the cluster's documentation to discover the maximum possible run-time and resubmit using more sensible resource requests.  

Alternatively we can use **qalter** to modify the resource requests associated with a queueing job:

```bash
qalter -l h_rt=96:00:00 -l rmem=4G 217834 
```

**Important**: using ``qalter`` in this fashion will change **all** resource requests for the job so here we need to re-specify the ``rmem`` request.

## Job validation at submission time

You can also perform the same type of job validation **at job submission time** using ``-w v`` e.g.

```bash
qsub -w v -l 1000:00:00 -l rmem=4G myjobscript.sge
```

This won't actually submit your job; it just performs validation.

## Why is validation not performed by default?

You may ask why such validation is not enabled by default for all jobs; 
one reason for this is that it is believed it would place undue burden on the scheduler.

Another is that sometimes a validation attempt results in a false negative that can be difficult to automatically identify
(**edit**: see this [more recent post](link://slug/sge-job-validation-2) for details).

## Other types of resources

If you repeat the experiment outlined above but 
instead of requesting 1000 hours of runtime 
you ask for 100 GPUs, 9999GB of RAM or 10000 cores 
you'll observe the same behaviour: jobs that make requests unsatisfiable under the current cluster configuration can be submitted but will never run.

Again, job validation can help here but depending on the type of resource the validation error messages can be more or less cryptic.  
For example, if you try to validate a 100000-'slot' (core) MPI job using ``-w v`` you get the following:

```
qsub -pe mpi 100000 -w v somejob.sge
...
Job 311838 cannot run in PE "mpi" because it only offers 0 slots
```

This is rather misleading but the mention of 'slots' should prompt you to check the number of cores you've requested is sensible.


## 'Poke' validation: consider the current cluster load

Another type of validation is *poke* validation, 
which checks if a job could be run under the current cluster *load* 
i.e. with many of the cluster's resources already in use.  
See ``man qsub`` and search for ``-w`` 
for more information on the different types of validation.
