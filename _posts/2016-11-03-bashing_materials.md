---
title: Bashing down Windows for Materials Science
author: Christopher Handley
slug: windows_bash_materials
date: 2016-11-03 16:33:11 UTC
tags:
category:
link:
description:
type: text
---

In the last few months Windows 10 has had an interesting new capability – [Bash](http://www.walkingrandomly.com/?p=6187). Originally the Linux Subsystem was only available for those on the developer loop, but since the Windows 10 Anniversary edition this subsystem has been available to all users who activate it. The subsystem is not an emulator, but a way for Windows 10 to run Linux applications, and to use the Linux Bash environment, through the use of dynamic maps between Linux system calls and Windows ones.

As a computational chemist working in the [Department of Materials Science and Engineering](https://www.sheffield.ac.uk/materials) this is really an excellent and exciting new way that Windows has evolved.
There are a great many tools for my research. Some work on Windows, and are well designed for that OS, given that they are applications aimed at the people that make and analyse their materials. These tools help users visualize crystal structures in 3D, or predict from crystal structures experimental observables, such as transition electron microscopy. For computational chemists, these tools are often also invaluable as they allow us to construct visually the crystal structures that we wish to then simulate using quantum mechanics or classical force fields.
More often than not, the programs designed for running such chemical simulations, have no GUI, and run in a Unix environment. [CASTEP](http://www.castep.org/) is a UK created Density Functional Theory simulation package, which is free for all UK academics, and is used extensively by those researchers wishing to simulated solid state materials, such as batteries, piezoelectric materials, and solar power materials. Previously, to run CASTEP on a Windows machine, [Cygwin](https://www.cygwin.com/) or a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) were required. However, with the new subsystem, CASTEP installs out of the box as if you were running any other Linux computer.
The same is equally true of [GULP](https://nanochemistry.curtin.edu.au/gulp/), another program used in materials science, which is often used to design, test, and analyse atomistic potentials. [DL_POLY](https://www.scd.stfc.ac.uk/Pages/DL_POLY.aspx), another UK created simulation package is also used by a large user base to perform molecular dynamics simulations using atomistic potentials.

All of the above programs mentioned, and many more, such as the DFT codes [VASP](https://www.vasp.at/) and [WIEN2K](http://susi.theochem.tuwien.ac.at/), and other molecular dynamics programs such as [GROMACS](http://www.gromacs.org/), and [LAMMPS](http://lammps.sandia.gov/), can have their output analysed by these Windows 10 packages, and their inputs easily designed by these same crystal analysis programs, but natively are best run in a Unix environment.

The typical work around has always been either the use a virtual machine, Cygwin, or, using more expensive Apple computers, or making users use Linux machines for which they may not be comfortable using – especially if their previous workflow used packages that ran on Windows.

Personally I fall into that last category of users. While I can write a paper in [LaTeX](https://www.latex-project.org/), I really don’t like it compared to the WYSIWYG world of Word, and of course with word I can use my favourite citation manager, Zotero (which by the way the work around using Dropbox is also good fun). That impact on workflow is an important thing, especially if you are dealing with final year students who you want to work on your research. Ideally you want to get them up and running ASAP where the only teaching you need to do is how to run the simulation packages. I don’t want to have to teach them how to use and entirely new OS, and in the case of Linux, perhaps entirely new ways to write documents and make spreadsheets. This is especially true if the university course from the first year onwards has included access to MS Office, and has done teaching using those tools.

By being able to now run many of these simulation packages through the Windows Bash Linux subsystem there are minimal hoops to jump through. All students now have easy access to a machine that can run the simulation programs, and without having to switch OS, or log into a dedicated UNIX server which is maintained for PhD and postdoc research. That lack of need to use a virtual machine, or emulator, also means much less impact on resources on personal machines, and less peculiarities with the allocation of computing resources on those machine. Furthermore, with respect to workflows, inputs and outputs from those simulation packages all can happen under the one roof of the Windows 10 OS, and lead to greater productivity.

Bash in Windows 10 has trampled down a barrier which makes the use of the OS far more competitive, cost effective and productive for computational chemistry.
