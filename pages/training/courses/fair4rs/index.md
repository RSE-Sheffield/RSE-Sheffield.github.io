---
title: FAIR^2 for research software 
layout: page
type: text
---


## FAIR? Open Science and the FAIR principles

### Towards a more open research

The French philosopher Blaise Pascal once said 'La succession de chercheurs est comparable a un seul homme qui apprend indefiniment', which can be translated to 'The succession of researchers is comparable to a single human learning indefinitely'. This assumes that a given generation of researchers is able to build upon what the previous one has done without having to reinvent the wheel or restart from scratch, allowing them to push the limits further. Very much like a single human that would not forget what they have done before. But what if one generation of researcher stops sharing how they are doing their work? Research will stall. It is therefore the duty of each generation of researchers, to allow the next one to take over in the most efficient way possible. In the age of digital research data driven discovery, sharring research can not be limited to publishing results on academic papers only. This is role of the Open Science initiative.            

Open Science (or Open research) is a push that aims at making scientific research more transparent and accessible. The core idea is to share data, methods, software and results freely with the global community. There are multiple aspects to open Science, going from Open access to publications to Open educational ressources, passing by Open data and methodologies. What we are interested in here is Open software.
Nowadays, software has become a pivotal aspect of modern research. In the RSE team, we are ideally placed to witness that software are used in all research domains, from physical sciences, to psychology or humanities. Some of these software are used to collect data from medical patients, others are used to run complex simulations of merging galaxies. Software are a inherent part of research and allow researcher to push boundaries of what still was impossible few years ago. They often hold the key to the actual research that is being carried out. Nevertheless, it is not yet common to share these important aspect of the research process with others. This might be due to the fear of sharing something that you think is not in the best shape, technical and time barriers or others. That is why the RSE team, in collaboration with the Data Analytics Service (DAS) and the Library team, has created this FAIR^2 training program. The aim is to provide the research community with the knowledge and tools they need to create better software and share them with others.

Finally, it is worth mentioning that the University of Sheffield is endorsing the Open Research initiative, as it can be seen via the statement on [Open research](https://www.sheffield.ac.uk/openresearch/university-statement-open-research) . Founders, such as [UKRI](https://www.ukri.org/what-we-do/supporting-healthy-research-and-innovation-culture/open-research/), are also supporters of this global initiative.  


### The FAIR principles

The FAIR principles were originally developed as guidelines to enhance the reusability of research data. The FAIR
principles apply the concepts of Findability, Accessibility, Interoperability and Reusability to scholarly data
holdings, and were also intended to be applied to other digital research objects such as algorithms and workflows[^1].

Over the past few years there has been growing recognition that research software, defined as _“source code files,
algorithms, scripts, computational workflows and executables that were created during the research process or for a
research purpose”_[^2], should adhere to FAIR guidelines as well as meeting broader open research goals such as
reproducibility and open access. A modified set of FAIR principles for research software (FAIR4RS), allowing for the
inherent differences between data and software, has been developed to provide a framework for the development of FAIR
research software[^3].

## The Training program

### Introduction and target audience

This training offers a modular programme to support researchers in applying FAIR principles and open research practices to
their research software. The overview module provides an introduction to FAIR for research software and gives an
overview of the topics that are offered in more detail in additional modules, which can be selected according to an
individual’s learning goals.

This course is aimed at researchers, including PhDs and postgraduate research students, who create code (whether a few scripts or
something more substantial) as part of their research and who want to make their research more open by applying the FAIR pinricple to their software.


### Learning outcomes


After completing this program, participants should be able to:

- Understand the FAIR principles and describe how they apply to research software
- Explain how applying FAIR principles to research software can support open research goals such as transparency,
  reproducibility and reusability
- Identify actions that can be taken at different stages of the research lifecycle to enhance the FAIRness of their
  research software outputs
- Develop a software management plan addressing the intended scope, impact and lifespan of research software
- Describe different types of software licence and discuss their potential implications for reuse of research software,
  including commercialisation
- Apply best practices for scientific software development including design, version control, testing, continuous
  integration and documentation
- Associate their research software with a unique and persistent identifier and use metadata to enhance its findability,
  accessibility and reusability
- Identify repositories that provide long-term persistent storage for research software
- Apply approaches such as packaging and containers to enhance the reusability and reproducibility of research software.


### Outline of the program

<div class="alert alert-info"> <strong>Info!<strong> The definitive program (with dates and registration links) will be online on Oct 1st.</div>

** Better software for Better research: Introduction to the FAIR training program (R. Thomas, 22nd October 2024, Lunchbyte talk, 12pm, online) **
In this introduction session we will try to understand what the FAIR principles are and why they have emerged. We will then introduce some actionnable action on how to apply them to software and present a global review of the training program.

** Software lifecycle planning (Romain Thomas, Ric Campbell, Kate O'Neill) **

** Version control (Neil Shephard) **
This version control bit is separated in two distincts training sessions: one for beginners and one for more advanced users.

* Git, GitHub and GitKraken - From Zero to Hero: If you’ve never heard of or used version control and Git before this is the course for you. We start by introducing version control and exploring how it can be beneficial to researchers, then we introduce some useful tools and get started with some basic workflow using these tools. We build on those foundations with collaborative exercises that introduce key concepts such as forks, pull requests and branches and give you the chance to get some hands-on experience with using version control in a research setting. 

* This course aims to help you develop a deeper understanding of how Git works to facilitate collaboration. It builds on foundations laid by the Git beginners course. The core idea around the course is that by improving your understanding of working with branches and how to make your commits tidier and neater it makes it easier to understand pull requests and Git history which in turn makes it easier to collaborate and work on code with others (including your future self!).


** Software design (Romain Thomas) **

The way you write your code will have a massive impact on how easy it is to maintain. During this course we will try to understand how to create maintainable, readable and reusable code. Using examples and exercices, we will see that creating high quality codes is actually quite straightforward when you understand how to do it and what tools are there to make your life easier.  


** Testing & Continuous Integration (Sylvia Whittle) **

** Documentation (Joe Heffer) **

Well-documented software promotes reproducibility, maintainability, and increased research impact through wider adoption and citation. This course teaches researchers how to document their software effectively, making it accessible and understandable to others. It covers topics such as writing readable code and usage instructions.

** Reproducible computational environments (Daniel Brady) **
Ensuring that others are able to take your code, run it, and are able to produce the same (or equivalent) results is one of the key tenets of FAIR and reproducible research software. This course will provide you with an overview of different ways to make your code reproducible and then focus on virtual environments as a specific tool for computational reproducibility.

** Packaging (Farhad Allian & Christopher Wild) **
Packaging your software is one of the important steps in a software project to make it both findable and accessible. This course will provide you with an understanding of why and when packaging is useful, what different standards exist to package Python projects and take you through each step of the packaging process.

** Publishing a software paper in JOSS (Romain Thomas & Arfon Smith) **

Did you know that you can actually publish a paper about your software? This is an ideal way to get recognition (and citation) for the software you have spent countless hours creating. In this session we will walk you through an example of submission in the [Journal of open Source software](https://joss.theoj.org/). We will submit an example software to the journal, and thanks to the collaboration of the Editor in Chief of JOSS (Arfon Smith), we will look at how the review process is done.  

<!-- Summary session (Romain Thomas) -->

**Prerequisites**

Each session will have some individual prerequisities. Some experience with developing research software or scripts, for example in Python or R might be needed. Please refer to the complete program to know what they are.

<!-- {% include events_list_upcoming.html category="fair4rs" %} -->

## Contact information
For inquiries, please contact Tamora D. James ([t.d.james@sheffield.ac.uk](mailto:t.d.james@sheffield.ac.uk), Program manager), manager of the program and/or Romain Thomas, ([romain.thomas@sheffield.ac.uk](mailto:romain.thomas@sheffield.ac.uk), Head of the RSE group)


[^1]: Wilkinson et al., ‘The FAIR Guiding Principles for Scientific Data Management and Stewardship’.
[^2]: Barker et al., ‘Introducing the FAIR Principles for Research Software’.
[^3]: Barker et al., ‘Introducing the FAIR Principles for Research Software’.
