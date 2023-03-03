---
title: "COM4521/COM6521: Parallel Computing with Graphical Processing Units (GPUs)"
slug: com4521
layout: page
permalink: /training/com4521/
date: 2023-02-01 17:00:00 UTC
tags:
category:
link:
description:
type: text
---


## Course Information

Welcome to the 2022/2023 module page for COM4521/COM6521 Parallel Computing with GPUs.

Accelerator architectures are discrete processing units which supplement a base processor with the objective of providing advanced performance at lower energy cost. Performance is gained by a design which favours a high number of parallel compute cores at the expense of imposing significant software challenges. This module looks at accelerated computing from multi-core CPUs to GPU accelerators with many TFlops of theoretical performance. The module will give insight into how to write high performance code with specific emphasis on GPU programming with NVIDIA CUDA GPUs. A key aspect of the module will be understanding what the implications of program code are on the underlying hardware so that it can be optimised.
 
The modules aims, objectives and assessment details are available on the [module's public teaching page](http://www.dcs.shef.ac.uk/intranet/teaching/public/modules/level4/com4521.html).

The module was first developed by [Professor Paul Richmond](https://www.sheffield.ac.uk/dcs/people/academic/paul-richmond). His previous webpage for the module can be found [here](https://paulrichmond.shef.ac.uk/teaching/COM4521/).

## Software for the Module

The module's programming exercises are designed to be completed on PCs in the Diamond compute labs. All Diamond compute lab machines have Visual Studio 2022 and CUDA 11.7.1 If you intend to use your own machine for programming exercises (on the CUDA part of the module) then you **must** install the latest Community version of Visual Studio 2022 **before** you install the CUDA toolkit. Lab and assignment code should work with other recent versions of CUDA, however may require changing the targeted version of CUDA when opening the Visual Studio project.

If you want to complete the exercises in Linux then example Makefiles will be provided with the lab (and assignment) starting code and solutions. It is not possible to build Linux CUDA programs on PCs in the Diamond compute labs.


## Computers & Labs Available

As the module requires access to a machine with a GPU the following have been made available to you.

* All diamond Compute Labs (other than High spec lab) - All diamond 'all in one' machines have an NVIDIA GTX1050 (Pascal generation) GPUs. Dedicated lab classes are available most weeks, reserving these machines. You can find machine availability outside of lab times by using [Find a PC](https://www.sheffield.ac.uk/findapc)
* Diamond High Spec Lab - These are higher spec machines with NVIDIA Quadro 5200 (Pascal generation) GPUs.
* Other University Machines - As of 2021 the following buildings have computer labs containing machines with GPUs: Heartspace, IC, Hicks, Firth Court, Elmfield. It may be necessary to install Visual Studio and the CUDA toolkit on these machines on first use.  
* Your own Windows/Linux machine - Follow the instructions under "software for this module".
* University HPC - For more information refer to [dedicated guide](./hpc-sharc).

## Course Attendance Monitoring

A register may be taken during some lab classes for [attendance monitoring](https://www.sheffield.ac.uk/new-students/attendance-monitoring), additionally a register will be collected (based on UCards) at each Blackboard quiz.

Important Note: **It is not possible to properly understand the course material without completing the labs and reviewing the solutions.** If you do not complete the labs then you will find the assignment difficult. The first lecture will provide some insight into how course engagement affects assessment performance.

## Lectures

It is recommended that all students attend the first lecture in person. Subsequent lectures will be delivered in-person, and made available using the flip classroom approach. Attending the lectures has the benefit that there will often be time for questions to be answered. The flip classroom lecture content has been pre-recorded into bite sized chunks of ~10-15m each by the previous lecturer (Prof. Paul Richmond). If you choose not to attend the in-person lectures, you are expected to listen to each week's flip classroom lectures **in advance** of the corresponding lab. 

## In Person Lab Classes

The lab sessions occur weekly in the Diamond's Computer Room 1 from 09:00-11:00 on Tuesdays.
These lab sessions are attended by myself and a number of graduate teaching assistants (GTA) able to answer questions and provide support in understanding the module's content.

The lab classes have been designed to re-enforce the material which you will observe in the lectures by applying the techniques and approaches to specific problems. You should aim to attempt the lab classes exercises **prior** to attending the lab class (i.e. the week before) and use the labs to obtain help in understanding and applying the taught content. The lab class solutions are commented to provide insight. The solutions are available in advance of the lab so if you are stuck on a particular exercise then review these to move on and seek help in understanding the problem and solution in the lab class. Within the labs, pair programming or work within small groups is encouraged but left to personal preference. Discussion is encouraged. 

During the lab class there will be an opportunity to discuss and review lecture content, lecture examples and lab solutions. Guided walkthroughs of certain parts of the lab solutions may be provided.

Although the labs are structured around the lecture material each week you can (and should) ask for help regarding any of the labs during the scheduled lab time. The labs are also used for assignment help. You should start this early.

## Course Assessment

In response to student feedback the number of assignments has been reduced to a single assignment which reflects the reduced number of learning objectives for the module. The assignment will be released Monday the 27th February (week 4) and is due 17:00 on Friday 19th May (week 12). The assignment forms 80% of your mark. You are expected to ask for feedback on your assignment work during the scheduled lab classes.

The remaining 20% of the module mark is from two Blackboard quizzes which must be completed under exam conditions. e.g. Within the specified locations with the lockdown browser under invigilation from demonstrators.  

These Blackboard quizzes replace the lab classes of weeks 5 and 10.

* Week 5 - 09:00 on the 7th March in Diamond Computer Room 1
    * Quiz content covers lectures from weeks 1-3 (inclusive).
* Week 10 - 09:00 on the 2nd May in Diamond Computer Room 1
    * Quiz content covers lectures from weeks 4-9 (inclusive).

Quizzes will take 45m (must be completed within the hour) and consist of 25 multiple choice questions.


## DDP students & Staff Candidates

PhD students and staff are able to take the module subject to capacity limitations (taught students have priority).

PhD students and research/academic staff are not required to undertake assessment but DDP students are expected to attend labs as evidence of participation in the module. You should ensure that you enroll for the course via DDP to ensure that you have access to the Blackboard.

If you are a member of staff wishing to attend the module, please contact the Computer Science teaching admins (com-teaching(at)sheffield.ac.uk) so that they can process your request.

## Discussion, Announcements and Requests for Help

A [Google group](https://groups.google.com/a/sheffield.ac.uk/d/forum/com4521-group) has been created for announcements, help and discussion. Any important announcements relating to the module will be made via this group. All students enrolled on the module on the 2nd February 2023 have been added to this group already. Likewise staff and PhD students who expressed an interest in the course via the Google form have been added. If you have transferred via Add/Drop then you will need to manually join the group yourself. The group is monitored by staff (including lab assistants) who can provide help. The purpose of the mailing list is to ask for general support and guidance with the course material (e.g. with concepts and ideas) rather than posting your own code. **You should not post your assignment code on this forum**. If you require personal assistance with your assignment code then you should request this during the lab hours. Any lab class can be used for assignment help in addition to the lab exercises which are set each week.

[https://groups.google.com/a/sheffield.ac.uk/d/forum/com4521-group](https://groups.google.com/a/sheffield.ac.uk/d/forum/com4521-group)


# Course Material

In-person lectures will be delivered from 10:00-12:00 on Mondays in [Broad Lane](https://ssid.sheffield.ac.uk/campus-map/?location=broad-lane-block) Lecture Theatre 2 (accessed via either [Mappin](https://ssid.sheffield.ac.uk/campus-map/?location=sir-frederick-mappin-building) or [Pam Liversidge](https://ssid.sheffield.ac.uk/campus-map/?location=pam-liversidge)).
Due to the national bank holidays, normal lectures in weeks 10 and 11 are not possible. Therefore, an additional lecture has been added at 09:00-11:00 on Friday of week 10 in [Pam Liversidge's](https://ssid.sheffield.ac.uk/campus-map/?location=pam-liversidge) Lecture Theatre 1.

Additionally, the week 12 lecture has been replaced with an additional assignment help lab class in Diamond Computer Room 2.

Pre-recorded lectures from the previous lecturer are available on the [COM4521 Parallel Computing with Graphical Processing Unit's Kaltura Channel](https://digitalmedia.sheffield.ac.uk/channel/COM4521+Parallel+Computing+with+Graphical+Processing+Units/201133333) or as downloadable pdfs on [Google Drive](https://drive.google.com/drive/folders/1XxXJdrzSP6XFwrzzEnNv1BLptfsgZOXu?usp=sharing). These cover the same content as the in-person lectures, required for the Blackboard quizzes and assignment.

Each week's practical activities (the labs) follow the ideas presented in the lectures so it is important that you follow the lecture and lab timetable below.

## Week 1

### Lecture 1

*Monday 10:00 Broad Lane LT2*

* Course Introduction & Overview ([pdf](https://drive.google.com/file/d/1wb3OYH7b1Y7ptAbo4UVo88dqX0ILct77/view?usp=share_link), [pdf with notes](https://drive.google.com/file/d/1wksBhlYw8VUU-zdJBW0LRtPqL7zqV1YL/view?usp=share_link))
* Introduction to C ([pdf](https://drive.google.com/file/d/1347oK2tUB1nzoCcBdnkedMTIpZRhv7tE/view?usp=share_link), [pdf with notes](https://drive.google.com/file/d/19h9MNDiOJsKc-j3ThFQvkgoJHEDMSkkw/view?usp=share_link))

#### Flip Classroom Pre-recorded Lectures

* ~~Module Details~~ (Not available, please attend in person or check Encore)
* Course Context ([pdf](https://drive.google.com/open?id=1E0291GtCX_s_5QVHZllq1e6FJaHPorv8), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+01+-+Part+01+-+Course+Context/1_4ozidnx3))
* Supercomputing and Software ([pdf](https://drive.google.com/open?id=1E87UUwB1eZAsoCvBfTN00BEcTj9Grq0E), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+01+-+Part+02+-+Super+Computing+and+Software/1_3cae6aog))
* Introducing C ([pdf](https://drive.google.com/file/d/1_mL4lhg2sb7Ez4-BzFEele6MXggXBiUK/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+02+-+Part+01+-+Introducing+C/1_eakd0424))
* Functions and Scoping ([pdf](https://drive.google.com/file/d/1tM_1D7w0WuVcvzU8QrdaEaZIf7-cgs6R/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+02+-+Part+02+-+Functions+and+Scoping/1_cf4tnuln))
* Arrays, Strings and IO ([pdf](https://drive.google.com/file/d/1KqpjzKsc5QjPq-qDKueT1EQBaP8ZCZeJ/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+02+-+Part+03+-+Arrays+Strings+and+IO/1_60zchnsf))

### Lab 1 - Introduction to Visual Studio & C Programming

*Tuesday 9:00 Diamond CR1*

* [Getting Started with Visual Studio 2022 Overview](https://drive.google.com/file/d/1XkZcJ5LPdq5IDI4hG7z0HNEdwyZ7yuB9/view?usp=share_link)
* [Lab Sheet](https://drive.google.com/file/d/1BC7kDWk0za9ljbEUPK-RTgSyGIWT_t5y/view?usp=share_link)
* [Starting Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab01_src.zip)
* [Solution](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab01_sln.zip)
* [Frequently Asked Questions](./labs/1)

--------------------

## Week 2

### Lecture 2

*Monday 10:00 Broad Lane LT2*

* Memory ([pdf](https://drive.google.com/file/d/1Q3SPHDw-yKYEpnScqV6fSMmataXOIu5w/view?usp=share_link), [pdf with notes](https://drive.google.com/file/d/1ANbbpze6znQfaIyjknz-ZS6Thki8jsW-/view?usp=share_link))
* Optimisation ([pdf](https://drive.google.com/file/d/1hB7s7RtsGnX-LCQs9H0xvxisekWSg0cd/view?usp=share_link), [pdf with notes](https://drive.google.com/file/d/1YsfnQOHh1m_JvwDISpHfrg4c3314NcFL/view?usp=share_link))

#### Flip Classroom Pre-recorded Lectures

* Pointers ([pdf](https://drive.google.com/file/d/1ek2YjPLMDwdtRJVlUrmPZ31SV6E7UWbV/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+03+-+Part+01+-+Pointers/1_2lxp7wyb))
* Advanced use of Pointers ([pdf](https://drive.google.com/file/d/1TuHaiow_oGjXOWvTy05CFY3lw0bwKh2Y/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+03+-+Part+02+-+Advanced+Pointers/1_v4x7d5sr))
* Dynamically Managed Memory ([pdf](https://drive.google.com/file/d/1tnGYCG48XOYMhUf78dJT-VT1kT4d6lFp/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+03+-+Part+03+-+Manual+Memory+Management/1_4j49qhoj))
* Structures and Binary Files ([pdf](https://drive.google.com/file/d/1Pl_wx-H9dDXfGfKEprxs6jg3RzrTSnVq/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+03+-+Part+04+-+Structures+and+Binary+Files/1_38omyxrt))
* Optimisation Overview ([pdf](https://drive.google.com/file/d/1wVdzbq9DL0S-qK0K1np084Mc8mF7CWNb/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+04+-+Part+01+-+Optmisation+Overview/1_z09qnv7q))
* Compute Bound Code ([pdf](https://drive.google.com/file/d/17xQZlwihTvo2vEEWPpb5k8EWOqXezz3U/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+04+-+Part+02+-+Compute+Bound+Code/1_t74gjrqg))
* Memory Bound Code ([pdf](https://drive.google.com/file/d/1pi7FnfWd_0YcMouXTnktV7Pu4BDXoEOh/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+04+-+Part+03+-+Memory+Bound+Code/1_eaa6z5dh))

### Lab 2 - Memory & Performance

*Tuesday 9:00 Diamond CR1*

* [Lab Sheet](https://drive.google.com/file/d/1CPVT4mY909_srrhuGMmlsSZ6BAZGLPTY/view?usp=sharing)
* [Starting Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab02_src.zip)
* [Solution](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab02_sln.zip)
* [Frequently Asked Questions](./labs/2)

--------------------

## Week 3

### Lecture 3

*Monday 10:00 Broad Lane LT2*

* OpenMP ([pdf](https://drive.google.com/file/d/1ytyu8o4o1MlIfZWBugMT65UiOiPN-Cuc/view?usp=share_link), [pdf with notes](https://drive.google.com/file/d/1fJJxAi9eZ0g-mOSFlPEF_q7t0pRcnYGQ/view?usp=share_link))

#### Flip Classroom Pre-recorded Lectures

* OpenMP Overview ([pdf](https://drive.google.com/file/d/1Y9EUh835wkh8bwMHyNhu0fzFQGlygGl1/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+05+-+Part+01+-+OpenMP+Overview/1_tr35veym))
* Loops and Critical Sections ([pdf](https://drive.google.com/file/d/1adfofgTWGOGqUwOuDgTS9OW_nVDeBS3n/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+05+-+Part+02+-+Loops+and+Critical+Sections/1_j4mfsl94))
* Scoping and Tasks ([pdf](https://drive.google.com/file/d/14RxdZl6x2GYiCjbbi_1g1j5B5GhlXfzA/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+05+-+Part+03+-+Scoping+and+Tasks/1_tfgpqt3a))
* Parallel Reduction ([pdf](https://drive.google.com/file/d/1DhPA-mFid4mFkUkFsRacIjzrPPvqpQs2/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+06+-+Part+01+-+Parallel+Reductions/1_0wfcdxdy))
* Scheduling ([pdf](https://drive.google.com/file/d/1n86lfK9u96e6VaqxONkqFg0yTqbIqET-/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+06+-+Part+02+-+Scheduling/1_jbiq6pkl))
* Nesting and Summary ([pdf](https://drive.google.com/file/d/1V-ufrzqwAZPvIs6bXl0zt9wE6uJ9KUeT/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+06+-+Part+03+-+Nesting+and+Summary/1_m9hddu82))

### Lab 3 - OpenMP

*Tuesday 9:00 Diamond CR1*

* [Lab Sheet](https://drive.google.com/file/d/1CQ3LXJd_P1C14C8N5edAAYKu_LxukjLw/view?usp=share_link)
* [Starting Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab03_src.zip)
* [Solution](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab03_sln.zip)
* [Frequently Asked Questions](./labs/3)

--------------------

## Week 4

### Lecture 4

*Monday 10:00 Broad Lane LT2*

* GPU Architecture ([pdf](https://drive.google.com/file/d/1XyDFYjiV29u6aZjo_02fYJ8i8PLhgrcM/view?usp=share_link), [pdf with notes](https://drive.google.com/file/d/1y-A2sW9hXoUcX9gMjvmFKnTw0lDiPXVO/view?usp=share_link))
* Introduction to CUDA ([pdf](https://drive.google.com/file/d/1ArIiA6khSXZeBdSzV0u4vxrybZiDHoMR/view?usp=share_link), [pdf with notes](https://drive.google.com/file/d/1VZyKLnzLLqW5_GOCJAKfBP0rY7itu7ij/view?usp=share_link))

#### Flip Classroom Pre-recorded Lectures

* Introduction to GPUs ([pdf](https://drive.google.com/file/d/1cGZgGCB27m6zBkqR7-P1Lo0Ce8z7LzYx/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+07+-+Part+01+-+Introduction+to+GPUs/1_p7q41uvc))
* Programming GPUs ([pdf](https://drive.google.com/file/d/13G5k7JxXWYkmKdf_f3m34173Z4QQZNNb/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+07+-+Part+02+-+Programming+GPUs/1_76m5dhjm))
* GPU Hardware ([pdf](https://drive.google.com/file/d/1Q5YBM8GZqXp4P3FR1yDSPKSN9LP3yFTk/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+07+-+Part+03+-+GPU+Hardware/1_t7dweiyp))
* The CUDA Programming Model ([pdf](https://drive.google.com/file/d/1p50MnSqyC-U1lls08GhVX-mW8TEuXqLb/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+08+-+Part+01+-+CUDA+Programming+Model/1_kbdt8jns))
* CUDA Device Code ([pdf](https://drive.google.com/file/d/1he_iuEuyo5nONhM9DtkMmVdQ1Zat1s86/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+08+-+Part+02+-+CUDA+Device+Code/1_q8zijjv4))
* CUDA Host Code and Memory Management ([pdf](https://drive.google.com/file/d/1-PPKh4g2-Pe8jITUsLbUO0A0SxwIGXtU/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+08+-+Part+03+-+CUDA+Host+Code+and+Memory+Management/1_g4zl8te4))

### Assignment Handout 

The assignment will be handed out via Blackboard after Monday's lecture.

### Lab 4 - Introduction to CUDA

*Tuesday 9:00 Diamond CR1*

* [Lab Sheet](https://drive.google.com/file/d/1CWh9jFA9psV5yhRwAYf1uMXt0x6H2Akt/view?usp=share_link)
* [Starting Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab04_src.zip)
* [Solution](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab04_sln.zip)
* [Using CUDA with Visual Studio 2022 Guide](https://drive.google.com/file/d/145bvUng0QPsFLmQEPjPj1AYVgZQ45xXy/view?usp=share_link)
* [Frequently Asked Questions](./labs/4)
* [cudamemchk.bat](https://drive.google.com/file/d/1D6U3vaVC41ZuI37p3EdBiHp3Ae4v3KD3/view?usp=share_link) *(You may need to update the path to Compute Sanitizer if using a different version of CUDA)*


--------------------

## Week 5

*No Lecture*

### Blackboard Quiz 1

*Tuesday 9:00 Diamond CR1*

This quiz held during the normal lab timeslot, covers the content from lectures 1-3 and **must** be attended in person as it will be held in exam conditions with invigilation.

The quiz consists of 25 multiple choice questions, and must be completed within 45 minutes.

--------------------

## Week 6

### Lecture 5

*Monday 10:00 Broad Lane LT2*

* CUDA Memory

#### Flip Classroom Pre-recorded Lectures

* Memory Overview ([pdf](https://drive.google.com/file/d/1BxiovKdODm1OsRTsLzW0LyOj1CfBYVQX/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+09+-+Part+01+-+Memory+Overview/1_0pa748z1))
* Global and Constant Memory ([pdf](https://drive.google.com/file/d/1ZvdLGJJ3D_-DrEFsR6Sai-sA5WN-uuWT/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+09+-+Part+02+-+Global+and+Constant+Memory/1_fl15aonq))
* Read Only and Texture Memory ([pdf](https://drive.google.com/file/d/1bSk8km76Y0CXAcBhBypwknl8OGoXb0VT/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+09+-+Part+03+-+Read-Only+and+Texture+Memory/1_kiodtb5l))

<!--
##### Using GPU Backed Cloud Instances (Optional Content)

*Note/Disclaimer: Any use of cloud is entirely at your own risk and cost. The videos provide a short overview of the use of cloud instances but you are responsible for your own accounts and any cost associated with it. You are encouraged to read up on aspects such as billing notifications and the specific charges for on demand pricing and storage.*

* Creating an EC2 instance using the template AMI ([recording](https://digitalmedia.sheffield.ac.uk/media/CloudComputing-Part1/1_dzaso44d))
* Connecting to your cloud instance ([recording](https://digitalmedia.sheffield.ac.uk/media/CloudComputing-Part2/1_buquvcon))
* Setting restriction on inbound traffic to your instance ([recording](https://digitalmedia.sheffield.ac.uk/media/CloudComputing-Part3.mkv/1_7lf1y6v9))
-->

### Lab 5 - CUDA Memory

*Tuesday 9:00 Diamond CR1*

* [Lab Sheet](https://drive.google.com/file/d/1CaMvSfO_GT-WfbqdSnoQry2ypNcBOzQU/view?usp=share_link)
* [Starting Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab05_src.zip)
* [Solution](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab05_sln.zip)

--------------------

## Week 7

### Lecture 6

*Monday 10:00 Broad Lane LT2*

* CUDA Shared Memory
* CUDA Performance

#### Flip Classroom Pre-recorded Lectures

* Introduction to Shared Memory ([pdf](https://drive.google.com/file/d/1EjnE7xi5wo8HEJ3hUA74N9WMUZOudcV5/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+10+-+Part+01+-+Introduction+to+Shared+Memory/1_rd20qeup))
* Shared Memory Bank Conflicts ([pdf](https://drive.google.com/file/d/1-VKri93MTBbUMmlIYd-LiK6iMYphg3w9/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+10+-+Part+02+-+Shared+Memory+Bank+Conflicts/1_69yoldfs))
* Boundary Conditions ([pdf](https://drive.google.com/file/d/1C4h9_Y0lh2M2k09avtqtqo_1Rw677JUV/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+10+-+Part+03+-+Boundary+Conditions/1_5g9cwokq))
* Shared Memory Bank Conflict Calculator ([xlxs file](https://drive.google.com/file/d/1pHTvo-X02_xp8OHCobJ-zFaZ0Vq2mtKK/view?usp=sharing))
* Memory Coalescing ([pdf](https://drive.google.com/file/d/1vDqsfjl_hRbyG1jBkllSIwNLlbycyjlz/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+11+-+Part+01+-+Memory+Coalescing/1_o0kfb3ux))
* The L1 Cache ([pdf](https://drive.google.com/file/d/13lSuEalXcMGrX8orbW6HUbXZFj3OqbuH/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+11+-+Part+02+-+The+L1+Cache/1_94wtt4kb))
* Occupancy ([pdf](https://drive.google.com/file/d/1ClFMjcO2IDjsCZ7irgSKjaUeKW4yAEev/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+11+-+Part+03+-+Occupancy/1_dweyffyn))


### Lab 6 - Shared Memory

*Tuesday 9:00 Diamond CR1*

* [Lab Sheet](https://drive.google.com/file/d/1CrHWsJsCUuCt1lkyTaq635Qucp7XDNTT/view?usp=share_link)
* [Starting Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab06_src.zip)
* [Solution](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab06_sln.zip)
* [Solution Further Explanation](https://drive.google.com/file/d/1Covnx8QjwJ7MgI-NUfDe41IW5d83nm84/view?usp=share_link)

--------------------

## Week 8

### Lecture 7

*Monday 10:00 Broad Lane LT2*

* CUDA Warp Level CUDA
* CUDA Parallel Patterns

#### Flip Classroom Pre-recorded Lectures

* Scheduling and Divergence ([pdf](https://drive.google.com/file/d/1QeI551TNSpKVRZN7tq6N6-VjTp4ch0Wp/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+12+-+Part+01+-+Scheduling+and+Divergence/1_z4pi18mz))
* Advanced Divergence ([pdf](https://drive.google.com/file/d/1LAUmDC1WkaauNJahWbdAkVi37xo7sVzd/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+12+-+Part+02+-+Advanced+Divergence/1_ddlggmc7))
* Atomic and Warp Operations ([pdf](https://drive.google.com/file/d/17goRBO5osS5mbZHRd48A6TU8BZyT-wse/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+12+-+Part+03+-+Atomics+and+Warp+Operations/1_ais622f9))
* Parallel Patterns Overview ([pdf](https://drive.google.com/file/d/1gJfnZjQzlB1GzV4BgnaQNXU4aAWyfFIX/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+13+-+Part+01+-+Parallel+Patterns+Overview/1_a0nt7yyq))
* Reduction ([pdf](https://drive.google.com/file/d/1mbFSXVTUKmvNZTPmBlLMRIfNjQbpuFDr/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+13+-+Part+02+-+Reduction/1_c12ixy0e))
* Scan ([pdf](https://drive.google.c5-8om/file/d/1IUDNWjkWDOHtIgg5emo-UgnbyU1xboED/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+13+-+Part+03+-+Scan/1_pfrawiuc))

## Week 8

### Lab 7 - Atomics & Primitives

*Tuesday 9:00 Diamond CR1*

* [Lab Sheet](https://drive.google.com/file/d/1CrQ-Zp9N10s3L3sVN61aPBEvs9xa1sx7/view?usp=share_link)
* [Starting Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab07_src.zip)
* [Solution](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab07_sln.zip)

--------------------

## EASTER VACATION

--------------------

## Week 9

### Lecture 8

*Monday 10:00 Broad Lane LT2*

* CUDA Performance Optimisation & Profiling

#### Flip Classroom Pre-recorded Lectures

* Performance Profiling - Guest Lecture by Dr Robert Chisholm ([pdf](https://drive.google.com/file/d/1fwo_kuB2hVBPTcJg7FViPt67MrKHS6H0/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+14+%26+15+Profiling/1_dn7xvs3k))

### Lab 8 - CUDA Profiling

*Tuesday 9:00 Diamond CR1*

* [Profile Lecture Example Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab08_sln.zip)
There is no lab sheet for this lab. Examine the source code and try changing the `STEP` macro to compile different iterations of the code to run through the profiler.

--------------------

## Week 10

### Blackboard Quiz 2

*Tuesday 9:00 Diamond CR1*

This quiz held during the normal lab timeslot, covers the content from lectures 4-8 and **must** be attended in person as it will be held in exam conditions with invigilation.

The quiz consists of 25 multiple choice questions, and must be completed within 45 minutes.

### Lecture 9 (Different Time/Location)

*Friday 9:00 Pam Liversidge LT1*

* Sorting, Libraries & CUDA Streams

#### Flip Classroom Pre-recorded Lectures

* Sorting (Networks) ([pdf](https://drive.google.com/file/d/1P-ove2cxmDTb4J6eqCNE6T5zSKnEwpaG/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+16+-+Part+01+-+Sorting/1_xre37phi))
* Libraries and Thrust ([pdf](https://drive.google.com/file/d/1HI19ikicGWw3_2zNlK-pZixWcH6qNryM/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+16+-+Part+02+-+Libraries/1_twyysk9a))
* Applications of GPU Sort ([pdf](https://drive.google.com/file/d/1xkv4Zw6g86W6lzF3bs2ZEQLGci7FvLKd/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+16+-+Part+03+-+Applications+of+Sort/1_ur7qxhff))
* Synchronous and Asynchronous Execution ([pdf](https://drive.google.com/file/d/1grdnZs88EvybgW1vydR7FaVgpglbZiCO/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+17+-+Part+01+-+Synchronous+and+Asynchronous+Execution/1_d6b13ebk))
* CUDA Streams ([pdf](https://drive.google.com/file/d/113W7x70o-KcuRZ2gK6drp7QM2XvUWff8/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+17+-+Part+02+-+CUDA+Streams/1_4jsxnwiz))
* Synchronisation ([pdf](https://drive.google.com/file/d/1Ejnt2KKrydP8AJRy36ZSwIKauruKiLkj/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+17+-+Part+03+-+Synchronisation/1_zftp0xht))
* Multi GPU Programming ([pdf](https://drive.google.com/file/d/1Ejnt2KKrydP8AJRy36ZSwIKauruKiLkj/view?usp=sharing), [recording](https://digitalmedia.sheffield.ac.uk/media/Lecture+17+-+Part+04+-+Multi+GPU+Programming/1_k75fi901))

--------------------

## Week 11

*No Lecture (Bank Holiday)*

### TellUS - Module Feedback

Please complete the module feedback survey for all modules you have taken this semester.

Your feedback is crucial to guiding the development of modules, by highlighting what you felt worked within the module and how you think that your experience and understanding could be improved.
It also enables you to highlight the achievements or failures of teaching staff.

If you have more urgent feedback, you can get in contact with your student staff liaison committee representative, or me directly (at a lab class or via email r.chisholm(at)sheffield.ac.uk).

Tell US can be accessed [here](https://tellus.shef.ac.uk/tellus/), or via the left-hand menu within Blackboard.

### Lab 9 - Libraries & Streams

*Tuesday 9:00 Diamond CR1*

* [Lab Sheet](https://drive.google.com/file/d/1CtDI6p4P1IzGeiniVWf_B3vZYfQsAG6n/view?usp=share_link)
* [Starting Code](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab09_src.zip)
* [Solution](https://github.com/RSE-Sheffield/COMCUDA_labs/archive/Lab09_sln.zip)


### Previous On Demand Invited Lectures (Optional)

Please Find below a list of previous invited lectures which may be of interest.

* [Accelerating Road Network Simulations using GPUs](https://echo360.org.uk/media/de75ffe6-c839-49de-af50-ddb270dd529f/public)
* [Optimising Pedestrian Simulations](https://echo360.org.uk/media/6f8ed7dd-f3d8-4c25-acf2-03c36e40ea9e/public)

--------------------

## Week 12:

### Lab 10 - Assignment Help 1 

*Monday 10:00 Diamond CR2*

This additional lab is in the lecture slot for week 12, please note it is held in a different computer room within the Diamond to normal labs.

### Lab 11 - Assignment Help 2

*Tuesday 9:00 Diamond CR1*


# Recommended Reading

The following are useful resources but not required reading.

* Edward Kandrot, Jason Sanders, "CUDA by Example: An Introduction to General-Purpose GPU Programming", Addison Wesley 2010.
* Brian Kernighan, Dennis Ritchie, “The C Programming Language (2nd Edition)”, Prentice Hall 1988.
* NVIDIA, [CUDA C Programming Guide](http://docs.nvidia.com/cuda/cuda-c-programming-guide/)

## Tertiary Blogs etc.
 
C is a programming language with many quirks, if you find them interesting you might enjoy these web pages.

* [The Lost Art of Structure Packing](http://www.catb.org/esr/structure-packing/)
* [Falsehoods Programmers Believe About Undefined Behaviour](https://predr.ag/blog/falsehoods-programmers-believe-about-undefined-behavior/)
* [Reflections on Trusting Trust](https://www.cs.cmu.edu/~rdriley/487/papers/Thompson_1984_ReflectionsonTrustingTrust.pdf)
* [Godbolt Compiler Explorer](https://godbolt.org/)
