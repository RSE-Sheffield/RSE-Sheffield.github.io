---
layout: post
title: "Open Source"
author: Robert (Bob) Turner
slug: 2020-09-21-open-source
date: 2020-09-21 12:00:00 UTC
tags: 
category:
link:
description:
type: text
excerpt_separator: <!--more-->
---

This is going to be my perspective, to some extent, but hopefully also introduces some of the legal, technical, economic and academic aspects of open source – providing context for experts and a gateway for the newly interested. *Note: I have no legal training, consult someone who does if you need to!*. But, my perspective, so we’re going back to when I was first exposed to open source, back around the millennium…

<!--more-->

Open source was an ideological battleground. Really. The dotcom bubble had burst. Everyone had a phone, but no-one had a smartphone. If you accessed the internet is was almost certainly via a PC or laptop running Microsoft Windows.

## Copyright

People were beginning to realise that the internet could be used to transfer music, games and videos at scale, but there were few paid ways of doing this, so using a peer file sharing network to illegally download was increasingly commonplace. People felt OK about this, as they saw themselves as were depriving large corporations of small amounts of revenue. Said large corporations took a different stance – peer sharing was going to destroy all music, much as home taping had a generation before. Why am I banging on about this? Copyright. In much of the world, if you produce some music, or some text, or some code, for a period of time no-one is allowed to copy it without your permission. This right is something you can sell. And while copyright was something the peer-sharers ignored, it is a pillar of open source software, as we shall see.

## Licenses

While record labels and movie producers were worried about file sharing, some large software companies were worried about something else: open source software. Their model was to keep the source code to their products secret, to stop people from copying it. They would sell compiled versions of their software in which the source code was effectively hidden. Copyright, secrecy and licensing were what prevented their products being cheaply duplicated. Open source software, chiefly the Linux operating system, was beginning to subvert this model. Without copying the (copyright-protected) source code, software was emerging that had similar features to closed-source products, but licensed differently. Closed-source software is typically sold to you with a license which says you can’t copy it and give it to someone else. Open source software is licensed under a couple of broad categories:

- Derivative works must also be open source and carry the same license as the original code (**Copyleft** e.g. [GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)).
- Derivative works must just carry an acknowledgement of the open source code (e.g. [BSD](https://opensource.org/licenses/BSD-3-Clause).

We find that, practically, the former work better where there are lots of volunteer contributors and the latter where there is private sector backing. Another ideological battleground.

*If you make your code open source, you do this using your copyright - code without a copyright notice and license does not revert to being free to copy, it just means we don't know who owns the copyright and what they'll allow!*

## Patents

So what do you do if you have a monopoly on some software and some undermines this by giving a similar thing away for free? Patents are a legal avenue to stop others from copying an invention. It has been argued that aspects of software are inventions and can thus be patented, or that the law should change such that they could be. We were a bit terrified that every time we wanted to include say, a menu bar, in a GUI, we'd need the permission of whoever held the patent. The rules on this, it turns out, vary around the world, and the stuff we felt threatened by in the U.K. never really came to be.

## So who won?

You did. Software businesses, large and small, are still a huge part of everyone's lives. However, there is now something of a symbiosis between closed and open, commercial and free. The perspective of a software entrepreneur I spoke to was that open source gives developers all of the core stuff they need (e.g. menu bars, web servers, programming languages) to operate and innovate without a requirement to reinvent the wheel. I get this perspective - it explains a lot of the pro-open source behaviour of big companies.

In research, open source software means that we often get great software pretty much for free and we can fully articulate the steps we take in coming to our conclusions, rendering our research open and reproducible. I was once told by a closed-source software vendor that specifying the version of their product used to process my images was sufficient to make my paper open and reproducible in this regard. Rubbish. We need to be able to point to the source code.

## What next?

[Hacktoberfest is nearly upon us](events/hacktoberfest)! The open source software you rely on, relies on contributions from volunteers, like you (and sometimes also state and corporate funding!). Hacktoberfest is a chance to get involved with contributing to open source. If you're new to this then it should offer support, if your a gnarly veteran developer, it should create time for you to work on projects that matter. And for all to get a [free T-shirt](https://hacktoberfest.digitalocean.com/). If you run an open source project, it's an opportunity to get some input to help.

*The Hacktoberfest events run by the Research Software Engineering team at the University of Sheffield start with an [introduction to open source and version control](events/hacktoberfest).*