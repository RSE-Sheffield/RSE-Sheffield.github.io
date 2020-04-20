---
title: Will Furnass joins to work on Jupyter and Grid Engine integration 
author: Will Furnass 
slug: willfurnass_intro 
date: 2017-01-30 10:56:00 UTC 
tags: projects 
category: 
link: 
description: 
type: text 
---

![Will Furnass](/assets/images/willfurnass.png)

The Research Software Engineering team at the University of Sheffield
has gained a new member. I joined at the start of January and will
primarily be working on [OpenDreamKit](https://opendreamkit.org/) which
is a [Horizon 2020](https://ec.europa.eu/programmes/horizon2020/)
European [Research
Infrastructure](https://ec.europa.eu/programmes/horizon2020/en/h2020-section/european-research-infrastructures-including-e-infrastructures)
project with the aim of furthering the open-source computational
mathematics ecosystem.

My contribution to this project is to extend work previously started at
the University of Sheffield to allow researchers to more easily run
interactive workflows on [High-Performance
Computing](https://en.wikipedia.org/wiki/High-performance_computing)
clusters, specifically to make it easy, robust and intuitive to run
[Jupyter
Notebooks](http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html)
on clusters running job scheduling software from the [Grid
Engine](https://arc.liv.ac.uk/trac/SGE) family.

Jupyter Notebooks are **runnable documents** containing code snippets
that are viewed and manipulated from a web browser. They are an
increasingly popular way of encapsulating, presenting and sharing a
coding-oriented workflow. A Notebook comprises a column of cells, where
each cell can contain:

-   some code or
-   explanatory text (that can be formatted using
    [Markdown](https://en.wikipedia.org/wiki/Markdown)) and/or
    mathematical expressions (formatted using
    [MathJax](https://www.mathjax.org/)).

When a code cell is executed by the user it can return anything
renderable by a modern web browser:

-   a single value,
-   a table of data,
-   a figure or
-   a mathematical expression.

For example:

![image](/assets/images/jupyter_notebook_example.png){: .img-fluid}

The code cells of a Notebook can be (re)run in any order, so Notebooks
are very useful for interactive exploration.

The structure of Jupyter is typically as follows: :

    [Notebook in browser] <---> [Jupyter server] <---> [Kernel]

where the kernel is the part that executes code cells. There are
[kernels for many different programming
languages](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels)!

The server and kernel can run on the same machine as the web browser but
the architecture allows them to also run on remote machines. These
remote systems could be:

-   a research group's central server,
-   a Jupyter-aware cloud service (e.g.
    [SageMathCloud](https://cocalc.com/settings) or [Azure
    Notebooks](https://notebooks.azure.com/)) or ...
-   **the HPC clusters operated by so many academic institutions**.

This is where my part of OpenDreamKit comes in. Computer clusters such
as [Iceberg](https://docs.hpc.shef.ac.uk/en/latest/iceberg/index.html)
and [ShARC](https://docs.hpc.shef.ac.uk/en/latest/sharc/index.html) here
at the University of Sheffield allow users to run computational jobs
with more resources than typically available in researchers' own
machines. Jobs can have parallel threads of execution running on up to
sixteen cores per node and/or running over multiple nodes, jobs can use
hundreds of MB of RAM and can make use of the latest generation of GPUs
for things like accelerated [deep learning
workflows](http://www.acrc.com/deep-learning/). However, the need to
request resources, then submit and monitor jobs from the command-line
can be a steep barrier to entry for some. Being able to easily run
Jupyter Notebooks on our clusters and request the necessary resources
for our interactive explorations via an intuitive web interface could
help make HPC more accessible and useful to those without a strong
understanding of Linux and the command-line.

We already have [an instance of JupyterHub
running](https://docs.hpc.shef.ac.uk/en/latest/hpc/jupyterhub.html) to
allow users to start Jupyter sessions on our
[Iceberg](https://docs.hpc.shef.ac.uk/en/latest/iceberg/index.html)
cluster thanks to the efforts of [Stuart
Mumford](http://stuartmumford.uk/). I will be working on:

-   Upgrading this to use the latest version of JupyterHub;
-   Setting up JupyterHub on our new cluster
    ([ShARC](https://docs.hpc.shef.ac.uk/en/latest/sharc/index.html));
-   Developing a mechanism for easily requesting resources (more RAM /
    CPU cores / GPUs) from the Grid Engine scheduler;
-   Making the JupyterHub and Grid Engine integration more robust.
-   Looking at how JupyterHub could be set up on HPC clusters at other
    institutions (possibly using different schedulers) for
    research/teaching.

I'm rather excited about this new role. One nice aspect to it is that I
am now according to my contract officially a [Research Software
Engineer](https://rse.ac.uk/):

> Dear Dr Furnass
>
> Further to recent discussions, I am pleased to confirm the change in
> your appointment with the University of Sheffield. The details of your
> offer are provided below:
>
> Appointment Details: You, Dr William Furnass, shall be employed by the
> University of Sheffield as a Research Software Engineer in the
> Department of Computer Science with effect from 1 January 2017. This
> position is offered on a fixed term basis.

This demonstrates that research institutions have started recognising
[Research Software Engineering](https://rse.ac.uk/who/) as an
alternative career path in academia (something the [Software
Sustainability Institute](https://www.software.ac.uk/) have been pushing
for for some time) and RSEs aren't simply post-doctoral researchers who
happen to write software.

The path to this point has not been particularly direct: I have a
[computer scence degree](https://engineering.leeds.ac.uk/computing),
worked as a IT systems engineer in the film industry, have a PhD plus
post-doc experience in [water
engineering](https://www.sheffield.ac.uk/civil/) (where I developed
semi-physical and data-driven models of water quality in water
distribution networks) and I have provided support to the users of the
University of Sheffield's [HPC clusters](https://docs.hpc.shef.ac.uk/).
In addition I taught or helped run RSE, water engineering and study
skills workshops.

My interests include helping researchers optimise data analysis
workflows (primarily using higher-level languages), providing training
in RSE best practices and systems administration. You can contact me
via:

-   Email: w.furnass (at) sheffield.ac.uk
-   Twitter: [@willfurnass](https://twitter.com/willfurnass)

