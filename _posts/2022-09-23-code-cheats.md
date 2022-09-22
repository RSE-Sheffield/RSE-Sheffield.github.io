---
layout: post
title: "Five secret research code cheats"
author: Bob Turner
slug: code-cheats
date: 2022-09-22 12:00:00 UTC
tags: git github gitkraken
category:
link:
description:
social_image: assets/images/jose-aljovin-l6dnswlRZyE-unsplash.jpg
type: text
excerpt_separator: <!--more-->
---

Research Software Engineers are often not much better at actually writing code than any other researcher, we just know a lot of cheats, shortcuts and ways to automate things. I'm going to risk the wrath of my fellow engineers and share some of these here. They will mean you can work a bit faster, but mostly will stop you throwing code away when you come back to it after a few months and can't figure out what the flip it's supposed to do.

<!--more-->

## Auto-format your code

Often a programming language gives you a choice of how to format your code. Do you use single or double quotes? Spread long lines over several lines using a separator? Where you you split these? Empty line before a function definition? **Consistently formatted code is easier to read and will save you time when you come back to it.** A auto-formatting tool will take care of this. In Python, where formatting choices abound, [black](https://github.com/psf/black) is this tool. I've not used it but [formatR](https://cran.r-project.org/web/packages/formatR/index.html) seems to be a close R equivalent.

## Run a code checker

People tell me they write "bad code". I think they generally underestimate their abilities, but this is a little beside the point. There are good and bad practises when coding - a function with 27 input variables named `a`, `b`, `default`, `sAm`, `a2`, etc. is not likely to be good practise in any language. You probably know this. But there are hundreds of bad practises and no-one can even remember them all! Probably. So we have tools to automatically check code for these. [pylint](https://pypi.org/project/pylint/) is a good choice in Python, and R has [lintR](https://github.com/r-lib/lintr). **Use these and your code will be easier to read an maintain.** You may even prevent some bugs!

## Make a regression test

Software tests can be extremely unpalatable to researchers. I can see why - you have to select and learn a "test framework", then maybe end up writing more test code than actual code and start having to worry about "coverage". However, it's not all or nothing. A single regression test can make a huge difference. This just tests that for a given input, you get a given output. So if you change some bit of code that you haven't looked at for 6 months to try and make things run faster, this test will tell you if your results have changed. I bet you're doing this anyway without automation and without being 100% sure what the results were last time. Aren't you? Automating this with [pytest](https://docs.pytest.org/en/7.1.x/) or [testthat](https://testthat.r-lib.org/) (not that I've used the latter) means that **the anxiety about code producing the wrong results (which you might be presenting at a conference next week) goes away**. You may then find you see the value of unit tests which will tell you *where* things have gone wrong.

## Do easy version control

`git` is intimidating and uses wild terminology like "fetch" and "pull" which do different things. However, it is the best way to keep track of which version of your code is current, which version you shared with your collaborator, which version produced the results in your poster. It doesn't have to be used in a complicated way with multiple contributors and "branches" and "forks" and "releases" and such. **All that's really needed is to make the folder with your code in a repository and use "commit" regularly to log changes with little messages.** You can then go back to any of these points. If the command line isn't your jam [VSCode](https://code.visualstudio.com/) and [RStudio](https://www.rstudio.com/) have nice git integration, and [GitKraken](https://www.gitkraken.com/) is a good stand alone tool. 

## Use continuous integration

If you're in a position to have your code backed up to a site like [GitHub](https://github.com/) or [Gitlab](https://about.gitlab.com/), **you can automate running checks and tests on your code every time you upload changes**. This is "Continuous Integration" and is set up on GitHub by adding a small file to your repository that specifies what checks to run. [This example](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python) is probably a bit more complex than it needs to be for a Python project, but I think it's still fairly easy to see what's going on.

<div style="width: 50%; margin:0 auto;"><img src="/assets/images/jose-aljovin-l6dnswlRZyE-unsplash.jpg" alt="Coder doing a card trick"/><p>Photo by
jose aljovin on Unsplash</p></div>