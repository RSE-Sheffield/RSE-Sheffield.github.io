---
title: Windows 10 to support Linux binaries
author: Ian Cottam
slug: linux-in-windows10-announce
date: 2016-04-06 10:25:37 UTC
tags:
category:
link:
description:
type: text
---

The big news from Microsoft is that, from this summer, Windows 10 will
support user-mode programs from the popular Ubuntu Linux distribution.

By "user-mode" we mean non-kernel things or, in other words, anything you
can type into a Bash shell command window. This is complete binary
compatibility: you can, for example, apt-get your favourite Linux tool or
just copy it over from an Ubuntu Linux system and it will run (assuming
you have any libraries it needs).

The underlying technology is a new Windows' service that dynamically maps
Linux system calls to Windows ones, whilst maintaining the Linux
semantics.

This is a big step for several reasons; here are just some:

* researchers who currently dual boot their laptops/desktops may not need
to
* researchers who run either Linux or Windows in a virtual machine may not
need to
* staff and students who buy expensive MacBooks mainly for its Unix
sub-system could buy a cheaper Windows 10 based laptop
* as Windows 10 will be binary compatible with Linux it could be said to
have an advantage over Apple Macs which use the BSD version of Unix (as
BSD has numerous, small but sometimes annoying, differences to the tools found on
Linux)
* it makes the path from developing on a laptop to a high-performance
computing cluster much more straightforward (i.e. basically the same Linux
toolset all the way)
* new researchers attending software/data carpentry courses - to learn the
basics of good software engineering - will no longer have to work in a
system alien to their day-to-day computing environment

I'm sure you can think of others.

The devil is always in the details, but from reports to-date this is good news for researchers.

* Mike Croucher, one of Sheffield's RSE Fellows, writes about the announcement on his blog: [http://www.walkingrandomly.com/?p=6011](http://www.walkingrandomly.com/?p=6011)
* Lots more detail from Microsoft's Scott Hanselman [https://www.hanselman.com/blog/DevelopersCanRunBashShellAndUsermodeUbuntuLinuxBinariesOnWindows10.aspx](https://www.hanselman.com/blog/DevelopersCanRunBashShellAndUsermodeUbuntuLinuxBinariesOnWindows10.aspx)
