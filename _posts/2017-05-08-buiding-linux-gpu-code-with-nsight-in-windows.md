---
title: Building Linux GPU Code with NSIGHT in Windows
author: Paul Richmond
slug: building-linux-gpu-code-with-nsight-in-windows
date: 2017-05-08 16:03:00 UTC
tags:
category: gpucomputing
link:
description:
type: text
---

Why would you possibly want to build and execute CUDA GPU applications within NSight Eclipse for Linux within Microsoft Windows? Well if you use windows as your main OS there are plenty of reasons but the most obvious is that you may be developing cross platform code and want to build and test it without dual booting. If you are thinking about virtual machines then forget about it. Most (except some very expensive enterprise options) do not have the ability to access a GPU device (e.g GPU pass-through) from within a virtual machine. 

The purpose of this post is to describe how to install the necessary tools to permit local GPU development inside the Linux NSight IDE from within Windows. The advantages of which are not only cross platform development but also the ability to locally develop in powerful Linux IDE with remote execution and graphical debugging. This is particularly helpful if you want to execute or debug your code on a HPC system (like Sheffield's ShARC system) from Windows. The post focuses on the use of the new Windows 10 Linux subsystem, however you could use the approach to install CUDA tools on a lightweight Linux virtual machine. The concept is the same either way. i.e. build and debug locally execute remotely.


## Configuring the Linux Windows Subsystem for CUDA compilation

The Windows 10 subsystem for Linux is available in the anniversary update. You can install it from the "Turn on or off windows features" dialogue. It is listed under "Windows subsystem for Linux (beta)". This alone is not enough to build our GPU applications as we will need to install CUDA. A normal CUDA install will require a local GPU and the installation of a CUDA compatible graphics driver. Fire up the Windows Bash Shell (or a Linux virtual machine). You can then use the following commands to install the CUDA toolkit without installing a graphics driver. This will install the core NVIDIA CUDA compiler (nvcc) and NSight. You can update the `CUDA_REPO_PKG` variable to install a different CUDA version.
	
	sudo apt-get update
	CUDA_REPO_PKG=cuda-repo-ubuntu1404_8.0.44-1_amd64.deb
	wget http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1404/x86_64/$CUDA_REPO_PKG
	sudo dpkg -i $CUDA_REPO_PKG
	sudo apt-get update
	sudo apt-get install -y --no-install-recommends cuda-core-8-0 cuda-cudart-dev-8-0 nsight

You can now create a symbolic link to a generic CUDA install. This will permit the addition and fast swapping of different CUDA versions.

	sudo ln -s /usr/local/cuda-8.0 /usr/local/cuda 
	export PATH=$PATH:/usr/local/cuda/bin
	
Note: if you want the CUDA bin location to be persistently on the PATH (after you reboot the Bash shell) then you will need to add the `export PATH` line to your .bashrc profile. Test that the install was successful by running nvcc.

	nvcc --version
	
This should give you some information on the nvcc version. e.g. 

	nvcc: NVIDIA (R) Cuda compiler driver
	Copyright (c) 2005-2016 NVIDIA Corporation
	Built on Tue_Jan_10_13:22:03_CST_2017
	Cuda compilation tools, release 8.0, V8.0.61

The CUDA toolkit is now installed so you can build (but not execute) CUDA GPU programs using the Linux bash shell.

## Graphical editing with Nsight IDE

To be able to run a graphical NSight IDE from within the Windows subsystem for Linux you will need to be running a X server within Windows. You can install the **free** [XMing](https://sourceforge.net/projects/xming/) application for this purpose. If you would rather use a Linux virtual machine then you can avoid this step as the virtual machine will most likely have an X server included. The advantage of the Windows subsystem approach is that it is very lightweight. From within your Bash terminal you will need to set the following environment variable.

	export DISPLAY=:0
	
The display variable is an environment variable passed to graphical applications. In this case, the value of `:0` it tells the application to use the first display on the local system (our XMing server in this case). If you want to make this environment variable change permanent then you should add it to your .bashrc profile. You can now run the NSight application from Bash.

	nsight
	
Glorious isn't it. Within NSight we can create a new CUDA project which will compile using the local CUDA install. In order to remotely execute and debug you can use the "C++ Remote application" run configuration. This will require SSH access to a suitable Linux machine with a GPU and CUDA installed.

Future blog posts will cover how remote execution and debugging can be achieved on the University of Sheffield ShARC system. ShARC has a typical of job based HPC system which encourages job submission rather than execution of code on worker nodes via SSH logins. 


## Summary of Bash Profile Changes

I added the following to my .bashrc profile (located in the home directory) to ensure that NSight could be launched straight after starting the Bash shell in Windows.
 
	# add cuda bin dir to path
	export PATH=$PATH:/usr/local/cuda/bin

	# export the display environment variable
	export DISPLAY=:0
