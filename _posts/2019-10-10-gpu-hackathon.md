---
layout: post
title: First GPU Hackathon at Sheffield brings together researchers across Ireland and the UK
author: Mozhgan Kabiri Chimeh
slug: 2019-10-10-gpu-hackathon
date: 2019-10-10 14:00:00 UTC
tags:
category:
link:
description:
type: text
image:
  path: /assets/images/gpuhack19/gpuhackthon.jpg
---

_\*This blog post first appeared on the [OpenACC blog](https://www.openacc.org/blog)._

The University of Sheffield partnered with NVIDIA and Oak Ridge Leadership Computing Facility (OLCF) to hold its first [GPU hackathon](http://gpuhack.shef.ac.uk/), where seven applications teams worked alongside mentors with GPU-programming expertise to accelerate their scientific codes using GPUs.

{% include image_caption.html url="/assets/images/gpuhack19/gpuhackthon.jpg" description="University of Sheffield GPU Hackathon attendees."%}

This hackathon helped teams of application developers some with little or no previous GPU programming experience to get their own codes running on GPUs, or to optimise their codes that currently run on GPUs, using [OpenACC](https://www.openacc.org/) or other parallel programming models.

Developers had access to compute systems from a UK Tier-2 HPC facility ([JADE](https://www.jade.ac.uk/)) and the US [Oak Ridge](https://www.olcf.ornl.gov/olcf-resources/compute-systems/summit/) Leadership Computing Facility. To help prepare, attendees completed NVIDIA’s full-day training materials on OpenACC and CUDA and worked with their mentors to map out their workflows for the hackathon two weeks in advance.

A number of good quality applications were received for the event, underscoring the increasing interest and expectation that GPUs will be a key technology for future supercomputers. Participating teams were comprised of domain scientists from across Ireland and the United Kingdom--including( University of Cambridge, University of York, University of Manchester, University of Bristol, Swansea University, Technological University Dublin, Met Office, NCAS, STFC, ICHEC) keen to fully exploit the performance of GPUs to advance their science.

With the variety of applications spanning CFD, fluid mechanics, quantum mechanics, weather modelling, and atmospheric science, teams had one common goal: **harnessing the power of GPUs to accelerate their scientific applications**.

## Teams and Applications

Different computational fluid dynamics application were explored, including CUDA Lattice Boltzmann Immersed Boundary Blood Solver (CULBIBBS), a coupled plasma red blood cells solver developed by experts at the Technological University Dublin and Irish Centre for High-End Computing (ICHEC), and LUMIS/VUMA, two applications developed by researchers at the University of Manchester that model real-time, interactive fluid flow and accelerated solid mechanics respectively.

Team Hacking Nemo from Science and Technology Facilities Council (STFC) worked on the weather modelling application called [Nelolite2D](https://github.com/team-hacking-nemo/nemolite2d-cuda) which is a stand-alone representative kernel from Nucleus for European Modelling of the Ocean (NEMO), a state-of-the-art modelling framework for research activities and forecasting services in ocean and climate sciences, developed in a sustainable way by a European consortium.

TurboDNS from Cambridge University worked on 3DNS application, a compressible structured finite difference Navier-Stokes solver used for Direct Numerical Simulation (DNS) of turbomachinery flows with fourth order accuracy in space and time, while Research Software Engineers from Swansea University worked on [XCFD](https://github.com/mmesiti/XCFD) application that performs explicit dynamic simulations of incompressible Navier-Stokes.

[CASTEP](http://www.castep.org/), one of the top three applications on the [UK’s national supercomputer service (ARCHER)](https://www.archer.ac.uk/), was another application that teams collaborated on. It is a full-featured materials modelling code based on a first-principles quantum mechanical description of electrons and nuclei. It uses the robust methods of a plane-wave basis set and pseudopotentials to implement density functional theory. It can simulate a wide range of properties of materials properties including energetics, structure at the atomic level, vibrational properties, and electronic response properties among others.
Team Raining Champion worked on the Unified Model (UM) application, a computational fluid dynamics (CFD) code solving the Navier-Stokes equations on a rotating sphere, developed by the Met Office, the UK’s national weather forecaster and climate service provider, which forms a part of the UK’s national critical infrastructure.

## During the Hackathon

During the five-day GPU hackathon, teams gave short daily presentations to showcase their progress and share their goals for the day. Daily SCRUM sessions were useful in that teams shared the problems they were facing and solutions to any found bugs that could prove useful to the other teams.

Over the course of the week, teams find themselves in various emotional stages. Early in the week, teams typically run into various problems such as compile-time or run-time errors or inconsistent/invalid results.

{% include image_caption.html url="/assets/images/gpuhack19/hackatonevo.png" description="Hackathon Evolution: https://ieeexplore.ieee.org/document/8408902"%}

To help getting teams out of the “pit of despair” and elevate their mood, teams spent an evening with colleagues and new acquaintances in an informal atmosphere at The York while enjoying a delicious 3-course dinner with wine. Sponsored by the University of Sheffield’s central IT dept, [IT Services](https://www.sheffield.ac.uk/it-services), the **social dinner** was a special treat for all the Sheffield GPU Hackathon attendees.

Towards the middle of the week, teams are hopeful and know that there is a solution to the problem and are running their applications on the GPU. Towards the end of the week, teams share different lesson learned and they either leave happy with their progress or leave with the next set of possibilities to explore.

On the last day of event, every team shared their achievements and overall progress over the duration of hackathon and finished it off with lessons learned and their future plans.

## Outcomes

Teams started out by profiling their applications to find performance bottlenecks. Some teams were able to run selected kernels and start code refactorization, while others managed to get their full applications running with some parts accelerated on multiple GPUs.
For example, Team CULBIBBS was able to achieve 200x speedup by restructuring their code while Team of Research Software Engineers from Swansea University observed 40x speedup of their XCFD application on NVIDIA Tesla V100.

Some of the initial feedback on the benefits of attending the GPU Hackathon to projects include:

> "Demonstrated the potential gains of porting to GPUs. This provided enough evidence to pursue this further"

> "We now have the foundation skills of OpenACC to apply to the full code"

> "It helped us get support from experienced mentors in moving forward in porting the project to GPU. It was great to get an outside perspective from the people already deeply involved in the project as they had different insights into the problem at hand"

> "It helped us achieve a 20 times speed up when compared to the serial code"

## Last but not least ..

With a total of 45 people in attendance, the event was very well run and received and all this progress would not have been possible without the mentors that supported the different teams. Many thanks go to them as well as to their home organizations: NVIDIA, CSCS Swiss National Supercomputing Centre, Helmholtz-Zentrum Dresden-Rossendorf (HZDR), Science and Technology Facilities Council (STFC), Irish Centre for High-End Computing (ICHEC), Oak Ridge Leadership Computing Facility (OLCF), University of Oxford, Edinburgh Parallel Computing Centre (EPCC), and the University of Sheffield.

For further information and to apply, visit [https://www.olcf.ornl.gov/for-users/training/gpu-hackathons/](https://www.olcf.ornl.gov/for-users/training/gpu-hackathons/).
