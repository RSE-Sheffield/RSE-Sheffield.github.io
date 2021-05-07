---
layout: post
slug: 2021-05-07-git-useful-resources
title: Git useful resources
author: Fariba Yousefi
date: 2021-05-07 09:00:00 UTC
category:
tags: support
type: text
excerpt_separator: <!--more-->
---
In this blog post we will introduce Git and talk about some terminologies related to Git and version control in general. We will also introduce some resources that might be helpful to read or watch.

If you are new to the Git world, you might hear some words that sound very similar and sometimes confusing. Below are a few definitions that might be useful;

## What is the difference between **Git** and **GitHub**?
Git is a version control protocol and a tool that is effectively the reference implementation for interacting with repositories in that format. 
<!-- Git is a version control system that you can use to manage your source code history. -->
Git currently is the most popular distributed version control system. It allows you to have your own local repositories. You can work on your code without having access to the internet, for example, committing new versions, viewing logs and comparing versions. Git Graphical User Interfaces (**GitGUI**) such as GitHub Desktop, SourceTree, GitKraken are Git clients/tools. 

**GitHub**, **GitLab** and **Atlassian's BitBucket** are public hosting services for Git repositories with web interfaces and many common collaboration workflows for software projects depend on functionality provided by these services.
So they are not the same thing: Git is the tool, GitHub is the service for projects that use Git and it is built on top of Git. Git is installed locally while GitHub is hosted on a remote server e.g. in the cloud. 

**GitLab** is very similar to Github, however, it was initially designed with a built-in Continuous Integration (CI)/Continues Development (CD) tool. The Continuous Integration framework inside GitLab is ranked as one of the best tools out there, if not the best.

Previously, to use CI/CD with a Github repository would require a 3rd party tool such as Jenkins, however GitHub has now introduced its own built in CI/CD called **Github Actions**. Github Actions enable users to quickly automate tests (CI), and deploy (CD) code. If you are interested, very thorough explanation can be found [here](https://blog.codegiant.io/gitlab-vs-github-which-one-is-better-2020-d8ec7fb9542c).

Another distinction between GitHub and GitLab is that the software that runs on GitHub.com is not open source and it means that you can not have GitHub.com like services on your own infrastructure although GitHub enterprise offers a licence to deploy to your own servers, AWS, Azure or Google Cloud. However, GitLab is an open source project and you can install and run GitLab services on your own servers (only community edition is free). 

**GitHub Pages** is a static hosting service that auto-generates and commits HTML using Jekyll. Jekyll is a static site generator and GitHub Pages has built-in support for Jekyll. GitHub Pages can also directly take HTML, CSS and JavaScript files from a repositories on GitHub. More information can be found [here](https://docs.github.com/en/github/working-with-github-pages/about-github-pages#about-github-pages). 


## **Related RSE blog posts**
* [Remote working with git and GitHub](https://rse.shef.ac.uk/blog/2020-03-29-git-github-remote/)
* [Git: rebase vs merge](https://rse.shef.ac.uk/blog/2020-06-23-git-rebase-vs-merge/)

## **Web-based guides**
This website is a simple guide for getting started with Git and it has translations in a few other languages:
* [Git - the simple guide](https://rogerdudler.github.io/git-guide/)

This website is also introductory, however it also has screenshots to ease understanding:
* [Hello world](https://guides.github.com/activities/hello-world/)

This website is from the the GitHub training team, it provides an introduction to both Git and Github Pages:
* [The GitHub training team](https://lab.github.com/githubtraining/introduction-to-github)

This website covers many common git topics which it categorises by experience level, from beginners to advanced:
* [Git ready](http://gitready.com/)

This website explores how Git commands affect the structure of a repository. You can try commands from your browser:
* [Resources to learn Git](http://try.github.io/)

This website is for Advanced beginners with Git. You should know how to create a repository, add and commit files to it, and you should probably have some idea of why you might want to use a branch:
* [Git shouldn't be so hard to learn](http://think-like-a-git.net/)

This website is specifically designed for Computer Scientists and is using terms that they are familiar with:
* [Git for computer scientists](https://eagain.net/articles/git-for-computer-scientists/)

## **Free books**
This book has 522 pages and it has everything you need to know about Git:
* [Pro Git book](http://git-scm.com/book/en/v2)

This book is 31 pages and it has a bottom up approach rather than looking at it only in terms of high-level commands:
* [Git from the bottom up](http://ftp.newartisans.com/pub/git.from.bottom.up.pdf)

This book is 44 pages and provides many Git command examples for common tasks, rather than focusing on the technical details of git commands:
* [Git magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/)

## **Zines**
This zine contains a list of issues people commonly encounter when using Git along with concise ways of addressing them:
* [Oh shit, git](https://jvns.ca/blog/2018/10/27/new-zine--oh-shit--git-/)

## **Videos**
This video is an introduction to Git for beginners. You will learn Git and all the Git commands to create repositories on your local machine & GitHub, commit changes, push & pull files. Also you will get your hands on with some advanced operations in Git like branching, merging, rebasing. It is a long video at 1 hour and 44 minutes:
* [Git tutorial](https://www.youtube.com/watch?v=xuB1Id2Wxak&ab_channel=edureka%21)

This video is Git & GitHub crash course for beginners and is about 30 minutes:
* [Git & GitHub crash course for beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc&ab_channel=TraversyMedia)

This is a very long video and it is a complete Git and GitHub Tutorial for beginners:
* [Git and GitHub tutorial for beginners - 11 hours](https://www.youtube.com/watch?v=3FKrszHcIsA&ab_channel=BogdanStashchuk)

This video is from the creator of the distributed version control system Git: 
* [Tech Talk: Linus Torvalds on git](https://www.youtube.com/watch?v=4XpnKHJAok8&ab_channel=Google)

This video is for more advanced users. They introduce the obscure commands that will reveal a sort of internal API that is there for you to use:
* [Git from the bits up](https://www.youtube.com/watch?v=MYP56QJpDr4&ab_channel=InfoQ)

This video is advanced Git and covers graphs, hashes and compression:
* [Advanced Git: graphs, hashes, and compression](https://www.youtube.com/watch?v=ig5E8CcdM9g&ab_channel=InfoQ)

## **Cheat sheets**
This cheat sheet contains common tasks:
* [Git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf)
