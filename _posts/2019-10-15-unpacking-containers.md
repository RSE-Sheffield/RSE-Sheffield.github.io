---
layout: post
title: Unpacking Containers
author: Robert (Bob) Turner
slug: 2019-10-15-unpacking-containers
date: 2019-10-21 09:00:00 UTC
tags:
category:
link:
description:
type: text
excerpt_separator: <!--more-->
---

I worked in commercial I.T. for a few years before doing an PhD and spending many years in scientific research. Coming back to software full time is a bit like coming out of cryo-stasis: Technology has moved on in ways I could not possibly have imagined and I must adapt like some kind of sci-fi person. One of the big changes over the last few years has been the increased use of virtual machines (e.g. using [Virtualbox](https://www.virtualbox.org)) and containers ([Docker](https://www.docker.com/) is a popular choice, [Singularity](https://sylabs.io/) may confer advantages in High Performance Computing (HPC)). I now feel ready to talk about this with others.

<!--more-->

If you've persevered to this point in the post, you deserve an explanation of what virtual machines and containers actually are. But you are going to have to wait until I've explained how software interacts with "normal" hardware such as a laptop.

## Things that are not virtual machines or containers...

These are physical computers made of glass, plastic and metal. The physical *hardware* resources (processor, memory, storage, screen) that make up a computer are (generally) given instructions by the software it runs via an *operating system* such as Windows or Linux. Software that has been engineered for one operating system (generally) will not work on another.

{% include image_caption.html url="/assets/images/vm-container-blog/no_vm.png" description="Computers, operating systems and software"%}

When software is installed, typically a bunch of files are copied onto the computer and some other files are altered. Yet more prerequisite files might be downloaded from another source. A problem arises if, by installing one piece of software, a file on which another piece of software depends is altered or removed. This can be accidental or malicious. Malicious software can be deliberately designed to access data which should remain private to other software.

Another potential problem is a situation where the software runs, but behaves differently on different computers. This could involve the software crashing, or perhaps producing slightly different results — a big problem when trying to make results reproducible.

## Virtual machines...

A virtual machine (or VM) is, in effect, a piece of software running on a physical computer, that supports another operating system. A computer in the imagination of another.

{% include image_caption.html url="/assets/images/vm-container-blog/vm.png" description="Virtual machines"%}

Software can then be run on the virtual machine. Much as multiple pieces of software can be installed on a single physical computer, so can multiple virtual machines. And multiple pieces of software can be installed on each virtual machine. All this comes at a performance cost - software running on a virtual machine will not generally go as fast as the same running directly on physical hardware. So why bother with all this complexity?

- We now can make loads of identical virtual computers.
- We can copy and share these with other people.
- **Software that runs on one of these computers will run on any another, producing the same results (and crashing in the same way).**
- Software on one virtual machine can't easily interact with (mess up) another.
- If we need a better virtual machine, we can tell it to take up more of the resources of the physical computer on which its running.
- If that doesn't work, we can copy the virtual machine onto (or recreate it exactly on) a more powerful physical computer, which could be on the other side of the world.

So virtual machines can be really helpful, but they can be slow to run and also slow to configure.

## Containers...

Containers get round some of the problems with virtual machines. The term "container" is not always defined in exactly the same way. Containers allow software running in them to access hardware more directly than a virtual machine, but restrict what hardware they can use and interaction between discrete containers. This confers many of the advantages of using virtual machines. However,the key technical difference between a container and a virtual machine is that a container does not (generally) have its own operating system. This means they avoid some of the slowdown associated with virtual machines, but can still be configured and replicated to ensure that software runs consistently.

{% include image_caption.html url="/assets/images/vm-container-blog/containers.png" description="Containers"%}

The great successes of containers are in:

- Packaging software for distribution such that it runs very consistently on lots of different physical computers (from desktops to high performance computers).
- Making it easy to get multiple copies of software running, on multiple computers, on demand to deal with rapidly changing requirements.

## Linking together...

So far, so good. But probably not good enough to justify the current buzz around these technologies. I think one of the key benefits that we've not mentioned is how virtual machines and containers can be set up to work together.

[Vagrant](https://www.vagrantup.com/), for example, can be used to create and provision (install software, write configuration files, mount network drives, etc.) any number of virtual machines with the following:

```sh
vagrant up
```

Easy, eh? Every aspect of the configuration is defined as software (this is "*infrastructure as software*"). I use this to configure linked database server — web server pairs. I can use the same approach to configure virtual machines on my laptop for testing, for development servers and for live applications. Doing this with physical hardware would be epic, and the configurations would drift apart through updates and bug fixes in milliseconds (not really, but quickly though).

[Kubernetes](https://kubernetes.io/), for example, takes this to perhaps even greater levels. This allows deployment of containers grouped into blocks with control of the level of interaction within and between these. This is great for scaling up to huge and variable numbers of software users by allowing hardware resources to be dynamically re-allocated to different applications.

## Now what?

Most of the technologies I've talked about are available to download and experiment with. If you think your software might benefit from running on a virtual machine or in a container and want some advice, consider an RSE [code clinic](https://rse.shef.ac.uk/support/code-clinic/).