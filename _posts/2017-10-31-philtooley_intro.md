---
title: ! "New Group Member: Phil Tooley" 
slug: philtooley_intro
date: 2017-10-31 15:56:00 UTC
tags: 
type: text
author: Phil Tooley
has_math: yes
---

I am thrilled to have joined the [Research Software Engineering team at
Sheffield](/). My new role is attached to the [INSIGNEO](https://insigneo.org)
Institute for in silico Medicine here at the University of Sheffield, developing image registration
software as part of the [CompBioMed](http://www.compbiomed.eu) project.   

## About Me
<img src="/assets/images/ptooley.jpg" align="right" />
I am a former theoretical and computational physicist with particular interests in mathematical
modelling and code optimisation. I am also a stalwart champion of the use of the Scipy stack for
scientific computing, and enjoy trying to make python speed competitive with C and Fortran
(Spoiler alert: it totally can be!) 

Although I am a user of both C(++) and Fortran I find that python is often a better choice for many
tasks even in high performance scientific computing. As well as the huge array of fast mathematical libraries
available to python, it is also possible to write custom routines in pure
([Numba](https://numba.pydata.org)) or nearly-pure ([Cython](http://cython.org)) python
code, and compile them to native machine code.  This can give python equivalent performance to
traditional C or Fortran codes, and opens up the possibility of running python code efficiently
on HPC platforms. (More to come on this topic...)

Outside the office you will usually find me rock climbing or hiking somewhere.

### My previous work

For the last 4 years I have been working on my Ph.D in Theoretical and Computational Plasma Physics
at the [University of Strathclyde](https://www.strath.ac.uk) working on novel accelerator technology
known as Laser Wakefield Acceleration (LWFA).  This involves firing a short \\((30\\,
\\mathrm{fs})\\) but highly intense \\((10^{25}\\mathrm{W/m^2})\\) laser pulse, into a jet of
helium gas.  The laser ionises the gas to a plasma and drives an electrostatic plasma wave with
intense electric fields which can accelerate electrons to Gigaelectronvolt energies over just a few
mm. (Compared to conventional accelerators such as [SLAC](https://en.wikipedia.org/wiki/SLAC) which
have to be kilometers in length to achieve the same energies.)

My research was into methods of controlling and improving the performance of these accelerations,
and relied heavily on [Particle in Cell Codes](https://en.wikipedia.org/wiki/Particle-in-cell).
These are massively parallel codes designed to run on HPCs and I spent a lot of my time developing
code extensions and analysis tools for the terabyte scale datasets that they produce.  Typically I
was interested in extracting a very small (usually \\(<1\%\\) of the total) subset of the electrons
based on some selection criteria. To do this efficiently I developed a custom C++-based analysis
code which can extract electron trajectories from the data based on arbitrary criteria.

A major application of LWFAs is as compact sources of X-ray and UV light for imaging and materials
analysis tools in science and industry, and so the second major theme of my work was analysis of the
radiation produced by the accelerated electrons.  This analysis required numerical integrators to
calculate the radiation from the extracted electron trajectories by solving the Li&eacute;nard-Wiechert
potential equations.
