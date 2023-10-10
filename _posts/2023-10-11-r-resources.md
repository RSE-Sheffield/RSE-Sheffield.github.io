---
layout: post
title: "R Resources"
author: Neil Shephard
slug: 2023-10-11-r-resources
date: 2023-10-11 12:00:00 UTC
tags: R
category:
link:
description:
social_image: /assets/images/r_hex_collage.png
type: text
excerpt_separator: <!--more-->
---


[R](https://www.r-project.org) is a statistical programming language and one of the most popular languages for data
analysis, statistics and plotting in academia and industry. Learning a new language can be daunting, particularly if you
have no experience of scripting and are used to Graphical User Interfaces (GUIs) where you point and click to perform
your statistical analysis.

Fear not though, there are lot of resources and very friendly, enthusiastic and helpful R users out there who can help
you on your journey learning [R](https://www.r-project.org). This post details some of them, and I'd [welcome
additions](mailto:n.shephard@sheffield.ac.uk).

<!--more-->

Most of these resources are links to websites that are free and openly available. Where books are linked they are very
often freely available on-line, but there will also often be the possibility of purchasing a hard copy, which you may
want to consider doing if you find the resource useful to help support the authors.

## Organisations

R has a number of bodies, organisations and companies associated with it.

+ [The R Foundation](https://www.r-project.org/foundation/) a not for profit organisation working in the public interest.
+ [The R Consortium](https://www.r-consortium.org/) a group organized under an open source governance and foundation
  model to support the worldwide community of users.
+ [rOpenSci](https://ropensci.org/) open data, software and reproducibility.

## Software

[R](https://www.r-project.org) is software and will need installing on your computer. Because it is Free Open Source
Softrware (FOSS) you can download and install it on your computer for free. You will have to install it to use it and
the isntr

### IDEs

Integrated Development Environments (IDE) are software that help you write code faster and more consistently courtesy of
various features such as syntax highlighting, automatic bracket and quote pairing, automatic indentation and a suite of
functions for performing common tasks such as version controlling files or rendering documents.

The most popular IDE for R is [RStudio Desktop](https://posit.co/download/rstudio-desktop/) which has excellent support
for R, RMarkdown/Quarto and basic Git support. If you are new to version control with Git you may want to consider using
[GitKraken](https://www.gitkraken.com/) which provides an intuitive point and click interface for version controlling
your files and working with GitHub/GitLab.

My personal preference is to use [Emacs](https://www.gnu.org/software/emacs/) and the package [Emacs Speaks
Statistics (ESS)](https://ess.r-project.org/). This is a robust solution (ESS) has been around for decades and you get
the convenience of using Emacs and its many packages such as the amazing [Magit](https://magit.vc/) for carrying out all
Git related tasks. It has a steeper learning curve than RStudio but in my opinion is completely worth the effort.

## Books

If you're using R the chances are you want to perform some sort of Statistical Analysis on your data. This often
involves cleaning data that has been received, writing code to summarise, tabulate and plot your data, often in a
literate manner (which means reports are open and can be reproduced easily). If you read nothing else to get you started
using R for this work then you should read [R for Data Science](https://r4ds.had.co.nz/) by Hadley Wickham and Garrett
Grolemund. This is an excellent book that is available for free online.

+ [teacheR - Teach Yourself or Others R](https://teacher.arawles.co.uk/index.html) by Adam Rawles
+ [Cookbook for R](http://www.cookbook-r.com/) by Winston Chang is a useful reference for many common tasks.

### Quarto/RMarkdown

R has its own Markdown language for writing literate documents and a comprehensive resources covering all aspects is [R
Markdown: The Definitive Guide](https://bookdown.org/yihui/rmarkdown/) by Yihui Xie, J.J. Allaire and Garret
Grolemund. By writing your work in R Markdown you are performing [literate
programming](https://en.wikipedia.org/wiki/Literate_programming) and it means your report can updated automatically if
the underlying data changes. Output to HTML, PDF, LibreOffice, Microsoft Office and many other formats. The underlying
source can be version controlled using Git so that it is documented, backed up (e.g. on GitHub or GitLab) and it is easy
to collaborate with colleagues.

More recently [Posit (nee RStudio)](https://www.posit.com) have developed [Quarto](https://quarto.org) the next
iteration of RMarkdown. It supports more document types (e.g. blogs and RevealJS slides) and has excellent
[documentation](https://quarto.org/docs/guide/) and a growing number of
[extensions](https://quarto.org/docs/extensions/). If you are just starting out I would recommend using Quarto over
RMarkdown.

### Tidyverse

You will hear a lot about the [Tidyverse](https://www.tidyverse.org/) which _is an opinionated collection of R packages
designed for data science_. They are well worth learning as they make writing code considerably easier than with the
base R packages. You won't need all of the packages immediately but key ones to learn are

+ [dplyr](https://dplyr.tidyverse.org/) (or
+ [tidyr](https://tidyr.tidyverse.org/) for tidying your data.
+ [forcats](https://forcats.tidyverse.org/) for working with categorical variables.
+ [lubridate](https://lubridate.tidyverse.org/) for working with date variables.
+ [stringr](https://stringr.tidyverse.org/) for working with string variables.

If you've large datasets the [dtplyr](https://dtplyr.tidyverse.org/) which uses the
 [data.table](http://r-datatable.com/) package in the background but with `dplyr` code. `data.table` is considerably
 faster than `dplyr` for many operations. This is particularly noticeable when you have large datasets.

### Statistics

There is a wealth of resources out there for learning and using R for different topics. The following is that which I'm
aware of, if there is an omission please [open an issue on my
blog](https://github.com/ns-rse.github.io/issues/new?assignees=ns-rse&labels=R&projects=&template=R_resources.md&title=)

+ [Regression Modeling Strategies](https://hbiostat.org/rmsc/) by Frank E. Harrell, Jr.
+ [An Introduction to Statistical Learning with Applications in R/Python](https://www.statlearning.com/) an excellent
  book on modern "machine learning" techniques.
+ [Tidy Modeling with R](https://www.tmwr.org/) by Max Kuhn and Julia Silge
+ [Applied Predictive Modeling](http://appliedpredictivemodeling.com/) by Max Kuhn and Kjell Johnson (site to accompany
  physical book)
+ [Hands-On Machine Learning with R](https://bradleyboehmke.github.io/HOML/) by Bradley Boehmke and Brandon Greenwell
+ [Interpretable Machine Learning](https://christophm.github.io/interpretable-ml-book/) by Christoph Molnar
+ [The Hitchikers Guide to Responsible Machine Learning](https://betaandbit.github.io/RML/) by Przemsylaw Biecek, Anna
  Kozak and Aleksander Zawada
+ [Introduction to Data Science](https://rafalab.dfci.harvard.edu/dsbook-part-1/) and [Advanced Data
  Science](https://rafalab.dfci.harvard.edu/dsbook-part-2/) by Rafael A. Irizarry
+ [Telling Stories with Data With Applications in R](https://tellingstorieswithdata.com/) by Rohan Alexander
+ [Introduction to Modern Statistics (1st Ed)](https://openintro-ims.netlify.app/)
+ [The Epidemiologist R Handbook](https://epirhandbook.com/en/) R for applied epidemiology and public health
+ [R for Health Data Science](https://argoshare.is.ed.ac.uk/healthyr_book/) by Ewen Harrison and Riinu Pius
+ [Forecasting: Principles and Practice (3rd ed)](https://otexts.com/fpp3/)

#### Bayesian Statistics

There are some excellent resources for learning Bayesian Analyses with R. Perhaps the most comprehensive and in-depth is
[Statistical Rethinking](https://xcelab.net/rm/statistical-rethinking/) by Richard McElreath. He runs regular free
courses teaching the material in the book ([Statistical Rethinking
2023](https://www.youtube.com/playlist?list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus)) and the book content has been
translated to other R frameworks and Python. Another very good book is [Bayes Rules! An Introduction to Applied Bayesian
Modeling](https://www.bayesrulesbook.com/). These are both covered in the [Bayesian Statistics -
Syllabus](https://bayesf22.classes.andrewheiss.com/syllabus.html) course by Andrew Heiss.

+ [Statistical Rethinking](https://xcelab.net/rm/statistical-rethinking/) by Richard McElreath
  + [2023 lectures](https://www.youtube.com/playlist?list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus) and [course material](https://github.com/rmcelreath/stat_rethinking_2023)
  + [Statistical rethinking with brms, ggplot2, and the tidyverse: Second
    edition](https://bookdown.org/content/70a06054-8138-4d90-aaa0-895f57aab1b4/)
+ [Bayes Rules! An Introduction to Applied Bayesian Modeling](https://www.bayesrulesbook.com/) by Alicia A. Johnson,
  Miles Q. Ott and Mine Dogucu
+ [Gaussian Processes for Machine Learning](https://gaussianprocess.org/gpml/) by Carl Edward Rasmussen and Christopher
  K. I. William

### Plotting

R has excellent support for producing graphs, figures and data visualisations. There is the base graphics that have been
around since the beginning, but more recently the [ggplot2](https://ggplot2-book.org/index.html) framework introduced by
Hadley Wickham which implements Leland Wilkinson's [Grammar of
Graphics](https://link.springer.com/book/10.1007/0-387-28695-0) has been very popular.

+ [ggplot2: Elegant Graphics for Data Analysis (3e)](https://ggplot2-book.org/index.html) by Hadley Wickham
+ [The R Graph Gallery – Help and inspiration for R charts](https://r-graph-gallery.com/index.html)
+ [Data visualization with R and ggplot2 | the R Graph Gallery](https://r-graph-gallery.com/ggplot2-package.html)
+ [ggplot2tor](https://ggplot2tor.com/)

### Git Book

It is good practice to version control your code and literate documents as you develop them. This can be achieved using
the version control system [Git](https://git.scm). Get yourself an account on [GitHub](https://github.com) and/or
[GitLab](https://gitlab.com) and settle down to read Jenny Bryans excellent [Happy Git and GitHub for the
useR](https://happygitwithr.com).

### Advanced Topics

There is a lot more to R than just Statistical analysis and one day you may want to investigate these in greater
detail. The links below are to more advanced topics such as writing and maintaining packages or specific tasks such as
text mining.

+ [R Packages](http://r-pkgs.had.co.nz/) by Hadley Wickham and Jenny Bryan
+ [Advanced R](http://adv-r.had.co.nz/) by Hadley Wickham
+ [Advanced Statistical Computing](https://bookdown.org/rdpeng/advstatcomp/) by Roger D. Peng
+ [Mastering Shiny](https://mastering-shiny.org/) by Hadley Wickham
+ [Outstanding User Interfaces with Shiny](https://unleash-shiny.rinterface.com/index.html) by Kenton Russel
+ [Reproducible Analytical Pipelines](https://rap4mads.eu/) by Bruno Rodrigues
+ [Text Mining with R](https://www.tidytextmining.com/) by Julia Silge and David Robinson

#### Git Version Control

It is good practice to version control the code you write, it provides an electronic paper trail of how your code has
evolved over time and allows you to keep track not just of the code itself but why it has changed or been written.

These days the most popular version control system is [Git](https://git.scm) and projects are often hosted/backed up on
popular "forges" such as [GitHub](https://github.com) or [GitLab](https://gitlab.com). Sign up with an academic email
address (`@<institute>.ac.uk` or `@<institute>.edu`) and you will have a few extra benefits.

Learning Git is a whole, vast, topic in and of itself, but to get started with R and Git see the recommendation
[above](#git-book). If you are a student or researcher at [The University of Sheffield](https://sheffield.ac.uk) you may
want to consider taking the Research Software Engineering (RSE) Teams popular [Git, GitHub and GitKraken : Zero to
Hero](https://srse-git-github-zero2hero.netlify.app/) course which runs regularly throughout the year. Sign up to their
[mailing list](https://groups.google.com/a/sheffield.ac.uk/g/RSE-group) and you'll be notified of when the course
runs. Alternatively [email them](mailto:rse@sheffield.ac.uk) to find out when the next course is scheduled to run.

## CRAN

The [Comprehensive R Archive Network (CRAN)](https://cran.r-project.org/) is the primary place to look for R
[packages](https://cran.r-project.org/web/packages/index.html). It also contains a number of subject specific [Task
Views](https://cran.r-project.org/) which are pages that summarise the packages and resources associated with a
particular topic. There are also links to the official [manuals](https://cran.r-project.org/manuals.html),
[FAQs](https://cran.r-project.org/faqs.html) and user [contributed
documentation](https://cran.r-project.org/other-docs.html).

## The R Journal

The [R Journal](https://journal.r-project.org/) is the peer-reviewed, open-access scientific journal published by the R
Foundation. It includes articles on packages, reviews and proposals, comparisons and benchmarking, applications of
existing techniques and special issue articles to accompany conferences or particular topics.

## Cheatsheats

Cheatsheets come in handy as a reference to packages and commands. A central repository of cheatsheets is maintained by
[Posit](https://posit.co/resources/cheatsheets/).

## Community

The R community is incredibly supportive, welcoming and helpful. There are over [600 User
Groups](https://www.r-consortium.org/blog/2019/09/09/r-community-explorer-r-user-groups) around the world where R users
meet up and share their experience and knowledge and support each other. Sheffield has its own [SheffieldR User
Group](https://sheffieldr.github.io).

### R Ladies

[R-Ladies](https://rladies.org/) is a worldwide organisation whose mission is to promote gender diversity in the R
Community. Groups around the world have their own meetups and activities.

### R4DS

There is also the [R4DS Online Learning Commuity](https://rfordatasci.com/) which helps you work through the _R for Data
Science_ book. They have an active [Slack channel](https://r4ds.io/join) for coordinating the courses and run [Tidy
Tuesday](https://www.tidytuesday.com/), a weekly podcast and community activity which is a great way of learning now
tasks in R.

### NHS R Community

The [NHS R Community](https://nhsrcommunity.com/) is focused on applications of R in the NHS Research community. They
have blogs, a Slack channel and conferences.

## Blogs

The [R Bloggers](https://www.r-bloggers.com/) site aggregates blogs from people who write about R and is a brilliant
resource. A few highlights are noted as well but R Bloggers is probably the best resource. If you want to subscribe to
these most have [RSS feeds](https://en.wikipedia.org/wiki/RSS)

+ [Tidyverse Blog](https://www.tidyverse.org/blog/)
+ [Notes from a data witch](https://blog.djnavarro.net/) a blog by Danielle Navarro

## Mastodon

Find posts and resources on Mastodon by searching for the `#rstats` hashtag (you will also find this is still widely
used on the site many migrated to Mastodon from). Over time you will find many enthusiastic users and developers who
share there knowledge and experience freely.

## Podcasts

+ [The R-Podcast](https://r-podcast.org/)
+ [Shiny Developer Series](https://shinydevseries.com/)
