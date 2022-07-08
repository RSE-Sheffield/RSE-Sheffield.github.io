---
category: lunchbytes
date: 2022-07-21
published: True
from: "13:30"
to: "14:30"
location: "Google Meet"
speaker: "Will Furnass, Magda Dabrowska, Ian Sudbery, Joe Heffer"
institute:
title: "LunchBytes: Workflow Managers"
image:
slides_url:
---

Scientific workflows (for example in bioinformatics) often require several different scripts or pieces of software to be run and their outputs fed into each other. Ideally, we'd like to be able to understand the provenance of the output, without having to re-run the entire workflow every time a minor change is made to code or data. This is often difficult to achieve with bash or Python scripts (for example), but workflow managers can help.

In this session we will learn more about the problems of controlling workflows / pipelines using scripts, and about what workflow managers are, and how they can help.

Save the date! More information to follow.

### The trouble with scripts (Will Furnass)

Scripts let us chain together several bits of software, often taking the output of one and feeding it into another and/or running the same software repeatedly with different inputs. This is often far better than entering commands into a prompt and then having to remember those commands and their sequence when doing the same job again.

However, glueing together the parts of a multi-step or multi-input workflow using scripts can be difficult: it's all too easy to create scripts that aren't portable between machines/systems, are brittle/unreliable, are difficult to read and test and aren't modular or reusable.

For which cases are scripts a good way of running a workflow and for which might they be problematic?

### Nextflow (Magda Dabrowska)

Details TBA.

### Ruffus (Ian Sudbery)

[Ruffus](http://www.ruffus.org.uk/) is one of the oldest of the modern style workflow management systems. Ruffus pipelines consist of a series of python functions that are linked together using a python feature known as decorators. Ruffus is a lighter weight alternative to systems such as Nextflow, while still offering the ability to create rich dependency graphs of tasks and orchestrate their submission to an HPC. It embodies the philosophy that for users to choose to use a reproducible pipeline in the real world, when under pressure, using a pipeline must be as easy, or easier, than the manual alternative. In my talk I will demonstrate the creation of a pipeline for a bioinformatics task consisting of multiple non-trival steps within 15 minutes. 

### Common Workflow Language (Joe Heffer)

[Common Workflow Language](https://www.commonwl.org/) (CWL) is an open standard for describing how to run command line tools and connect them to create workflows.

The CWL standard is not specific to any language or technology, so enables interoperability between the many different workflow languages, enabling researchers to share workflows. It's more abstract than any particular language implementation, aiming to support a super-set of the features of other languages. CWL allows portability across these systems because the logical/computational parts of a workflow are decoupled from the code that runs them.

### Joining Instructions

This session will take place on [Google Meet](https://meet.google.com/kuv-ecuk-eoz) and participants can join 15 minutes before the start of the session.

We also have a [Google Jam Board](https://jamboard.google.com/d/1c0DdvFEHmAVD7c5LYPLqWa5X9Q6kYecnic6eyqIW8V4) where you can note down any questions or comments before or during the event.
