---
layout: post
title: "Why should I use a database?"
author: Robert (Bob) Turner
slug: 2019-11-05-why-database
date: 2019-11-20 09:00:00 UTC
tags:
category:
link:
description:
type: text
excerpt_separator: <!--more-->
---

Figuring out how to store research data is potentially a bit of a headache - we have to balance data security, integrity and availability. Databases offer a means of doing research data management better, but setting them up is out of reach for many researchers. Especially those doing small or pilot studies.

<!--more-->

Spreadsheets can be fantastic. They offer a great way to represent tablular data on-screen and do things with it. In fact you can put tables anywhere you want and make calculations with them. They're quick to set up, lots of people know how to use them and you can now have them sat in the cloud (e.g. Google Sheets) such that multiple users can access and edit them. You can make charts and paste these into a word processor. Lots of data comes to us in a spreadsheet-like format. One might use a spreadsheet to keep track of accounts, or to hold some data collected and noted down in a lab-book prior to doing a statistical test or plotting a graph. So why use a database?

## Scalability

![](/assets/images/database-blog-post/scale.jpg){: .img-fluid width="25%" .float-right}

A spreadsheet with 10 rows and 10 columns can neatly fit on a screen (or a printed page) and we can see everything that's going on. However, with large numbers of rows (even more so columns) it becomes hard to keep track of the data. Maybe you have 10 rows and 2 columns per experiment, but 23 experiments: Do you put each one on a separate sheet, or two columns per experiment on one sheet, or each below the other with an extra column for experiment name? Maybe you have two different experiments to do on the same sample (or investigations on the same study participant), generating different data that needs to be related to each other. Spreadsheet per experiment? Per sample / participant? Or maybe you have 5 different groups to study, each containing 6 individuals who are sampled over a period of time in 3 different ways. What do you do then, eh?

Databases are great at providing a window on just the information you need at the time - the complexity of relationships between data can be designed in advance and masked from the user. However, it does help if you know what those relationships are in advance of your study.

## Validation

"*S. aureus*", "*Stpahylococcus aureus*", "*s aureus*", "*staph aureus*", "*s. Aureus*". OK, I'm bored typing now! Everything in the preceding list means the same thing, but if I want to search or categorise on a column in a spreadsheet with values drawn from it, I will quickly become enraged. In general, there's nothing a spreadsheet can do to stop this happening.

![](/assets/images/database-blog-post/magnify.jpg){: .img-fluid width="25%" .float-right}

In a database, "validation rules" can be applied to each column. Some examples:

- The data must be a value chosen from a pre-existing list.
- The data must be an integer between 1 and 10 (inclusive).
- The data must be a string that starts with an ! mark and has an @ in it somewhere.

These can be pretty complex if you want them to be and can really help when it comes to analysis.

## Audit trail

Is there a word in English that conveys more joy and romance that "audit"? I doubt it. Databases are much better at keeping track of who altered what data, when and why than spreadsheets. If someone logs into a web interface to a database, their user name can be automatically tied to the edits and additions they make, and the facility to comment on data points can be made available. Data entries can be marked at "draft" or "verified" enabling quality and completeness of the data set to be reported on.

## Sharability

![](/assets/images/database-blog-post/dashboard.jpg){: .img-fluid width="25%" .float-right}

"Sharability" is now a word. I just invented it. Don't worry, it's open source so you can all use it. Have you ever received a spreadsheet from someone and not known what's in what column or which version of it from which to make the figures for your paper? In a database, versions of data can be tracked and detailed information on what's in each column recorded. Often a range of output options are available - you can connect charting software or even an online dashboard directly to your data. Imagine having the option of sharing your study data and analysis with collaborators and other interested parties in real time rather than waiting to publish a paper.

## Availability

If your database is on a web server that is secure and regularly backed up, your data is going to be much more available and reliable than if it's on a spreadsheet on your laptop.

## Convinced?

Maybe. But why isn't everyone using databases all the time? Probably because of the skillset and time needed to set a database up. Microsoft Access is an option for many who want more than a spreadsheet, but it doesn't confer all of the benefits I've described "out of the box". Setting up database on a web server, even if you're not developing it from scratch is a skilled job and something you don't want to get wrong. A short term option is to contact your I.T. services or Research Software Engineering team to see if they can help. Often this is not part of "standard service" and costs therefore need to be picked up by individual projects. Longer term, there are some other things we could do. I.T. services within organisations doing research could maintain database servers that can be configured using a web interface for researchers to use - the delineation of who does what would need to be worked out, particularly if sensitive data is involved. Something that really should be happening is to provide researchers with better training not just on "data management plans" but providing them with the software skills they need to implement them.
