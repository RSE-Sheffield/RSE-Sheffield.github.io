---
layout: post
title: "Why should I use a database?"
author: Robert (Bob) Turner
slug: 2019-11-05-why-database
date: 2019-11-18 09:00:00 UTC
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

Spreadsheets can be fantastic. They offer a great way to represent tablular data on-screen and do things with it. In fact you can put tables anywhere you want and make calculations with them. They're quick to set up, lots of people know how to use them and you can now have them sat in the cloud (e.g. Google Sheets) such that multiple users can access and edit them. You can make charts and paste these into a word processor. Lots of data comes to us in a spreadsheet-like format. One might use a spreadsheet to keep track of accounts, or to hold some data collected and noted down in a lab-book prior to doing a statistical test or plotting a graph.

{% include image_caption.html url="https://upload.wikimedia.org/wikipedia/commons/7/7a/Visicalc.png" description="This is what a spreadsheet used to look like in the olden days" %}

## Scalability

A spreadsheet with 10 rows and 10 columns can neatly fit on a screen (or a printed page) and we can see everything that's going on. However, with large numbers of rows (even more so columns) it becomes hard to keep track of the data. Maybe you have 10 rows and 2 columns per experiment, but 23 experiments: Do you put each one on a separate sheet, or two columns per experiment on one sheet, or each below the other with an extra column for experiment name? Maybe you have two different experiments to do on the same sample (or investigations on the same study participant), generating different data that needs to be related to each other. Spreadsheet per experiment? Per sample / participant? Or maybe you have 5 different groups to study, each containing 6 individuals who are sampled over a period of time in 3 different ways. What do you do then, eh?

Databases are great at providing a window on just the information you need at the time - the complexity of relationships between data can be designed in advance and masked from the user. However, it does help if you know what those relationships are in advance of your study.

## Validation

"*S. aureus*", "*Stpahylococcus aureus*", "*s aureus*", "*staph aureus*", "*s. Aureus*". OK, I'm bored typing now! Everything in the preceding list means the same thing, but if I want to search or categorise on a column in a spreadsheet with values drawn from it, I will quickly become enraged. In general, there's nothing a spreadsheet can do to stop this happening.

In a database, "validation rules" can be applied to each column 
