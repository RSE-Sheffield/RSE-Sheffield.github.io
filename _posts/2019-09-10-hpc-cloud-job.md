---
layout: post
title: Vacancy for HPC/cloud specialist 
author: Will Furnass
slug: 2019-09-10-hpc-cloud-job
date: 2019-09-10 10:00:00 UTC
tags:
category:
link:
description:
type: text
---

We recently hired two more Research Software Engineers (RSEs)
(including [Bob Turner](/contact/bob-turner/), who started last week)
but are looking to hire another RSE.

* **Do you have experience of developing software in a lower-level language (e.g. C++)
and a sound understanding of parallelisation technologies, HPC and/or cloud?**
* **Do you want to work on a variety of research software/infrastructure development projects?**
* **Would you also be keen for the opportunity to teach others about research computing / software development best practices?**

If so, this new vacancy may be of interest.


## Projects

Initially, you will work on at least two projects:

 1. Developing, testing, profiling and optimising
    high-performance parallelised software (MPI, OpenMP or CUDA)
    relating to computational methods for biomedical applications.
    Working with project partners there is the opportunity to deploy codes on international HPC infrastructure. 

    This will also involve investigating how such software can be deployed on cloud computing infrastructure (e.g. AWS, Azure, GCP etc)
    to support research on the [CompBioMed2][cbm2] EU project.  

    An example of the kind of application that needs further development, testing and deployment is [pFIRE][pfire], 
    which is a library for [image registration][im-reg]. 
    This was developed in modern C++ and uses [PETSc][petsc] to distribute matrix/vector data and operations between MPI ranks.
    It was developed by a former member of the RSE team!

    [![pFire: mapped annotations](/assets/images/pfire_mapped_annotations.png)](https://insigneo.github.io/pFIRE/getting_started/tutorial.html#multimodal-image-alignment)

 2. Providing research computing support
    (software development and training/advice relating to software development, the use of HPC and data workflows)
    to the [INSIGNEO institute for in-silico medicine][insig].  
 
    Quite a number of INSIGNEO's researchers have non-trivial research computing needs due to them
    working with high-resolution medical images (e.g. MRI, CT) and sensor datasets,
    needing to apply expensive transformations to that data and
    needing to create and solve high-resolution finite element/finite difference

## Teaching and other opportunities
    
There is also time allocated for working on and (possibly developing)
other projects and training relating to high-performance computing and software engineering.
For example, you could develop and deliver workshops on
how to parallelise a workflow using [OpenMP][openmp] or [joblib][joblib].
    
The post provides an excellent opportunity for research software skills development.
You will actively support the wider community of research software developers
and will be encouraged to represent the team in national/international activities.
For example, current team members are/have been:

* [Software Sustainability Institute (SSI) Fellows](https://www.software.ac.uk/about/fellows)
* [rOpenSci editors](https://ropensci.org/blog/2018/06/22/new_editors/)
* [UK RSE conference](https://rse.ac.uk/) committee members
* [NVIDIA Deep Learning Institute-accredited trainers](/training/deeplearning/)
* [Women In HPC](https://womeninhpc.org/) workshop/community organisers
* [Carpentries trainers](/training/carpentry/)
* [ARCHER/HPC Champions](https://www.archer.ac.uk/community/champions/)

## Applying

Educated to PhD level (or be close to completion) in a computationally based field **or
having equivalent industry experience**,
you will have a track record of software development.
For example, you might have:

* developed/extended one or more applications/libraries at work or during your PhD
* have managed those projects using version control,
* have developed mechanisms for testing them
* and have written documentation for them.

Applications are welcome from both software development generalists
and from RSEs with interdisciplinary technology-focused skills
which either complement or extend our existing portfolio 
e.g. data analytics (including statistical computing, machine learning and deep learning),
numerical computing,
HPC (including multi-core and GPUs), etc.

The post is open-ended (subject to funding).

**[Apply here][job-ad]!**

The closing date is the 4th October.
Please do get in touch via `rse@sheffield.ac.uk`
if you want to discuss any aspect of the role before applying!


[openmp]: https://www.openmp.org/
[joblib]: https://joblib.readthedocs.io/en/latest/
[petsc]: https://www.mcs.anl.gov/petsc/
[cbm2]: https://cordis.europa.eu/project/rcn/223279/factsheet/en
[im-reg]: https://en.wikipedia.org/wiki/Image_registration
[insig]: https://insigneo.org/
[job-ad]: https://tinyurl.com/y3h9u622
[pfire]: https://insigneo.github.io/pFIRE/docs.html
