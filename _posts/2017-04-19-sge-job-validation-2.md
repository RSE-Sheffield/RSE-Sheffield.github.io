---
title: ! "Job validation with Grid Engine: false negatives"
author: Will Furnass
slug: sge-job-validation-2
date: 2017-04-19 10:15:00 UTC
tags:
category:
link:
description:
type: text
---

In [a previous post](link://slug/sge-job-validation), 
I noted that if you're not sure if a Sun Grid Engine (SGE) job can ever run on an [HPC cluster](https://en.wikipedia.org/wiki/Supercomputer)
you can perform 'dry-run' job validation:
by passing `-w v` as arguments to `qrsh`/`qrshx`/`qsh`/`qalter` you can ask the SGE scheduler software 
if your job could ever run if the cluster were entirely empty of other jobs.

For example:

        qsub -pe smp 2 -l rmem=10000G -w v myjob.sge

would most likely tell you that your job could not be run in any of the cluster's job queues 
(due to the size of the resource request).

**But beware:** 
as mentioned in my earlier post 
this his job validation mechanism sometimes results in *false negatives* i.e. you are told that a job cannot run even though though in reality it can.  
This is something that the HPC sysadmin team at the University of Leeds alerted us to.

Here's an example of a false positive (using our [ShARC](https://docs.hpc.shef.ac.uk/en/latest/sharc/) cluster.  
If you ask for a single-core interactive session with access to four GPUs then dry-run validation fails:

        [te1st@sharc-login1 ~]$ qrsh -l gpu=4 -w v
        ...
        verification: no suitable queues

yet (without validation) the resource request can be satisfied:

        [te1st@sharc-login1 ~]$ qrsh -l gpu=4 
        [te1st@sharc-node100 ~]$   # works!

The **reason for this** appears to be that the validation is performed 
without running any [Job Submission Verifier](http://gridscheduler.sourceforge.net/htmlman/htmlman1/jsv.html) (JSV) scripts.
These scripts are run (typically on the SGE master machine) on every submitted job to 
centrally modify or reject job requests post-submission.

On ShARC the main JSV script changes a job's [Project](http://gridscheduler.sourceforge.net/htmlman/htmlman5/project.html?pathrev=V62u5_TAG) 
from a generic one 
to `gpu` 
if `x > 0` GPUs have been requested using `-l gpu=x`.
The job can then be assigned to (GPU-equipped) nodes associated with that project.
So, if the JSV is not run before job validation (using `-w v`) then 
validation of jobs that request GPUs will fail as 
no nodes (more accurately *queue instances*) will be found that can satisfy the resource request 
given the (default) project of jobs.  

The workaround here is to explicitly request a Project (using e.g. `-P gpu`) 
when trying to validate a job using `-w v` 
i.e. partly duplicate the logic in the (bypassed) JSV,
but this requires that you know have read and understood the JSV.  
This is something that users may not want to do and adds complexity, 
when the whole point of investigating job validation in the first place was to 
find a simple way by which users could check if if their jobs could run on a given SGE cluster.

In summary, SGE's job validation mechanism is not a fool-proof option for users as 
it does not take into consideration changes made to a job by Job Submission Verifier scripts post-submission.
