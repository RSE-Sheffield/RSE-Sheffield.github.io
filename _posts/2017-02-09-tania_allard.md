---
title: ! "A new member of the team: Tania Allard"
author: Tania Allard
slug: tania_allard
date: 2017-02-09 21:37:12 UTC
tags:
category:
link:
description:
type: text
---
Tania Allard has recently joined the [Research Software Engineering team at Sheffield](https://rse.shef.ac.uk/). This is an introduction to her, her research career and why she has moved into [Research Software Engineering](https://rse.ac.uk/).

## About my research

I recently completed a PhD in [Materials Science at the University of Manchester](https://www.materials.manchester.ac.uk/) which focused on computational nanomechanics. The primary goal was to develop a robust characterisation technique for very small volumes of biocompatible materials and biological tissues.

Since such materials exhibit highly complex mechanical responses, the extraction of the values of constitutive parameters from test outputs is not straightforward and often requires inverse analysis. For such purposes I used an iterative [Finite Element Analysis](https://en.wikipedia.org/wiki/Finite_element_method) approach to extract meaningful constitutive parameters from the experimental data.

The Finite Element simulations were performed using [ABAQUS](https://www.3ds.com/products-services/simulia/products/abaqus/) while the optimisation based iterative approach was enforced by a series of codes in MATLAB (MATLAB was chosen as it provides a compatible interface to FE codes via multiple programming languages) and Python. The material constitutive laws were prescribed using either user-developed Fortran subroutines or Abaqus-built-in material models. For the case of hydrated materials an additional Fortran subroutine for surface flow conditions was used.

The workflow was as follows:

- Python scripts were used to generate the Abaqus input files with user provided variables (e.g. geometrical and boundary conditions identical to the experimental set up)
- The mean experimental response was fit to an analytical expression for time-dependent creep using MATLAB's [lsqnonlin](https://uk.mathworks.com/help/optim/ug/lsqnonlin.html?requestedDomain=uk.mathworks.com) algorithm. The parameters obtained from the initial fit were then used as the initial  guesses for the optimisation algorithm, after which the Fortran (UMAT) subroutine and/or the input files were updated.
- The FEA was performed  and upon completion the relevant data was extracted using a Python script.
- The MATLAB code was then used to fit the data obtained from FEA to the experimental observations, the parameters of the constitutive model were adjusted by means of the lsqnonlin algorithm. The quality of  the parameter set was evaluated by the minimization of the root mean square error between the experimental and numerical data.
- The parameters are further iteratively refined until the objective function satisfied a given convergence criterion.

Once the constitutive material parameters were obtained different parametric studies were performed using the HPC facilites at the University of Manchester (e.g. to study the effect of sample thickness, water content, and support material on the mechanical response).

## Research Software Engineering

I believe there are various reasons which led me to pursue a career as a RSE. While doing my PhD I realized how important research software is, especially when are dealing with highly complex physical systems and when the use of experimental techniques is not enough/too complex/to expensive/unsuitable for what you are studying. Also, I became very frustrated by the lack of Open Source software in my area, especially when we contacted researchers in other institutes, which demanded us signing a waiver to have access to their software. Whenever I found or were passed codes, scripts, or subroutines which would "help" with my research I spent an incredible amount of time going through badly commented (if commented at all!), badly documented scripts with no version control whatsoever. I then imagined it could not only be me getting this frustrated and wasting valuable time trying to make sense of poor code so I started using version control (and forcing people in my lab to do it) and producing code that could be passed to others (more than likely people in my lab).

Eventually I realized this was a bit of what RSE's do, and it turned out I enjoyed a bit more the software development side of research than the experimental bits, so pursuing a RSE career was pretty much a natural thing to do (and I suppose I wanted to prevent people from getting frustrated when accessing others' scripts). Also, I started realizing the RSE community in the UK is relatively small (albeit constantly growing) so when I saw the advertisement for the position at Sheffield I asked a couple of people at the University of Manchester if they knew the team, I received good comments (mainly on how enthusiastic [Mike Croucher](http://www.walkingrandomly.com/) is). I did my own research about the University, the RSE team, the projects in different groups, and it seemed both the University and the RSE would provide not only interesting projects to work on but also valuable insight (and mentoring) from experienced RSE's. Also, after realizing that the team was also quite small I figured it would allow for plenty of opportunities to learn loads of new skills while using my current  expertise.

Last year I volunteered at the [national RSE conference](https://www.software.ac.uk/news/2016-05-09-first-ever-conference-research-software-engineers-call-participation), I thought this would be an excellent opportunity to get to know the community, talk to RSE's from different places/universities about the projects they do and why they pursued a career like this. It definitely opened my eyes to the diversity of projects they work in and how collaborative this environment actually is, and if anything it just made me feel more excited and confident about my career post-PhD.

So when I had the chance to be in the committee for the RSE2017 conference I decided to get involved. Last year was a great experience for me and I think I might have one or two ideas to make this year's event better (even if only a little).

So far, my experience as a member of the RSE community has been quite pleasant. We always hear about the computer science and STEM communities being not so diverse, but I can see many groups working hard to be more inclusive and working hard to support junior RSE's, like me. The community is filled with very enthusiastic people, often working in very very interesting stuff. The Sheffield RSE team has been very welcoming and supportive over the few months I have been there, so I can truly say that I am very happy to be part of this team.

I am not 100% sure what my future career looks like, but I would certainly like to help raise awareness of how important software actually is for research, and how important it is for that software to be developed under good practices and with sufficient resources. Many people are aware now how important open data sources are, and I hope people would see research code in a similar way, that it needs to be open and made available for whoever needs it, or just to demonstrate how reproducible their studies are. So I believe I will be making my part by setting/maintaining software standards within the RSE team and spreading the word. Also, I am massively interested in the so-called big-data/data science areas so I would definitely like to get involved in more projects concerning those areas.
