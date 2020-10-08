---
layout: post
title: "From Researcher to Developer"
author: David Wilby
slug: 2020-10-08-from-researcher-to-developer
date: 2020-10-08 12:00:00 UTC
tags:
category:
link:
description:
social_image: /assets/images/best-practice-blog/stock_mesabymakers_unsplash.jpg
type: text
excerpt_separator: <!--more-->
---

Depending on your definition, many researchers (post-graduate students, post-docs, fellows, academics, technicians, etc) are writing software to do their research. But many, I feel, aren't aware that they are - or of how much support there is to help them to write code more easily, write less code and be more effective. In this blog, I'll discuss my own experiences of writing code in my own research, as well as using my current perspective as a Research Software Engineer to shed some light on research software development.

<!--more-->

### Self-teaching (for better or worse)
The last time I had any formal computing education was in my A-levels, the most useful aspect of which was not learning about pushing and pulling from stacks but the hands on coding experience, albeit in the [`Pascal`](https://en.wikipedia.org/wiki/Pascal_(programming_language)) educational programming language which I haven't heard of since. Notwithstanding was a poorly taught undergraduate course in [`C`](https://en.wikipedia.org/wiki/C_(programming_language)), which I won't rant about here..

The bulk of my experience in writing code came during my Physics/Biology PhD when I taught myself to use [MATLAB](https://www.mathworks.com/products/matlab.html), a relatively friendly environment in which to start writing your own analyses in research and one which many, many researchers use throughout their careers[^1].

Later on in my PhD, via various excursions through the weirdo [`LabView`](https://www.ni.com/en-gb/shop/labview.html) and others, I embarked on a then mildly terrifying journey into the world of the unix terminal. An experience I suspect I'm not alone in having been intimidated by as a researcher, but an ultimately rewarding one which allowed me to exploit a new area of research in my field using the [High Performance Computing](https://www.sheffield.ac.uk/it-services/research/hpc) (HPC) facilities at my university.

### Developing alongside researching
![Photo by ThisisEngineering RAEng on Unsplash](/assets/images/thisisengineering-raeng-64YrPKiguAE-unsplash.jpg){: .img-fluid width="500px" .float-right}

Whilst I made good use of coding in a variety of languages and environments throughout my research career in a PhD and 2 postdoc positions, it was only when I started a role as a [research software engineer](/) (RSE) that I had the mental space, support and opportunity to realise what it meant to develop code in a professional sense. What I mean by this is using [best practice](/blog/2019-best-practice) (*blatant blog plug*) in developing your research code/software.

Many code-writing researchers are able to get this nailed alongside their research, especially, I posit, those whose research is heavily computational (ie not spending large amounts of time in the lab). However, for the fledgling programmer it can be intimidating to try to code with new technologies and use best practice as well as getting results in the first place. But a bit of focused learning can pay dividends.

<i>Photo by <a href="https://unsplash.com/@thisisengineering?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">ThisisEngineering RAEng</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></i>

### How to code like a developer?
* **Stop reinventing the wheel**
  * Look for existing projects that you can incorporate to add functionality, there's nearly always something out there that can do the job for you.
* **Write modular code**
  * So often when looking back at my own code, or a colleague's, I am confonted by a 10,000 line monolith (one of which in a previous role took me nearly 3 months to debug)
  * Try to keep your code modular, separate code in to files with related, reusable functions
* **Avoid repeated blocks of code**
  * As soon as a block of code occurs twice in your software, write a function which you can reuse
  * This keeps your code organised, and means you'll only have to change one thing at a time
* **Code like everyone is watching**
  * Write your code imagining that another human will need to use it (even if it's just for you)
  * This will get you in to a good habit when you write your world-beating application and you need others!
  * Keep it tidy, with explanatory variable names and helpful comments, many languages have style guides which are a good way to go
  * Keep a README file with your code, explaining how to run it, you'll thank yourself next time you open it up, believe me: nobody ever remembers their own workflow.
  * These practices will also make it a lot easier to submit your code alongside a publication.
* **Conform to the style**
  * Many languages have an acceptable style guide, referring to common practice for variable names, commenting, spacing and layout which helps make everyone's code readable to one another (and to yourself)
  * Many coding environments have the ability to automatically format your code to conform to the style guide.
* **Use virtual environments**
  * These allow you to separate out the versions of particular languages or packages from one another on a per project basis.
  * For example [`conda`](https://docs.conda.io/en/latest/), [`venv`](https://docs.python.org/3/tutorial/venv.html) for `python` or [`Renv`](https://rstudio.github.io/renv/articles/renv.html) for `R` among others.
* **Use version control and collaborative tools**
  * [`git`](https://git-scm.com/) and [`github`](https://github.com)/[`gitlab`](https://about.gitlab.com/) are big, revolutionary topics that there is a lot of material out there for, everyone should use them.
* **Code everything**
  * Code the import of your data, your analysis, graphs, everything!
  * It will mean you can tweak a parameter and reproduce all of the materials for your project in an instant, without exporting your graphs and modifying them in a graphics program or whatever mad workflows I used to use
  * Do your exploratory thinking and prototyping in code as well!
* **Don't be intimidated**
  * You won't break your computer
  * Programmers are friendly!
  * It won't be too much of a learning curve!
* **Get support**
  * Last but by no means least, get support!
  * Now, more than ever, research software engineers and other researchers have the skills to help you! That's what we're here for!
  * If you don't want to talk to a person, there are many many online courses. For instance, The University of Sheffield subscribes to LinkedIn learning, giving you access to excellent video courses.


### Too many roles?
Of course, I'm not advocating that every researcher should have the skills of a professional software engineer alongside the existing role expectations of researcher, manager, accountant, public speaker, teacher, graphic designer *et al.*

This, dare I say it, is where the [Research Software Engineers](/) come in. If you're not sure how we can help you, get in touch!

The RSE team can:
* Write code for you,
* Mentor you or your team through learning a new skill or writing a particular piece of code,
* Provide training tailored to your requirements,
* Meet with you at a [code clinic](/support/code-clinic/) to discuss a single topic of interest or a single problem.

<br>
##### Footnotes
[^1]: Good research coding practice in MATLAB is a book all of its own, and not an easy one in comparison to other languages. However, my personal opinion is that MATLAB's other virtues make these worth discussing, especially due to the wide adoption of the language in research.
