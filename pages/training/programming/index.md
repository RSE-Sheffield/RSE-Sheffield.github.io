---
title: Researcher Programming Resources
layout: page
slug: index
type: text
permalink: /training/programming
---

*This is intended to be a living document and will be added to and corrected over time.*

A certain amount of technical ability is required as a modern researcher. From running simulations, running large
calculations, applying data transformation and analysis or even automating mundane tasks such as renaming and moving
data files, learning to program can really help improve your workflow and productivity.

This page is a compilation of resources and learning materials that can help with learning the skills researchers need.

Like anything technical, programming is full of terminology and jargon which can make it hard to get started. Sarah from
the [Lyndhurst STEM club](https://lyndhurststem.org/) found [this great
article](https://www.qualtrics.com/blog/glossary-of-coding-and-programming-terms/) which explains a lot of terminology
to help you get started.

A broad overview of many of the relevant topics is provided by the MIT Computer Sciences [Missing
Semester][mit-missing-semester] material (there is also a fork maintained by the [University of
Birmingham][birmingham-missing-semester]). Both of these resources cover a lot of ground that is relevant to Research
Software Engineering and either of them is worth working through.

* Do not remove this line (it will not be displayed)
{:toc}

## Learning to program, where to start?

Often the software you use to carry out your research will influence your language choice, but if you’re starting from
zero, Python is a great choice.

### Python

#### Why use Python?

* One of the easier languages to learn.
* Large ecosystem of libraries to help with most tasks including data analysis, data visualisation, machine
  learning/deep learning and building websites and web services.
* It’s used very widely in the community (including academia) which means there's a large amount of learning resources
  and examples.

#### Python Training resources

We’ve compiled a list of resources for learning Python from scratch.

* On-line interactive lessons
  * [Learn Python website](https://www.learnpython.org/) teaches Python concepts from the ground up along with code
    examples that you can run right from your browser.
* Books
  * [Automate the boring stuff](https://automatetheboringstuff.com/) teaches Python through a series of practical
    examples for automating your workflow. The book is available for free on-line.
* Code along youtube video courses
  * [Learn Python from freecodecamp.org](https://www.youtube.com/watch?v=rfscVS0vtbw)
  * [Programming with Mosh](https://www.youtube.com/watch?v=_uQrJ0TkZlc)
* Full on-line courses, paid-for but provides videos, code examples and labs
  * [Code Academy](https://www.codecademy.com/learn/learn-python-3)

#### Python editors and IDEs

Integrated Development Environments (IDEs) are text editors designed for writing code. They generally feature syntax
highlighting, offer code suggestions and code debugging, allowing you to pause your program and examine it when checking
for errors.

* [Visual studio code](https://code.visualstudio.com/) - Open source, available on all platforms
* [PyCharm](https://www.jetbrains.com/pycharm/) - Free for academia, available on all platforms

#### Data analysis and visualization

Python has many statistics libraries but the ones you will be using most is [pandas](https://pandas.pydata.org/), which
offers data structures and operations for manipulating numerical tables and time series, and [numpy](https://numpy.org/)
which is a library optimised for performing numerical operations on large matrices. The two aforementioned libraries are
used as the base part of many other scientific Python packages.

For data visualisation, the [seaborn](https://seaborn.pydata.org/) library provides a high-level interface over the
venerable [matplotlib](https://matplotlib.org/) library and makes it easier to plot good looking
graphs. [ggplot](http://ggplot.yhathq.com/) is another popular library that follows the principle of [Grammar of
Graphics](https://www.amazon.com/Grammar-Graphics-Statistics-Computing/dp/0387245448). An interesting library is
[bokeh](https://bokeh.org/) which is designed to generate integrative graphs that can be embedded in web pages.

There are Python IDEs with data science focus such as [Rodeo](https://rodeo.yhat.com/) and
[Spyder](https://www.spyder-ide.org/) that provide an integrated data table browser and visualisation window alongside
standard IDE functionalities.

#### Show your working with Notebooks

[Jupyter Notebooks](https://jupyter.org/) is a platform that allows you to interactively write and run code, show its
results and provide text annotations within a single document. The tool is great for exploratory coding or when you want
to demonstrate a linear scientific workflow.

Here’s a demonstration of a notebook which is used to illustrate working through a machine learning exercise:
[https://nbviewer.jupyter.org/github/jdwittenauer/ipython-notebooks/blob/master/notebooks/ml/ML-Exercise1.ipynb](https://nbviewer.jupyter.org/github/jdwittenauer/ipython-notebooks/blob/master/notebooks/ml/ML-Exercise1.ipynb)

### R

#### Why use R?

[R][r] is a statistical programming language for data analysis and visualisation that is widely used in the academia and
industry. Many new statistical methods are first developed and made available in [R][r] but it provides much more with
packages such as [Shiny][shiny] making it relatively easy to develop interactive dashboards.

R also forms the basis of the Bioinformatics software suite [Bioconductor][bioconductor].

#### R Learning resources

There are a lot of online resources available for learning R, as well as a plethora of books (see links below) for
self-directed learning on specific topics.

* [Data Science Learning Community][dslc] - tools, resources and book clubs for many of the books listed below.
* [Data Carpentries : Data Analysis and Visualisation in R for Ecologists](https://datacarpentry.org/R-ecology-lesson/)
* [A Gentle Introduction to Tidy Statistics In
  R](https://resources.rstudio.com/webinars/a-gentle-introduction-to-tidy-statistics-in-r)
* [Posit Recipes](https://posit.cloud/learn/recipes) - some tasty R code snippets.

#### R editors and IDEs

The most common Integrated Development Environment (IDE) for R is [RStudio][rstudio], produced by [Posit][posit]. It
incorporates project management, integrates with [RMarkdown][rmarkdown] and [Quarto][quarto] rendering and publishing
and integrates basic [Git][git] functionality for version control. Other IDEs support writing R code though.

* [R in Visual Studio Code](https://code.visualstudio.com/docs/languages/r)
* [Emacs](https://www.gnu.org/software/emacs/) and the [Emacs Speaks Statistics](https://ess.r-project.org/) package

#### R Books

There are many books written in [Bookdown][bookdown] on using R, a selection are listed below.

##### Data Science

* [R for Data Science (2e)](https://r4ds.hadley.nz/)

##### Graphics

* [ggplot2](https://ggplot2-book.org/index.html)
* [R Graphics Cookbook, 2nd edition](https://r-graphics.org/)

##### Statistics

* [An Introduction to Statistical Learning with Applications in R](https://www.statlearning.com/) (also available for
  Python)
* [Time Series Analysis and Forecasting with ADAM](https://openforecast.org/adam/index.html)
* [Modern Statistics with R](https://www.modernstatisticswithr.com/)
* [Tidy Modeling with R](https://www.tmwr.org/)
* [Applied Machine Learning for Tabular Data](https://aml4td.org/)
* [Bayes Rules! An Introduction to Applied Bayesian Modeling](https://www.bayesrulesbook.com/)
* [Statistical rethinking with brms, ggplot2, and the tidyverse: Second
  edition](https://bookdown.org/content/70a06054-8138-4d90-aaa0-895f57aab1b4/)
* [Hands-On Machine Learning with R](https://bradleyboehmke.github.io/HOML/)
* [Deep Learning and Scientific Computing with R
  torch](https://skeydan.github.io/Deep-Learning-and-Scientific-Computing-with-R-torch/)

##### Health Data

* [The Epidemiologist R Handbook : R for applied epidemiology and public health](https://epirhandbook.com/en/)
* [R Workflow for Reproducible Biomedical Research Using Quarto](http://hbiostat.org/rflow/)
* [R for Health Data Science](https://argoshare.is.ed.ac.uk/healthyr_book/)
* [Building reproducible analytical pipelines with R](https://raps-with-r.dev/)
* [Research Design in the Social Sciences](https://book.declaredesign.org/)

##### GIS

* [Geocomputation with R](https://geocompr.robinlovelace.net/)
* [A Crash Course in Geographic Information Systems (GIS) using
  R](https://bookdown.org/michael_bcalles/gis-crash-course-in-r/)
* [Introduction to urban accessibility](https://ipeagit.github.io/intro_access_book/)

### MATLAB

#### Reproducibility

On the RSE Sheffield blog: [A concise guide to reproducible MATLAB
projects](/blog/2022-05-05-concise-guide-to-reproducible-matlab/)

#### MATLAB Academy

Online, self-paced MATLAB training is available to all at TUoS via the [MATLAB
Academy](https://matlabacademy.mathworks.com/). There are courses on more specific topics such as image processing and
deep learning in addition to the fundamentals of MATLAB.

#### Best Practices in Toolbox Development

Comprehensive guidance on developing your own toolbox and the best way to do it:
<https://github.com/mathworks/toolboxdesign>

### LinkedIn Learning Courses

TUoS researchers have access to a host of excellent training courses via [LinkedIn
Learning](https://www.sheffield.ac.uk/nap/service/redirect/lilearning), covering an enormous base of different
technologies. A good example is the ['*code clinic*'
series](https://www.linkedin.com/learning/search?keywords=code%20clinic) (no relation to [RSE Code
Clinics](/support/code-clinic)) in which a similar set of problems are tackled in different languages, a good way to
transfer your knowledge of one language to another:

* [R](https://www.linkedin.com/learning/code-clinic-r-2)
* [Python](https://www.linkedin.com/learning/code-clinic-python-2)
* [C++](https://www.linkedin.com/learning/code-clinic-c-plus-plus-2)
* [Java](https://www.linkedin.com/learning/code-clinic-java-2)

However, there are great courses on almost any topic in research computing. Why not try one of these?

* [Docker for developers](https://www.linkedin.com/learning/docker-for-developers-2/practical-backend-with-compose)
* [Unit Testing and Test Driven Development in
  Python](https://www.linkedin.com/learning/unit-testing-and-test-driven-development-in-python)
* [Learning the R Tidyverse](https://www.linkedin.com/learning/learning-the-r-tidyverse)
* [Learning MATLAB](https://www.linkedin.com/learning/learning-matlab-2)
* [Learning Linux Command
  Line](https://www.linkedin.com/learning/learning-linux-command-line-2/learning-linux-command-line)

**Note**: You'll need to be on the [university VPN](https://www.sheffield.ac.uk/it-services/vpn) to get access.

---

## Best Practice in Writing Research Code

<a id="git"></a>

### Version control your code with **Git**

No matter what programming language you use, we always recommend using version control systems such as
[Git](https://git-scm.com/) in your project.

With version control, all changes made to your code are progressively tracked. This means you can always change or
delete code with the confidence that you can always revert the changes if necessary. It becomes absolutely essential
when collaboratively working on the same code. Additionally, any text file works well with version control systems
e.g. latex documents.

With Git, a folder/directory is converted into a `repository` that can track changes of all of its contained files and
subdirectories. The repository can then be uploaded and synchronized with on-line services such as [Github](github.com),
backing up your work and enabling you to access it from anywhere in the world. See our [remote working with
github](/blog/2020-03-29-git-github-remote/) guide for more details.

Needing to get help on a particular piece of your code? It's easy to share your on-line repository's access with helpers
e.g. [Code Clinic](/support/code-clinic/).

#### Getting and installing Git

Download and installation instructions for all platforms can be found at:

* [https://git-scm.com/downloads](https://git-scm.com/downloads)

#### Learning to use Git

Familiarity with the command-line interface is required as git is a command-line tool.

* [Git - the simple guide](https://rogerdudler.github.io/git-guide/), more of a reference than a full tutorial. It
  quickly goes through the commands used in basic git operations.
* [Git tutorial by Atlassian](https://www.atlassian.com/git/tutorials/tutorials/what-is-version-control), a more
  in-depth guide to git.
* [Git immersion](https://gitimmersion.com/index.html), demonstrates the use of git through code along examples and
  exercises.
* [Visualizing Git Concepts](https://onlywei.github.io/explain-git-with-d3/) - online simulator to help visualize how
  git works.
* [Introducing Version Control with Git](https://chryswoods.com/introducing_git/) - Chrys Woods (RSE @ Bristol Uni)
  walks through how to use git at the command line, including walkthrough videos and written instructions
* [Git for Collaboration](https://chryswoods.com/git_collaboration/) - Following on from his intro course above, Chrys
  takes you through using GitHub for collaborative research software development.

#### On-line Git repository hosting

The services below offer free hosting for personal repositories and some even offer free pro versions for academia.

* [Github](github.com)
  * [A quick introductory guide to using github.](https://guides.github.com/activities/hello-world/)
* [Gitlab](gitlab.com)
* [Bitbucket](bitbucket.org)

#### Git GUI tools

GUI tools can really help with routine Git operations and especially when trying to make sense of large repositories.

* [Gitkraken](https://www.gitkraken.com/) (Windows, Mac, Linux)
* [SourceTree](https://www.sourcetreeapp.com/) (Windows, Mac)

---

### Reproducible Code & Data Management

* The British Ecological Society has a number of excellent [*Guides to Better
  Science*](https://www.britishecologicalsociety.org/publications/guides-to/), including:
  * [Reproducible
    Code](https://www.britishecologicalsociety.org/wp-content/uploads/2019/06/BES-Guide-Reproducible-Code-2019.pdf)
    [PDF]
  * [Data
    Management](https://www.britishecologicalsociety.org/wp-content/uploads/2019/06/BES-Guide-Data-Management-2019.pdf)
    [PDF]

---

## Use HPC for large computing tasks

When running large simulations or doing analysis on large datasets, your tasks can take hours or even days to complete,
you may struggle to even load everything into memory or can’t fit the dataset or results onto your hard disk. If this
sounds like something you’re facing, it may be time to start having a look at using the HPC (High Performance Computing)
clusters provided through the University of Sheffield.

A HPC cluster essentially consists of a number of computers connected through a fast network. Each machine, or node,
normally has far more CPU cores and RAM than the average PC. The best way to take advantage of a HPC cluster is to split
your computation into small, independent tasks and distribute them to run concurrently across multiple CPU cores or
nodes.

### HPC clusters available through the University of Sheffield

Access to these clusters are open to all UoS researchers and academics and they’re free at the point-of-use.

* University of Sheffield hosted HPC
  * Single account provides access to all three clusters, contact
    [it-servicedesk@sheffield.ac.uk](mailto:it-servicedesk@sheffield.ac.uk) for access.
  * [ShARC](https://docs.hpc.shef.ac.uk/en/latest/sharc/index.html) (2024 CPU cores, 40 GPUs)
    * Suitable for multi-node MPI jobs
  * [Bessemer](https://docs.hpc.shef.ac.uk/en/latest/bessemer/index.html) (1040 CPU cores, 4 GPUs)
    * Newest system, came on-line in 2019
    * Suitable for running many independent jobs or single-node MPI jobs
    * More GPUs coming soon!
* Tier 2 HPC systems with affiliation to University of Sheffield
  * [Bede](https://docs.hpc.shef.ac.uk/en/latest/bede.html): for very large GPU jobs that require multiple GPUs and
    multiple nodes.

### HPC Learning resources

All HPC clusters mentioned above run on Linux operating system. Generally you have to interact with them using the
command line interface (although for some you can launch a GUI application such as matlab though them).

As you have limited user permissions on these systems, you have to use pre-installed software (using modules) and custom
installation of software is normally done through packages such as [conda](https://conda.io) or
[spack](https://spack.io/) that allows installation of software and their dependencies to your home directory.

HPC clusters use a job scheduler to make sure everyone has a chance to run their tasks. You write a job script that
tells the HPC what tasks to run and what computing resources you need and then send it to the scheduler to be added to
the queue. The scheduler will then run your job when it’s your turn in the queue and there’s enough resource available
on the cluster.

* General HPC
  * HPC Carpentry series [https://hpc-carpentry.github.io/](https://hpc-carpentry.github.io/)
* Linux and the command line
  * Ubuntu’s terminal tutorial
    [https://ubuntu.com/tutorials/command-line-for-beginners#1-overview](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)

## Coding for Virtual Reality

* [The Technology Behind Virtual Reality - Coding and Design](https://vr.space/news/education/vr-coding-design/)

<!-- Reference Links -->

[bioconductor]: https://www.bioconductor.org/
[bookdown]: https://bookdown.org/
[dslc]: https://dslc.io/
[git]: https://git-scm.com/
[mit-missing-semester]: https://missing.csail.mit.edu/
[birmingham-missing-semester]: https://missingsemester.afnom.net/
[posit]: https://posit.co/
[quarto]: https://quarto.org/
[r]: https://www.r-project.org/
[rmarkdown]: https://bookdown.org/yihui/rmarkdown/
[rstudio]: https://posit.co/downloads/
[shiny]: https://shiny.posit.co/r/getstarted/
