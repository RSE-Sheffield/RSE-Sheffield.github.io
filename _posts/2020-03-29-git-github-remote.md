---
layout: post
title: Remote working with git and GitHub
author: Robert (Bob) Turner
slug: 2020-03-29-git-github-remote
date: 2020-03-29 12:00:00 UTC
tags: support
category:
link:
description:
type: text
---

As software engineers, we were lucky to have a running start at shifting to remote working practices as part of our institutional response to COVID-19. We have very little physical infrastructure in the team and can access most of what we need to do through the internet, even each other through video calls, emails and text chat. We can rely on our I.T. Services to provide a virtual network (VPN) and virtual machines for hosted applications. However, there is one area where I feel like we've made our own luck - collaborating on developing software. A big part of our ethos is to identify good practices, put them into action and share them with others. So I'm going to talk a bit here about how we use [git](https://git-scm.com/) and [GitHub](https://github.com/) not just to track changes and contributions to code, but to manage projects. And, as it turns out, this is actually pretty easy if you have a little time to invest. The difficulty, for many of us, is finding that time, but that's kind of another story!

## **git** and **GitHub** - what's the difference?

**git** is software that you install locally to track changes to code on your machine, in a *repository* (this is all in a folder / directory). It can connect to a *remote* repository, sending or receiving changes. Many developers can collaborate and share via a single remote repository. This can be hosted on a 3rd party website such as **GitHub**. [GitLab](https://about.gitlab.com/) is an alternative - some say it's better. **GitHub** provides a web interface to your repository and a bunch of other features that interact with it and extend the functionality of **git**. It's worth making the point here that even if I'm not connecting to a remote repository, I always use **git** locally to control my code.

## Why is **git** so great?

Firstly, other version control systems are available - I'm really pushing version control in general here, and to me that's **git**. **git** let's you make something like a copy of your code (called a *branch*), make changes to it (you mess around until you're happy, then *commit* the changes). Branches can be merged - so a branch with a new feature can be merged into the main branch when the time is right. 

Contrast this with a somewhat analogous situation - having a single master copy of a document that everyone edits, like Microsoft Word's "track changes" feature, or Google Docs. (Note that **git** is actually not very good at working with binary files, like Word documents. Don't use it for that!) Sure, you can see what everyone's done, but as document gets more complicated everything gets more and more messy. And who's copy is the true master? I'm not saying don't use track changes or Google Docs. Or different versions of your code in version-named folders. These are great tools. For all but the smallest software projects, **git** is going to be better.

## So why do we need **GitHub** as well?

As soon as you start working together you need to know who's doing what on what branch. What are the priorities? Does that inspired change you want to make to the code actually make things better, as far as others are concerned? Let's go through the way we work with **GitHub** (there are other ways of doing this, they're all good).

### Issue

Go to **GitHub** and find a repository. There's an *issues* tab. This is used to describe a problem, a new feature or something that's not working with a *repository*. An issue can stem from an external user having a problem with your repository. Or an action from a developer meeting. Or a stakeholder / customer requesting a new feature. In a fairly recent development, *issues* can be put on a **kanban**-style project board, which divides tasks into to-do, work-in-progress and done, facilitating agile project management approaches. An issue is assigned (or self-assigned) to a software engineer who then works to resolve it.

### Branch

The engineer (developer, whatever) then makes a new *branch*. This enables them to edit the code to resolve the issue without changing the current "latest and greatest" code, and leaving a trail of comments (*commits*) explaining why they've made what changes. This *branch* is synchorised between the developer's computer and the *remote repository* on **GitHub**.

### Pull request

When the engineer thinks they've got the job done, they make a **pull request**. This might carry the comment "this resolves issue x". At this point they will (generally) request a review of their changes by another engineer (or the person paying for their time). A *pull request* can also be used to trigger automated testing using e.g. [Travis](https://travis-ci.org/), [GitHub Actions](https://github.com/features/actions) or [Appveyor](https://www.appveyor.com/). There may be some back and forth between the developer and the reviewer at this stage. Old grudges surface. If we're lucky, there's no violence. What I mean is, everyone must be excruciatingly polite and respectful at all times, or this doesn't work.

### Merge

Once a favorable review has been received (the reviewer clicks a button), the developer **merges** their *branch* into the main *branch* (by clicking a button) and the changes they have made are available to users of the software. The *branch* they've been working on can now be deleted (a button click). The issue is automatically marked as resolved and moved from "in progress" to "done" on the project board (if you're using one). Sick as.

## Convinced?

What I've described here is a complete system for managing changes to software, from the small to the large, in the context of a multi-disciplinary team that can be spread across the world (or a small area of South Yorkshire!).

Whilst **git** is perhaps always going to be the domain of the engineer, **GitHub**'s issue tracking and project boards can be engaged with by anyone with a web browser. No USB sticks. Everyone knows where to find the latest version.

If you've got a software project with multiple stakeholders (a professor and a student is enough), get on this!

## More resources

- [**git** tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
- [Getting deep into **git**](http://gitimmersion.com/)
- [Get going with **GitHub**](https://guides.github.com/activities/hello-world/)

*If you want some help getting going (and you're a University of Sheffield researcher), consider signing up for one of our [online code clinics](/support/code-clinic).*