---
title: Intel Training Workshop
permalink: /training/intel/
date: 2015-12-19 18:38:02 UTC
tags:
category:
link:
description:
type: text
---

# About

This workshop comprises two half-day sessions that will show you how to program multicore (e.g. Xeon) and massively multicore (e.g. Xeon Phi) computers using C++. The course is delivered by [Christopher Woods](http://www.bristol.ac.uk/brissynbio/people/person/christopher-j-woods/index.html) (RSE FEllows) from Research Software Engineering group at the University of Bristol. The course is facilitated by [Paul Richmond](http://paulrichmond.shef.ac.uk/) and [Mozhgan K. Chimeh](http://mkchimeh.staff.shef.ac.uk/) from RSE Sheffield.

The course will run in Computer Room ALG04 (40) in Bartolomé House, Winter Street, Sheffield, S3 7ND (Sheffield University Building number 101 - [see campus map](https://www.sheffield.ac.uk/polopoly_fs/1.656475!/file/campus-map-a-z-oct16.gif))

# Getting started with Iceberg

The workshop will utilise Iceberg, the University of Sheffield HPC system. Everyone should have completed the user-name request form and as a result you have been added to a special project group and queue. This will enable us to access some dedicated nodes which have been put aside for us to use. If you did not supply your user-name you can still take part however you may need to queue (wait) for an interactive session if the rest of iceberg is busy.

To log into iceberg use SSH from Linux use the following command where *username* is your IT Services and iceberg username.

    ssh username@iceberg.shef.ac.uk


To log into Iceberg from Windows use the Putty SSH client. Putty should be available from the software centre on managed desktop. You only need to enter ```iceberg.shef.ac.uk``` into the Host Name (or IP address) box in the session view and then click Open. You will be promoted for your username and password.

You should now be connected to a head (login) node. Do not use the head node for any of the exercises! You should instead use the dedicated nodes by requesting an interactive session. This requires specifying the special project group (```-P```) and queue (```-q```). As we are running parallel code we will also need to request more than a single processing core using the ```-pe openmp [number of cores]``` command. E.g.

    qrsh -pe openmp 4 -P training -q training.q

Your command window will change from the head node to one of the dedicated nodes. I.e.

    [co1pr@iceberg-login1 ~]$

Will change to

    [co1pr@node119 ~]$

This indicates that you are on Node 119.

# Getting the Source Material

Each of the course content links below provide a downloadable link containing the starting code. You can either download this on your desktop and upload it to iceberg using SFTP (port 22) or fetch it directly from  the web using wget. E.g. From your interactive session type:

    wget http:/somelocation.com/a_file.tgz

# Modules Required

Once you are in an interactive session you will need to load a number of modules to set up the compilers and libraries used in the exercises. Load a GCC compiler with the following command (other version are availble but are untested).

    module load compilers/gcc/5.4

Load the Intel TBB library with the following command

    module load libs/binlibs/intel-tbb/2017.0

Ok. Now your ready to get started on the workshop exercises.

# Day 1: 30th November, 2pm-5pm - Parallel Programming with C++

This is a short course that will give you a taste of functional programming in C++ and how it can be used to write efficient parallel code. It will show how functional programming enables you to take advantage of modern parallel libraries, such as Intel's Threading Building Blocks. This enables you to express your program as a set of tasks, with associated dependencies between tasks. These tasks are then passed to the parallel library, which manages efficient scheduling and processing of those tasks across all of the cores available in your computer.

Course Material is available at [http://chryswoods.com/parallel_c++/](http://chryswoods.com/parallel_c%2b%2b/)

# Day 2: Session 2 - 1st December, 10am-1pm - Efficient Vectorisation with C++

This session will show you how to efficiently vectorise your C++ code. This will allow your software to make good use of the increasingly larger vector units that are appearing on modern multicore and massively multicore processors. It will show you how vectorisation can be performed at multiple levels, from simple compiler flags and pragmas, via libraries, or via direct use of vector intrinsics. You will learn why processor manufacturers are increasingly turning to vector units to improve performance, and how to best lay your program data out in memory to ensure optimal vector performance. By combining efficient vectorisation with parallel programming, you will ensure that your program makes optimal use of modern processors such as Xeon and Xeon Phi.

Course Material is available at [http://chryswoods.com/vector_c++/](http://chryswoods.com/vector_c%2b%2b/)

# Other information

Lunch is not provided. Refreshments are available throughout the day from  Bartolomé Café on the basement level.

# Feedback

Please take the time to complete the [feedback form](https://docs.google.com/forms/d/e/1FAIpQLSey-EBMgr99kO4Za7FxOb7VuG4L_9w27_3TTxgexBVlGbpoFA/viewform?edit_requested=true) for this workshop.
