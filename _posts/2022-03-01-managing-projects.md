---
layout: post
title: "How to run a research software project"
author: Robert "Bob" Turner
slug: 2022-03-01-managing-projects
date: 2022-03-01 16:30:00 UTC
tags:
category:
link:
description:
type: text
---

What right have I to comment on how PIs manage their teams? None, really. I’ve never been one. But the RSE team’s job is to help create better software outputs at a project level, and a systemic level, and we can’t do this without asking others to change their behaviour a bit. This post contains some suggestions on how an effective research team can be stretched into an effective research and software engineering team.

## How research groups work

I’ve worked in or closely with maybe 15 academic research groups in fields across science and engineering. **I will massively generalise:** These groups all have a pretty similar organisational structure, with a PI (a lecturer, senior lecturer or professor in the British vernacular) running the show, students and research associates carrying out research and sometimes technicians (doing routine tasks, running specialist equipment and / or ensuring the safety maintenance and stocking of the lab). There are also many roles outside the team that are vital for its success (<https://hidden-ref.org/example-hidden-roles>). The lab will meet. Once a week, once a month, maybe. Generally this will comprise researchers presenting to others on their research, and getting feedback (and everyone will moan about how no-one is keeping things clean and we’ve run out of Brain-Heart Infusion for growing bacteria). The key words are “their research”. The culture is that individuals own their own bits of research. Sure there are 10 names on the paper, but someone knows **exactly** who has done what. Google “academic incentive system” or “PhD assessment criteria” to find out why.

## How Scrum works

In Scrum, one of the popular Agile frameworks, there are three team roles: product owner (who is the authority on what's important the software do), developer (who writes code) and scrum master (who prevents the prior two from attacking each other). I’ve never worked in a “true” Scrum team, but I understand one aspiration is for a shared sense of ownership. However, Scrum is described to us as a good way of making software - academic research groups just seem to operate as I’ve described above.

## Why Agile won't work in academic research

I’ve previously talked about the experiences of [doing an Agile-like project for the first time](/blog/2020-09-03-agile). With a few more research software projects under my belt, I can bring together some generalisations about how research software engineering disrupts the traditional organisation of a research group. I’ve realised that Agile is not generally going to work for academic research software. It’s not just because of funding and how universities are structured, but because of the first Agile principle:

> “Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.”

**It’s just not.** We don’t generally have customers or products; we have collaborators, outputs and consumers of these. The outputs are not generally purely software - things like papers, data sets, talks, trained students, and patents remain rightly a high priority. And this is why if we’re going to mash up Agile and academia I think it’s useful to think in terms of these roles:

|Role|Activites|Core Skills|
|--- |--- |--- |
|Principal Investigator|Is ultimately responsible for the project. Sets the research and software vision. Is the authority on the research domain.|Leadership. Research domain expertise.|
|Co-investigator|Influences the research and software vision.|Leadership. Research domain expertise, perhaps adjacent to that of the Principal Investigator.|
|External Collaborator|Influences the research and software vision to meet their organisation’s needs.|Research domain expertise. Knowledge of external organisation’s needs.|
|Researcher User|Influences the research and software vision. Executes the research vision.|Research domain expertise. Practical research skills.|
|Research Software Engineer|Writes code and documentation. Influences the research and software vision. Is an authority on software engineering.|Software engineering expertise (**including version control**).|
|Research Developer|Writes code and documentation. Influences the research and software vision.|Software engineering expertise (**including version control**).|

<hr/>

One of the things I’m doing here is to draw a boundary around a project that goes beyond the traditional silo of a research group - co-investigators and RSEs from a central pool will be engaged for a particular project, not part of the research group, not going to it’s Christmas lunch. I’ve not tried to map to traditional roles too much - the idea is if you do the activities and have the skills, for the purposes of this I define you as the thing on the left. You may be more than one. You probably are. A big difference with Scrum is potentially everyone in the team is both a user and a developer of the software.

## Why we need something else

A PI can (probably does) have 1:1’s with their team, providing them with feedback and direction. The cadence of these might vary wildly from daily to six-monthly. In my experience, students and research associates who have regular access to their boss for guidance seem to be happier and more successful.

However, I suggest that in a software project this style of leadership both places unfair demands on the PI and everyone else (but of course, still talk to your team 1:1!). If there’s 10 people in a lab, each of them can hang on to their own vision of what they’re doing and get the PI’s advice once a month, say. If they pivot pretty hard in-between, that’s fine, as long as they're doing good research. In a software engineering team, there needs to be a shared idea of what we’re all doing. If we have a situation where the PI knows what every individual is supposed to be working towards, and everyone knows what they're individually doing in detail, it creates a problem because in a research software project *everyone* needs to know what *everyone* is doing. The PI can’t keep every detail of everyone’s work in their brain, no matter how massive it is. What’s more, the PI isn’t the only one who’s going to use the software, so they either speak for (or ignore, because they can’t also be Business Analysts) other users.

## What we should do

So rather than trying to split a big software project into 10 small research projects, and manage each of these 1:1, we should do something different. We should meet as a team regularly (every one or two weeks) and have a system to track what our vision is, how this breaks down into tasks and what everyone’s doing. Together, we tick them off, decide we’re not doing them. Swap them around. The PI remains the final word on everything.

## Why this is hard

Does doing this sound obvious? Does it sound easy? It’s ruddy not. Many researchers, rightly, cherish their independence and don’t want a list of tasks. They don’t want to be “micromanaged”. They’re taught from day one to own their bit of research, and extend this to software. PIs are used to making shared decisions with an individual on how they spend their time without consulting anyone else. 

This independence and autonomy enables some of the creativity from which innovative research springs.

Over the course of a project, a year, this can result in fragmented, inconsistent, non-functioning software. 

A bit of this is OK, because it’s research. We can work on a repository for six months and bin it because a new opportunity arises, or we come up with a better idea (now that sounds pretty Agile). But often we’re working to fixed budgets and the thing I’m thinking of before we even start is what happens after the money runs out and the lab (and others) are still reliant on using the software. I have projects where bits of code are impossible to maintain without contacting the person who wrote them - and I see that as my failure because I haven’t been able to convince people to work well together.

Maybe we can separate the research from the software and manage the two separately? Let’s try...

<img src="/assets/images/research-software-venn.png" alt="Venn diagram showing research and software activities" style="display: block; margin-left: auto; margin-right: auto;  width: 50%;" />

This really depends on the project and how big the team is, and the diagram is not clear cut or comprehensive. The point is that research software being developed as part of a project is not generally something that sits alongside research, like a microscope, that is fixed by a 3rd party when it breaks and thrown away when it *really* breaks. 

## How we might change

So at the end of all this, what do I suggest? Everyone needs to give up a little autonomy and independence to work as a team around a shared goal. PIs need to, at least, log their decisions, instructions and agreements so everyone knows what’s going. Better yet also discuss and agree these with the whole team, rather than, or as well as 1:1. People writing code need to be prepared to break down what they’re working on and share these tasks with the team, whilst being confident enough that they will be recognised for their efforts and that their work will be reviewed constructively. 

How do we get to this? Further blog posts will be required, but it’s a mix of technical processes, using a site like GitHub, and building individual skills and confidence.

Of course, you could just put an RSE in charge, but you might end up with something that is very fast, well documented and reliable, but does nothing of any research value.