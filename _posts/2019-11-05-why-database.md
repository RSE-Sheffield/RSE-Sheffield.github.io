---
layout: post
title: "Why should I use a database?"
author: Robert (Bob) Turner
slug: 2019-11-05-why-database
date: 2019-11-05 09:00:00 UTC
tags:
category:
link:
description:
type: text
excerpt_separator: <!--more-->
---

Figuring out how to store research data is potentially a bit of a headache - we have to balance data security, integrity and availability. Databases offer a means of doing research data management better, but setting them up is out of reach for many researchers. Especially those doing small or pilot studies. This is an example of something someone probably never said to me:

> "Honestly, it's just going to make things more complicated, less flexible, it'll be out of my control on a server somewhere and what's a server anyway? So shut up Bob, I'm not using a database. Anyway, you just want to make a new shiny software thing because that's what you like doing. My spreadsheet is fine. Go away."

<!--more-->

## Data matters

Research is fueled by data. We either derive that data from experiments, simulations, surveys and the like, or we obtain it from collaborators or other sources. We take the data and analyse it and tell people what we have learned. In the distant past all data would have been stored in some physical form - paper, cave walls, microfiche. More recently a blizzard of CDs, DVDs, USB sticks - anyone remember ZipDisks? At the time of writing there was one pack in stock on [Amazon](https://www.amazon.co.uk/Iomega-Disk-100MB-Format-Pack/dp/B00004VU5D)? Thankfully we're past all that. Except we're not. I'll bet there are still plenty of instruments in labs attached to computers running a Victorian version of Windows and accessible only via some shonky removable storage. In fact, it's not that long ago I used a machine that output directly to a dot matrix printer. Like this:

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Bound_computer_printout.agr.jpg" alt="drawing" width="200"/>

[CC-BY-SA-3.0](https://commons.wikimedia.org/wiki/File:Bound_computer_printout.agr.jpg)

## The current situation

However, lots of research data is now on hard drives in desktop or laptop computers, or on network or cloud storage. Data on network or cloud is often backed up and stored, in effect, in multiple copies. This ensures that it is pretty much always available and doesn't get lost. Great, but many are nervous about "the cloud" and where data actually is, globally, and who gets to look at it. Different institutions have different policies in this regard. And some collaborators will mandate that data must not be stored in "the cloud". So what the flip is "the cloud"? For the purposes of storage, it's basically a hard disk owned by an organisation that's not yours and is accessed over the internet. You use it and you're trusting this organisation to look after your data and not do stuff with it that they shouldn't.

I've talked a lot about where data can be stored, but the point of this post was supposed to be about the form in which it is stored.

## In praise of the spreadsheet

Spreadsheets can be fantastic. They offer a great way to represent tablular data on-screen and do things with it. In fact you can put tables anywhere you want and make calculations with them. They're quick to set up, lots of people know how to use them and you can now have them sat in the cloud such that multiple users can access and edit them. You can make charts and paste these into a word processor. Lots of data comes to us in a spreadsheet-like format.