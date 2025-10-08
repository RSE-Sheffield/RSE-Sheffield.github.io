---
layout: post
title: "RSE Supported Projects"
author: Neil Shephard
slug: 2025-09-30-funded-proposals
date: 2025-09-30 12:00:00 UTC
tags: rse "call for proposals" support
category:
link:
description:
social_image:
type: text
excerpt_separator: <!--more-->
---

Following the success of the [2024 call for proposals](2024-09-24-funded-proposals) the RSE team in Sheffield put a call
out a second call for proposals earlier this year. The call was open to all researchers across the university and
successful applicants would receive dedicated support from an RSE Team member for upto 50% FTE for a period of six
months.

Here we review the work undertaken on the projects we supported last year and introduce the successful applications in
the 2025 round.

<!--more-->

## 2025 Call for Proposals

This year saw an increase in the number of applications with 35 received by the deadline, an increase from the 26
applications received in 2024. A review panel of ten RSEs from the RSE team and adjacent Data Analytics Service was
convened to assess the applications and decide which should receive support. The panel enjoyed reviewing the diverse
applications and had a challenging decisions to make as to which projects to support as the quality of applications was
again high.

![Distribution of applications by faculty](/assets/images/2025-09-30-funded-proposals-faculty.png "Bar chart showing the distribution
of applications by faculty. Engineering had 14 applications, Science 10, Social Sciences 4, Health 6 and 1 applicaiton
from AMRC")

All work undertaken will be done with a view to adhering to the [FAIR for Research Software Principles][fair4rs]

### Optimising & Efficiency Improvement of a National Building Material Stock

[Professor Danielle Densley Tingley][danielle]'s research "_explores sustainable building design solutions, focusing on
material impacts, so we can create a built environment that operates within the carrying capacity of the planet._". To
achieve this they are developing models of existing building stock using a hierarchical building material intensity
(HMI) framework to assess what buildings are made of in the UK. The software is implemented in Python and has been
applied to building stock in suburbs of London but the group is looking to extend its application to the rest of the
UK. The proposed work will profile the existing code base with a view to optimising its performance, review the existing
database structures with a view to improving efficiencies and implement parallelisation so that analyses can scale and
leverage High Performance Computing (HPC) facilities that are available to researchers.

### Yorkshire and Humber Office for Data Analytics (YOHDA)

[Professor Vania Sena][vania] from the University's Management School submitted this proposal to improve the code base
that underpins [YOHDA][yohda] a data resources that "_supports data-drive decision making through open-access data and
analytics_" that pulls open data from resources such as the Office for National Statistics (ONS), Department for Work
and Pensions (DWP) and many others. Currently the aggregation of data is a manual process that is limiting the
scalability of the project. RSE support will develop a structured SQL database server that uses Advanced Programming
Interfaces (APIs) to automate the data ingress and optimise the existing transformation and cleaning routines to improve
performance and stability, streamlining the workflow and reducing the overhead of maintaining this valuable resource.
At the same time documentation will be developed that facilitates on-boarding and aids in up-skilling of team members.

### Software for Modelling Neutrino Emission from Spent Nuclear Fuel

Spent Nuclear Fuel is stored in above-ground dry casks at interim storage facilities, where it is monitored for
decades for safety and nonproliferation. Effective monitoring technologies are of great importance, as interim
facilities store hundreds of tonnes of highly radioactive spent fuel, and increasing reliance on civil nuclear power has
led to more interest in developing improved methods of monitoring SNF. [Dr Elisabeth Kneale][elisabeth] has developed
Python software package predict antineutrino emission spectrum from Spent Nuclear Fuel but has sought the assistance of
the RSE team to improve the open-source nature of the software, packaging, develop a Graphical User Interface (GUI)
whilst improving compliance with the [FAIR4RS][fair4rs] standards.

## Conclusion

The call for proposals in 2025 has again shown there is a diverse need for RSE support across all departments of the
University of Sheffield and that increasingly researchers are recognising the benefits that dedicated RSE support can
bring to the software components of academic research. The RSE team are pleased to be able to support researchers the
successful applicants to this years call.

If you are considering putting in a funding application that involves writing/developing/maintaining software
having dedicated RSE support can strengthen your proposal. If you would like to speak to the RSE team about support
please don't hesitate to get in touch by emailing [rse@sheffield.ac.uk](mailto:rse@sheffield.ac.uk).

[danielle]: https://sheffield.ac.uk/mac/people/civil-academic-staff/danielle-densley-tingley
[elisabeth]: https://sheffield.ac.uk/mps/people/research-staff/liz-kneale
[fair4rs]: https://rse.shef.ac.uk/training/fair4rs/
[vania]: https://sheffield.ac.uk/management/people/academic-staff/esib/vania-sena
[yohda]: https://yhoda.sites.sheffield.ac.uk
