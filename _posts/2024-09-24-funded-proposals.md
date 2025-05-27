---
layout: post
title: "RSE Supported Projects"
author: Neil Shephard
slug: 2024-09-24-funded-proposals
date: 2024-09-24 12:00:00 UTC
tags: rse "call for proposals" support
category:
link:
description:
social_image:
type: text
excerpt_separator: <!--more-->
---

Earlier this year the RSE team in Sheffield put a call out for proposals for researchers in the University of Sheffield to
[collaborate with the RSE][originalproposal] team. The successful applicants would receive dedicated support from an RSE
Team member at 50% FTE for a period of six months.

<!--more-->

A total of 26 applications were received from across the faculties of the University and the review panel which
consisted of nine RSEs had robust discussions about which to fund as the quality and proposed work was of a high
standard.

![Distribution of applications by faculty](/assets/images/2024-09-24-funded-proposals-faculty.png)

In the end the RSE team was able to fund support for three proposals and team members [Dr Robert Chisholm][rob] and [Neil
Shephard][neil] are about to start work on two of the projects with the third postponed, with agreement, until a new RSE
who has been recruited starts later in the year.

All work undertaken will be done with a view to adhering to the [FAIR for Research Software Principles][fair4rs]

## SLAMSeq

The [SubLab][sudlab], which is lead by [Dr Ian Subery][ian], have developed software to analyse the output of SLAMSeq
experiments which performs sequence alignment of variably spliced RNA sequences to assess degradation rates. Despite
wide adoption of the technique the current software is limited to only being run on a per-gene basis rather than per
isoform basis and statistical comparison of differences in decay rates are limited. The [Sudlab][sudlab] have addressed
this deficiency by developing an analysis pipeline with pre-processing performed in Python and statistical analysis
undertaken in R.

RSE support will be used to refactor the code into formal packages with a modular code structure and formal tests which
facilitate long-term maintenance and make extension easier and will make it straight-forward for users to
install. Translation of code into a single language will be considered as this would lower the barrier to uptake by
external users and documentation will be developed and deployed covering the API and the practical side of using the
software.

## HYBIRD

[HYBIRD][hybrid] is software developed by [Dr Alessandro Leonardi][alessandro] and his research group with the
Geo-Technical Engineering group and is written using C++. It combines the Discrete Element Method (DEM) and the Lattice
Boltzmann Method (LBM) to simulate complex particle-fluid interactions. These fluid-structure interactions have
allowed the investigation of the formation of granular fronts in free-surface flows, enhancing understanding of
particle-laden flow dynamics which have been successfully applied to key areas in environmental and geo-technical
engineering.

Work will be undertaken by [Dr Robert Chisholm][rob], a performance optimisation and GPU parallelisation specialist from
our team, to modernise HYBIRD's build system, address the limiting factors of its performance and enable it to take
advantage of GPU parallelisation. The broad objectives of this project are to reduce barriers to entry for new users and
to increase the performance to enable faster and larger research experiments.

## Polychron

[Polychron][polychron] is prototype software developed by [Dr Bryony Moody][bryony] of the School of Mathematical and
Physical Sciences that facilitates the analysis and archiving of archaeological dating evidence. Written in Python the
prototype consists of a statistical algorithm (backend) and a GUI frontend to facilitate usage.

Work will be undertaken by a new RSE who will be starting later in the year. The exact remit of the work to be
undertaken has not yet been finalised but the code base will benefit from restructuring into a Python package with
refactoring of the GUI to make it easier to maintain and extend and improved error detection.

## Summary

As the number of applications demonstrated, the demand for RSE support across all faculties within the University is
high and it was interesting to find out about the broad range of software projects being undertaken by different
research groups. We wish we could have supported more of these teams.

If you are considering putting in a funding application that involves writing/developing/maintaining software
having dedicated RSE support can strengthen your proposal. If you would like to speak to the RSE team about support
please don't hesitate to get in touch by emailing [rse@sheffield.ac.uk](mailto:rse@sheffield.ac.uk).

[alessandro]: https://www.sheffield.ac.uk/mac/people/civil-academic-staff/alessandro-leonardi
[bryony]: https://www.sheffield.ac.uk/mps/people/all-academic-staff/bryony-moody
[fair4rs]: https://rse.shef.ac.uk/training/fair4rs/
[hybrid]: https://github.com/gnomeCreative/HYBIRD
[ian]: https://www.sheffield.ac.uk/biosciences/academic-staff/people/ian-sudbery
[neil]: https://rse.shef.ac.uk/contact/neil-shephard/
[originalproposal]: https://rse.shef.ac.uk/collaboration/RSEtime_call2024/
[polychron]: https://github.com/bryonymoody/PolyChron
[rob]: https://rse.shef.ac.uk/contact/robert-chisholm/
[sudlab]: https://www.sudlab.co.uk/team-1/ian-sudbery
