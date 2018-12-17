---
title: Manchester Julia Workshop
author: Avgoustinos Vouros
slug: julia-manchester-2016
date: 2016-10-19 11:46:11 UTC
tags:
category:
link:
description:
type: text
---

<div align="left">
<a name="logo">
<img src="http://www.informatics.manchester.ac.uk/media/1552/juliaworkshop.jpg?format=jpeg" alt="Julia Logo" width="300" height="200"/>
</a>
</div>

A few weeks ago (19-20th September 2016) I had the chance to attend the very first Julia workshop in the UK held at the University of Manchester by the [SIAM Student Chapter](http://www.maths.manchester.ac.uk/~siam/). The first day of the [workshop](http://www.maths.manchester.ac.uk/~siam/julia16/) consisted of a basic tutorial of Julia, installation instructions and around five hours of hackathon. The second day provided an introduction to carrying out research in various fields such as data analysis, material science, natural language processing and bioinformatics using Julia. The attendees were a mixture of PhD students, post-docs and lecturers mainly from the University of Manchester as well as other universities and institutes (Warwick, Glasgow, Reading, MIT, Imperial College London, Earlham Institute).

# Day 1: Tutorial and Hackathon

There are several ways to [run Julia](https://julialang.org/downloads/) in any OS, including command line version, [Juno](http://junolab.org/) IDE and Jupyter notebook ([IJulia](https://github.com/JuliaLang/IJulia.jl)). In case you want to avoid any installation process then there is also the  browser based [JuliaBox.com](https://www.juliabox.com/). I was surprised that the whole process was smooth without any software setup issues!

The tutorial consisted of some very basic demonstration of Julia mostly on linear algebra and statistics and after a short break we were left to explore Julia, collaborate and exchange ideas. There were also two Exercises proposed to us:

* [First Steps With Julia](https://www.kaggle.com/c/street-view-getting-started-with-julia) by [kaggle](https://www.kaggle.com/) which teaches some basics of image processing and machine learning to identify the character from pictures.
* [Bio.jl Exercises](https://docs.google.com/document/d/1NYQFLeORdMCHl2hncOkhNNPNJUWGAoGcR_tCs-KF-D0/edit#heading=h.262rsr2l8kb4) by Ben J. Ward which provides simple examples of using the [Bio.jl](https://github.com/BioJulia/Bio.jl) to do simple operations and manipulations of biological sequences.

As I wanted to try as many libraries as possible from image processing and data visualization to embedded Java, I ended up using a lot of different packages so I found these commands (self-explanatory) for package managing the most useful for me:`Pkg.add("PackageName")`, `Pkg.status()`, `Pkg.update()`. Here of course, I detected some compatibility issues. I was running Julia version 0.4.6 but it appears that most of the attendees were using the version 0.4.5. Some commands seemed to have changed between these versions; for example in the kaggle's exercise the command `float32sc(img)` which converts an image to float values was not working for me instead I had to use the `float32(img)` command. A minor issue for a new-born language.

# Day 2: Talks

The talks were centred around specific fields with heavy scientific computing (automatic differentiation, molecular modelling, natural language processing, bioinformatics and computational biology) and how Julia influence these fields. Each speaker presented his field of research and his Julia implementations which ended up as another package for the Julia community. More information about the speakers can be found on the [Manchester Julia Workshop webpage](http://www.maths.manchester.ac.uk/~siam/julia16/) and a list of the presented packages can be found below:

* Data analysis and visualization: [Distributions.jl](http://distributionsjl.readthedocs.io/en/latest/), [DataFrames.jl](https://github.com/JuliaData/DataFrames.jl), [GLM.jl](https://github.com/JuliaStats/GLM.jl)
* Embed other languages with Julia (Python, R): [PyCall.jl](https://github.com/JuliaPy/PyCall.jl), [RCall.jl](https://github.com/JuliaInterop/RCall.jl).
* Automatic differentiation: [ForwardDiff.jl](https://github.com/JuliaDiff/ForwardDiff.jl).
* Molecular modelling: [JuLIP.jl](https://github.com/libAtoms/JuLIP.jl).
* Bioinformatics and computational biology: [bio.jl](https://github.com/BioJulia/Bio.jl).

# Final words

Overall I was very satisfied with the Julia experience and I am waiting for its first official release (v1.0) which will probably be next year. Here are the main advantages which led me to believe that Julia can be the next on demand programming language for scientific computing:

* Combines the productivity of dynamic languages (Java, Python) and the performance of static languages (C, Fortran). In other words: very easy to write optimized code and run your program fast at the same time. [Dr Jiahao Chen](https://jiahao.github.io/) from MIT in his [talk](https://www.slideshare.net/acidflask/programming-languages-history-relativity-and-design) mentioned the following referring to Julia's speed, "*You can define many methods for a generic function. If the compiler can figure out exactly which method you need to use when you invoke a function, then it generates optimized code*".
* Deals with the two language problem: base library and functionality is written in Julia itself.
* It is free and open source (MIT licensed), high advantageous for the scientific community to share code or expand existing one.
* A great and friendly community and users from various fields which constantly expand the existing Julia library.

**Fun fact:** The system for variable declaration accepts any [Unicode character](https://docs.julialang.org/en/v1/manual/unicode-input/): `\delta[tab] = 2` results in `δ = 2`, `\:smiley: = 4` results in `😃 = 4.` Although, apart from some April Fool's pranks, Julia's [stylistic conventions](https://docs.julialang.org/en/v1/manual/variables/) is advised to be followed when defining variable names!
