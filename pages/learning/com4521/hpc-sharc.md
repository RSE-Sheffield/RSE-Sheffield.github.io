---
title: "COM4521/COM6521: Using ShARC (HPC)"
slug: com4521-hpc-sharc
layout: page
permalink: /training/com4521/hpc-sharc
date: 2023-03-03 17:00:00 UTC
tags:
category:
link:
description:
type: text
---

This page documents how the [ShARC](https://docs.hpc.shef.ac.uk/en/latest/sharc/index.html) HPC cluster can be used by COM4521/COM6521 students, this is predominantly to enable remote work on the assignment during the Easter break, however lab solutions are provided with a makefile which could be updated to work on HPC too.

This guide applies to [ShARC](https://docs.hpc.shef.ac.uk/en/latest/sharc/index.html) which uses the SGE (Sun Grid Engine) scheduler, much of the guidance is not suitable for other university HPC systems such as [Bessemer](https://docs.hpc.shef.ac.uk/en/latest/bessemer/index.html) and Stanage as those use a difference scheduler.

**Contents**

* [Prerequisites](#prerequisites)
* [Logging In](#logging-in)
* [Transferring Files](#transferring-files)
* [Your Assignment](#your-assignment)
  * [Compiling](#compiling)
  * [Running](#running)
  * [Profiling](#profiling)
  * [Debugging](#debugging)

## Prerequisites

Connecting to HPC has four requirements:

1. University HPC Account
2. Connected to the university VPN or on campus network
3. University MFA
4. SSH Client

Additionally, you will likely want to use a graphical SFTP (FTP over SSH) client to transfer files between your computer and the HPC system. Alternatively, `scp` can be used directly from your terminal or `git` can be used once logged into ShARC.

**University HPC Account**

To use university HPC you must first complete the [HPC Driving License](https://infosecurity.shef.ac.uk/) (VPN required), online training/test.

After completing the HPC Driving License notify me (r.chisholm(at)sheffield.ac.uk), and I can request a HPC account on your behalf. It normally takes 1-2 working days for HPC accounts to be created and granted access to DCS private hardware.

**University VPN**

In order to connect to the HPC cluster you will either need to be connected to the [university VPN](https://students.sheffield.ac.uk/it-services/get-connected/vpn) or on the campus network (e.g. wifi). This is the same requirement as many other digital campus-only resources.

**University MFA**

HPC authentication uses the [university's multifactor authentication](https://sites.google.com/sheffield.ac.uk/mfa/home).

You will be prompted to enter a one-time code or send a push notification to your MFA device after entering your username and password. You should already have MFA setup, as it is now required for all university accounts and VPN access.

**SSH Client**

Typically Linux, MacOS and Windows (10+) all have `ssh` available via the command line. You may use other SSH clients if you have a preference.

**SFTP Client**

The below guide explains how to use [FileZilla](https://filezilla-project.org), a cross-platform graphical SFTP client.

## Logging In

To login enter the following command in your terminal, replacing `$USER` with your university username e.g. `acb12de`.


```
ssh $USER@sharc.shef.ac.uk
```

You will then be prompted to enter you password

```
Password:
```

On password confirmation you will be prompted to select a MFA option.

Either enter a passcode directly from the Duo mobile app, or enter `1` and respond to the push notification.

```
Duo two-factor login for $USER

Enter a passcode or select one of the following options:

 1. Duo Push to $PHONE_NUMBER

Passcode or option (1-1):
```

If login was successful you should see a success message and login welcome.

```
Success. Logging you in...
*****************************************************************************
*         ShARC (Sheffield Advanced Research Computer) HPC cluster          *
*                       The University Of Sheffield                         *
*                       https://docs.hpc.shef.ac.uk                         *
*                                                                           *
*               Unauthorised use of this system is prohibited.              *
*****************************************************************************

[$USER@sharc-login2 ~]$
```

*[Official HPC Connection Docs](https://docs.hpc.shef.ac.uk/en/latest/hpc/connecting.html#connecting-to-a-cluster-using-ssh)*

## Transferring Files

Download and install the FileZilla **client** from [https://filezilla-project.org](https://filezilla-project.org).

When you first open FileZilla you need to create a site.

* Select Site Manager from the menu bar: `File -> Site Manager..`.
* Click `New site`, and enter the name `ShARC`.
* Enter the following properties in the right-hand panel:
    * General
        * **Protocol**: SFTP - SSH File Transfer Protocol
        * **Host**: `sharc.shef.ac.uk`
        * **Logon Type**: Interactive
        * **User**: Your username (e.g. `acb12de`)
    * Transfer Settings
        * **Limit number of simultaneous connections**: Should be ticked (true)
* Now you can click `Open` to connect to ShARC.

*When opening FileZilla in future, you can either select the `ShARC` site via the site-manager drop down (arrow next to the left-most icon in the icon bar), or reopen the site manager and double click `ShARC` to connect.*

When you connect, the interactive logon prompt will open, this works the same as logging into SSH. First you will be requested to enter your password, followed by a Duo passcode or `1` to use a push notification.

*[Official HPC Transferring Files Docs](https://docs.hpc.shef.ac.uk/en/latest/hpc/transferring-files.html)*

## Your Assignment

The [assignment handout code](https://github.com/RSE-Sheffield/COMCUDA_particle_assignment/archive/master.zip) has been updated to include an updated `Makefile` and a directory `scripts/sharc` with job scripts you may want to use.

*[Official Using GPUs on ShARC Docs](https://docs.hpc.shef.ac.uk/en/latest/sharc/GPUComputingShARC.html)*

### Compiling

**Interactive Session**

To compile your code on ShARC you must connect to an interactive session, interactive sessions do not have GPUs so can only be used for compilation.

You can request an interactive session with the `qrshx` command.

On success you should see the prompt change from `@sharc-login` to `@sharc-node`.

To leave the interactive session you can call `exit`.

```
[$USER@sharc-login2 ~]$ qrshx
[$USER@sharc-node009 ~]$ exit
exit
[$USER@sharc-login2 ~]$ 
```

**Loading Modules**

Lots of software is installed on the HPC system, therefore to prevent conflicts it is necessary to manually load the required software.

```
module load libs/CUDA/11.6.0/binary
module load dev/gcc/8.2
```

If you add these 2 lines to `.bashrc` (in your home directory), they will be automatically loaded every time you login to ShARC. Otherwise you will need to call them manually after each login as required.

**Building The Assignment**

If you navigate to where you have uploaded your assignment code (e.g. `cd com4521_assignment`) you now be should be able to call `make` to compile your project. *(Make sure you have updated the `Makefile` in the handout code.)*

`make` will produce a **Release build**, if you wish to produce a **Debug build** (e.g. for additional validation checks) you should instead call `make debug`.

*The output below is normal for compilation success, it merely shows the commands passed to the two compilers.*

```
[$user@sharc-node009 com4521_assignment]$ make
nvcc -c -o build/release/src/main.cu.o src/main.cu -gencode arch=compute_35,code=sm_35 -gencode arch=compute_60,code=sm_60 -gencode arch=compute_60,code=compute_60 -I. -Isrc -Wno-deprecated-gpu-targets -lineinfo -O3 -DNDEBUG -Xcompiler -fopenmp -Xcompiler -I. -Xcompiler -Isrc -Xcompiler -Wall -Xcompiler -O3 -Xcompiler -DNDEBUG
gcc -c -o build/release/src/helper.c.o src/helper.c -fopenmp -I. -Isrc -Wall -O3 -DNDEBUG
gcc -c -o build/release/src/cpu.c.o src/cpu.c -fopenmp -I. -Isrc -Wall -O3 -DNDEBUG
gcc -c -o build/release/src/openmp.c.o src/openmp.c -fopenmp -I. -Isrc -Wall -O3 -DNDEBUG
nvcc -c -o build/release/src/cuda.cu.o src/cuda.cu -gencode arch=compute_35,code=sm_35 -gencode arch=compute_60,code=sm_60 -gencode arch=compute_60,code=compute_60 -I. -Isrc -Wno-deprecated-gpu-targets -lineinfo -O3 -DNDEBUG -Xcompiler -fopenmp -Xcompiler -I. -Xcompiler -Isrc -Xcompiler -Wall -Xcompiler -O3 -Xcompiler -DNDEBUG
nvcc -o bin/release/Particles build/release/src/main.cu.o build/release/src/helper.c.o build/release/src/cpu.c.o build/release/src/openmp.c.o build/release/src/cuda.cu.o -gencode arch=compute_35,code=sm_35 -gencode arch=compute_60,code=sm_60 -gencode arch=compute_60,code=compute_60 -I. -Isrc -Wno-deprecated-gpu-targets -lineinfo -O3 -DNDEBUG -Xcompiler -fopenmp -Xcompiler -I. -Xcompiler -Isrc -Xcompiler -Wall -Xcompiler -O3 -Xcompiler -DNDEBUG
[$user@sharc-node009 com4521_assignment]$
```

Errors and warnings take the below form. The exact messages may differ from those you receive in Visual Studio, but the code you are working with should remain cross-platform.

```
src/cuda.cu(45): error: expected a ";"
```

### Running

**Note:** These sample job scripts do **NOT** include commands to compile your project. You may have to wait for a batch job to run, so you don't want it to fail due to compilation (see [Compiling](#compiling)).

Two sample job scripts `scripts/sharc/run.sh` and `scripts/sharc/run_debug.sh` have been provided for running your code. **You will need to modify copies of these scripts to specify different runtime argument for your application.**

The header of the job script contains a large number of parameters which can be modified to change things such as the requested job time, job name and email address to send job status updates to.


**Note:** The scheduler used (Sun Grid Engine) is unaware of GPUs, hence the number of GPUs requested is multiplied by the number of CPU cores requested. Therefore, you will find requesting more than 7 cores (the number of GPUs available) causes a job to queue indefinitely. Likewise, requesting 1 CPU core for non-OpenMP jobs should decrease queue times.

To submit the default job scripts call the desired command below from the root of your project:

```
qsub scripts/sharc/run.sh
qsub scripts/sharc/run_debug.sh
```

You can then use `qstat` to check the status of your job.

Once your job has completed, two log files e.g `com4521_run.sh.o12345` `com4521_run.sh.e12345` will have been created. These contain the output and error streams from your job. You should check these to ensure that your job ran successfully and to recover any important output such as timing and validation data.

The sample run jobs should also output the image `output_image.png` which you can download to check.

### Profiling

In order to profile code on HPC it is necessary to submit a job to generate timeline and analysis files which can be imported into visual profiler.

It is necessary to install the Visual Profiler to view these outputs. It can be installed on a machine without an Nvidia GPU by using the [command line silent flag](https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/#id3) (e.g. `cuda_installer.exe -s visual_profiler_12.1` if using the CUDA 12.1 installer). Visual Profiler also requires the [64-bit Java Runtime Environment](https://www.java.com/en/download/manual.jsp) to be installed, otherwise it will fail at launch.

To submit the default profiling job script call the below command from the root of your project:

```
qsub scripts/sharc/profile.sh
```

You can then use `qstat` to check the status of your job.

Once your job has completed, two log files e.g `com4521_profile.sh.o12345` `com4521_profile.sh.e12345` will have been created. These contain the output and error streams from your job. You should check these to ensure that your job ran successfully and to recover any important output such as timing and validation data.


**Note:** Profiling can be slow, therefore it's possible the default 10 minute job time will be exceeded and the job will fail. This can be checked by running `qstat -j <jobid>` and checking the output's `exit_status` to see whether it was killed.

The profiler will have created two output files `timeline.nvprof` and `analysis.nvprof`, you can download and import them into the Visual Profiler GUI.

* `File -> Import`
* Select Nvprof
* Select Single process
* Select `timeline.nvvp` for Timeline data file
* Add `analysis.nvprof` to Event/Metric data files
* Click Finish

<!--
In order to profile code on HPC it is necessary to submit jobs using [Nsight Systems](https://developer.nvidia.com/nsight-systems) and [Nsight Compute](https://developer.nvidia.com/nsight-systems), the outputs produced by these jobs can then be downloaded and viewed locally in the respective GUI applications on a machine without a GPU.

You can download Nsight Systems and Nsight Compute for your local computer [here](https://developer.nvidia.com/gameworksdownload) (you will be required to sign up for a free NVIDIA developer account).

A sample job script `scripts/sharc/profile.sh` has been provided for profiling a Release build of your code. Similar to running, you **you will need to modify a copy of this script to specify different runtime argument to your application**.

To submit the default profiling job script call the below command from the root of your project:

```
qsub scripts/sharc/profile.sh
```

You can then use `qstat` to check the status of your job.

Once your job has completed, two log files e.g `com4521_profile.sh.o12345` `com4521_profile.sh.e12345` will have been created. These contain the output and error streams from your job. You should check these to ensure that your job ran successfully and to recover any important output such as timing and validation data.

The profilers will have created two output files e.g. `nsys-out.qdrep` and `ncu-out.ncu-rep`, you can download them to open locally with Nsight Systems and Nsight Compute respectively.

The module does not cover usage of the modern profiling tools or interpretation of their reports (as they are not yet supported on the managed desktops). Instead you can check their [respective](https://docs.nvidia.com/nsight-systems/UserGuide/index.html#cuda-trace) [documentation](https://docs.nvidia.com/nsight-compute/NsightCompute/index.html#profiler-report). You will also find many video guides on youtube if you search their respective names.
-->

### CUDA Memory Checker

Compute sanitizer is available on HPC similar to the managed desktops, it can be executed with the sample job script to memory check Debug builds of your code. As before, **you will need to modify a copy of this script to specify different runtime argument to your application**.

```
qsub scripts/sharc/cudamemchk.sh
```

On completion, Compute sanitizer's output will be found in the two output files e.g `com4521_cudamemchk.sh.o12345` `com4521_cudamemchk.sh.e12345`.

### Debugging

In order to interactively debug your code on HPC it is necessary to get an interactive GPU session. This will only be possible when there are free GPU nodes.

**Note:** `gdb` and `cuda-gdb` are complex and powerful applications, you may wish to attempt debugging with `printf()` first.

An interactive GPU session, can be requested with the below command:

```
qrshx -l gpu=1 -P rse -q rse-interactive.q
```

If this succeeds, and you have loaded the same two modules required for compilation, you should then be able to use `cuda-gdb` to interactively debug your application.

```
cuda-gdb --args "bin/debug/Particles" CUDA 100 512x512 output_image.png
```

Refer to the [`gdb`](https://sourceware.org/gdb/current/onlinedocs/gdb.html/) and [`cuda-gdb`](https://docs.nvidia.com/cuda/cuda-gdb/index.html) documentation respectively (`cuda-gdb` is an extension of `gdb` so `gdb` information is transferable if you do not require the CUDA debugging features). 
