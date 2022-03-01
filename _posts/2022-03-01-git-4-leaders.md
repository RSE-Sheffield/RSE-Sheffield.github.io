---
layout: post
title: "What research leaders need to know about git"
author: Robert "Bob" Turner
slug: 2022-03-01-git-4-leaders
date: 2022-03-01 16:30:00 UTC
tags:
category:
link:
description:
type: text
---

Important bits of you repository:

Readme

This is the first thing that anyone looking at your code on GitHub will see and it needs to tell them (or signpost) several key pieces of information including: what the software is for, how to install it, run it, cite it.

Licence

As far as I know, without a licence no-one can legally use or copy your code. So which one should you use? Here are a couple of example situations that have affected licensing decisions:

* On the **splendisim** project, the PI’s view is that their UKRI funded research has been funded in part by tax on businesses and on the basis of their argument that it will benefit the economy. They wanted a licence that makes it easy for others to build megasim into their products so they chose an MIT licence.
* On the **spiffingAI** project, the PI felt a strong sense of ownership of the code and didn’t want it to be used by &lt;insert evil corp> to help rig an election, so they opted for GPL.
* On the **lottopredict** project, there was a private sector partner, so the code was put in a private repository, without a licence while IP arrangements were clarified.

Things you probably need to know about and use:

Issues

Issues have issues. You’re going to want to use them nonetheless. An issue can be a bug report, a feature request, a long term goal, a request to correct a typo. They can be labelled and filtered. Their flexibility means that you need to figure out how best to use them. On a couple of projects, the PIs hated the idea of issues because they hated having undone “Issues” with their work. It helped to learn that “Issues” aren’t necessarily “Problems”. And to see how easy it made to track who was doing what on the project.

Things other people in your team will probably be dealing with and you need to understand the purpose of:

Repositories

These are places where code and documentation (and sometimes data) associated with a piece of software go. Like a folder on a computer, or on cloud storage, but we track the version of everything in there. 

Branches

These are analogous to a situation where someone sends you a document and you put your initials at the end of the filename while you work on it so when you send it back people can see who’s copy it is.

Commits

After someone changes a file or files, they save the changes and when they’re happy, they commit them to the repository, leaving a commit message of a few words.

Pull Requests

These are analogous to mailing your copy of the document (with your initials at the end) to whoever is putting together the final version. Someone says please can my changes be incorporated into the main version of the software. This is sometimes

Draft Pull Requests

git Flow

Releases

Organisations
