---
title: FAIR<sup>2</sup> for research software 
layout: page
type: text
permalink: /training/fair4rs/
---

## Introduction and target audience

This training curriculum offers a modular programme to support researchers in applying FAIR (Findable, Accessible, Interoperable,
Reusable) principles and open research practices to their research software. The overview module provides an
introduction to [FAIR for research software](#what-are-the-fair-principles-for-research-software) and gives an overview
of the topics that are offered in more detail in [additional modules](#outline-of-the-programme), which can be selected
according to an individual’s learning goals.

This programme is aimed at researchers, including PhDs and postgraduate research students, who create code (whether a few
scripts or something more substantial) as part of their research and who want to make their research more open by
applying the FAIR principles to their software or simply want to become more confident in the research code they are writing.

### What are the FAIR principles for research software?

The FAIR principles were developed as guidelines to enhance the reusability of research data[^1]. The FAIR principles
apply the concepts of Findability, Accessibility, Interoperability and Reusability to scholarly data holdings, and were
also intended to be applied to other digital research objects such as algorithms and workflows.

Over the past few years there has been growing recognition that research software, defined as _“source code files,
algorithms, scripts, computational workflows and executables that were created during the research process or for a
research purpose”_[^2], should adhere to FAIR guidelines as well as meeting broader open research goals such as
reproducibility and open access. A modified set of FAIR principles for research software (FAIR4RS), allowing for the
inherent differences between data and software, has been developed to provide a framework for the development of FAIR
research software[^3].

## Outline of the programme

<div class="alert alert-info"> <strong>Info!</strong> The definitive programme (with dates and registration links) will be
online on Oct 1st.</div>


* [Better software for better research: Introduction to the FAIR training
  programme](#better-software-for-better-research-introduction-to-the-fair-training-programme), Tuesday 22nd October 2024
* [Software lifecycle planning](#software-lifecycle-planning), Friday 8th November 2024
* [Version control](#version-control), Monday 18th & Tuesday 19th November 2024
* [Software design](#software-design), Monday 9th & Tuesday 10th December 2024
* [Testing and Continuous Integration](#testing-and-continuous-integration), 2nd Semester, date to be decided
* [Documentation](#documentation), 2nd Semester, date to be decided
* [Reproducible computational environments](#reproducible-computational-environments), 2nd Semester, date to be decided
* [Packaging](#packaging), 2nd Semester, date to be decided
* [Publishing a software paper in JOSS](#publishing-a-software-paper-in-joss), 2nd Semester, date to be decided

#### Better software for better research: Introduction to the FAIR training programme

**Tuesday 22nd October 2024, LunchBytes talk, 12pm, online, [registration link](https://mydevelopment.csod.com/ui/lms-learning-details/app/event/60f213bd-340d-4035-8754-a15c9567d620)**

In this introductory session we will try to understand what the FAIR principles are and why they have emerged. We will
then introduce some actions on how to apply them to software and present a global review of the training programme.

#### Software lifecycle planning

<!-- ##### Romain Thomas, Ric Campbell, Kate O'Neill -->

**Friday 8th November 2024, Afternoon, 2pm, online, [registration link](https://mydevelopment.csod.com/ui/lms-learning-details/app/event/2d69f5c5-f9e7-46c2-999a-ffb3ed1db028)**

When you start writing software it is often very useful to think about the development process and how you will make your
software sustainable in the long term. In this module we will introduce important aspects of software development in
research: software lifecyle, management plan, licences and dissemination. This module should allow you to ask yourself
the right questions when starting a research software project.

#### Version control

<!-- ##### Neil Shephard -->

The version control module has two distinct training sessions: one for beginners and one for more advanced users.

**Git, GitHub and GitKraken - From Zero to Hero**: If you’ve never heard of or used version control and Git before this
is the course for you. We start by introducing version control and exploring how it can be beneficial to researchers,
then we introduce some useful tools and get started with some basic workflow using these tools. We build on those
foundations with collaborative exercises that introduce key concepts such as forks, pull requests and branches and give
you the chance to get some hands-on experience with using version control in a research setting.

**Monday 18th & Tuesday 19th November 2024 (morning only), In person, [registration link](https://mydevelopment.csod.com/ui/lms-learning-details/app/event/d4d09f67-097b-4451-8ddb-86cb90636c06)** (Another session will be given during second
semester)



**Git collaboration**: This course aims to help you develop a deeper understanding of how Git works to facilitate
collaboration. It builds on the foundations laid by the Git beginners course. The core idea around the course is that by
improving your understanding of working with branches and how to make your commits tidier and neater it makes it easier
to understand pull requests and Git history which in turn makes it easier to collaborate and work on code with others
(including your future self!). **Date to be decided, it will be during second semester** 

#### Software design
<!-- (Romain Thomas) -->

**Monday 9th & Tuesday 10th December 2024 (morning only), In person, [registration link](https://mydevelopment.csod.com/ui/lms-learning-details/app/event/d3c2cca5-d894-44b6-a79b-e93dea7a7c94)** 

The way you write your code will have a massive impact on how easy it is to maintain. During this course we will learn
how to create maintainable, readable and reusable code. Using examples and exercises, we will see that
creating high quality code is actually quite straightforward when you understand how to do it and what tools are available
to make your life easier.

#### Testing and Continuous Integration

<!-- (Sylvia Whittle) -->

This course aims to equip researchers with the skills to write effective tests and ensure the quality and reliability of
their research software. No prior testing experience is required! We'll guide you through the fundamentals of software
testing using Python's Pytest framework, a powerful and beginner-friendly tool. You'll also learn how to integrate
automated testing into your development workflow using continuous integration (CI). CI streamlines your process by
automatically running tests with every code change, catching bugs early and saving you time. **Date to be decided, it 
will be during second semester** 


#### Documentation

<!--(Joe Heffer)-->

Well-documented software promotes reproducibility, maintainability, and increased research impact through wider adoption
and citation. This course teaches researchers how to document their software effectively, making it accessible and
understandable to others. It covers topics such as writing readable code and usage instructions. **Date to be decided,
 it will be during second semester** 

#### Reproducible computational environments
<!-- (Daniel Brady) -->

Ensuring that others are able to take your code, run it, and are able to produce the same (or equivalent) results is one
of the key tenets of FAIR and reproducible research software. This course will provide you with an overview of different
ways to make your code reproducible and then focus on virtual environments as a specific tool for computational
reproducibility. **Date to be decided, it will be during second semester** 

#### Packaging 
<!--(Farhad Allian & Christopher Wild)-->

Packaging your software is one of the important steps in a software project to make it both findable and
accessible. This course will provide you with an understanding of why and when packaging is useful, what different
standards exist to package Python projects and take you through each step of the packaging process. **Date to be decided, 
it will be during second semester** 

#### Publishing a software paper in JOSS

<!-- (Romain Thomas & Arfon Smith) -->

Did you know that you can actually publish a paper about your software? This is an ideal way to get recognition (and
citation) for the software you have spent countless hours creating. In this course we will walk you through an example
of submission in the [Journal of open Source software](https://joss.theoj.org/). We will make an example software submission to
the journal, and thanks to the collaboration of the Editor in Chief of JOSS (Arfon Smith), we will look at how the
review process is done. **Date to be decided, it will be during second semester** 

<!-- Summary session (Romain Thomas) -->

## Prerequisites

Each session will have some individual prerequisites. Some experience with developing research software or scripts, for
example in Python or R, might be needed. Please refer to the individual course details to know what they are.

## Learning outcomes

After completing this modular programme, participants should be able to:

- Understand the FAIR principles and describe how they apply to research software
- Explain how applying FAIR principles to research software can support open research goals such as transparency,
  reproducibility and reusability
- Identify actions that can be taken at different stages of the research lifecycle to enhance the FAIRness of their
  research software outputs
- Develop a plan addressing the intended scope, impact and lifespan of their research software
- Describe different types of software licence and discuss their potential implications for reuse of research software,
  including commercialisation
- Apply best practices for scientific software development including design, version control, testing, continuous
  integration and documentation
- Associate their research software with a unique and persistent identifier and use metadata to enhance its findability,
  accessibility and reusability
- Identify repositories that provide long-term persistent storage for research software
- Apply approaches such as packaging and containers to enhance the reusability and reproducibility of research software.

<!-- {% include events_list_upcoming.html category="fair4rs" %} -->

## Contact information
For enquiries, please contact Tamora James ([t.d.james@sheffield.ac.uk](mailto:t.d.james@sheffield.ac.uk), Programme
manager), and/or Romain Thomas, ([romain.thomas@sheffield.ac.uk](mailto:romain.thomas@sheffield.ac.uk), Head of the RSE
group).

<hr>

[^1]: Wilkinson _et al_., ‘The FAIR Guiding Principles for Scientific Data Management and Stewardship’. [doi:10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18)
[^2]: Barker _et al_., ‘Introducing the FAIR Principles for Research Software’. [doi:10.1038/s41597-022-01710-x](https://doi.org/10.1038/s41597-022-01710-x)
[^3]: Chue Hong _et al_., ‘FAIR Principles for Research Software (FAIR4RS Principles)’. [doi:10.15497/RDA00068](https://doi.org/10.15497/RDA00068)