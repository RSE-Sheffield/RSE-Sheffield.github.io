---
layout: post
title: "A concise guide to reproducible MATLAB projects"
author: David Wilby
slug: 2022-03-10-concise-guide-to-reproducible-matlab
date: 2022-03-10 10:00:00 UTC
tags: matlab, reproducibility
category:
link:
description:
type: text
excerpt_separator: <!--more-->
---

In research, it is of utmost importance to the scientific process to be able to reproduce research findings in order to establish their validity. However, more often than not, the code that is written for research purposes cannot be easily run again, sometimes even by the code's authour (yours truly included).

This year, I've been awarded a fellowship by the [Software Sustainability Institute](https://software.ac.uk/) to develop guidance and training to help researchers who use MATLAB to find and learn the tools that they need to easily produce better research by making their code reproducible.

During my PhD and postdoctoral research, I used MATLAB among other languages to analyse data, run simulations, make figures and control instrumentation. However, at the time, I didn't know about the conce required to make my code reproducible for myself and others. For the last few years, as a Research Software Engineer, I've gained the experience needed to develop reproducible software in a range of languages including MATLAB. Now it's time to share what I've learned with everyone!

This blog post should serve as a _very_ brief introduction to some of the concepts you can use to develop a reproducible project in MATLAB. You can expect more to come throughout my fellowship, so watch this space.

## What is reproducibility?
When performing some research via any method, the most basic expectation is that the results should be able to be validated somehow, otherwise how can they be trusted? The most basic version of this is that by following the same methods of the researchers who originally performed a piece of work, you should be able to get to the same conclusions. This is essentially the concept of reproducibility, research should be able to be reproduced in order to validate its conclusions.

When it comes to research code, it should be relatively easy to reproduce, right? There are no complicated _experiments_ to run again, or data to collect, so it should be a given, shouldn't it?

In practice, we find that exact versions of software dependencies or the toolboxes required are not documented alongside a project, or it isn't even clear how to get the right data into the software or run the code at all. This means that even with the original code available to you, it might not be possible to run the code, or _worse_, it could produce incorrect results.

The goal of crafting a reproducible software project should be to produce a compendium of code, data and documentation that anyone should be able to pick up and run, generating the same results that you did initially. Reproducible software development practices are also just good practice in general, if you've followed good practice in the first place, when you come back to a project in several months' or years' time (or just on Monday morning), you should be able to make improvements, re-run the code or validate your results.

## How to write reproducible matlab?
Here are some tools and concepts you can use to improve the reproducibility of your MATLAB project. Many are the same concepts you'll find recommended for most research software (and most _software_) projects, with some specific guidance on how to implement these in Matlab.

<!--more-->

### Coding Style
Writing code that is readable should be your very first port of call for reproducibility. Not just for your colleagues and collaborators, but for yourself.

In brief, you should:
1. Include comments that explain what your code is doing,
1. Use self-explanatory variable, function and class names,
1. Write modular code. Each function, for instance, should just do one job and be reusable at other places in your code,
1. Avoid duplication. Write the code that does one job just once and write a function that you can call.

A useful online resource for Matlab coding style is the [MATLAB Programming Style Guide][style-guide], based on Richard Johnson's book, [The Elements of MATLAB style](https://www.google.co.uk/books/edition/The_Elements_of_MATLAB_Style/awORkNlgiZoC?hl=en&gbpv=1&printsec=frontcover), also available [on MATLAB's FileExchange](https://uk.mathworks.com/matlabcentral/fileexchange/46056-matlab-style-guidelines-2-0). Why not have a skim through this succinct resource before starting your next project?

### Project Organisation
The first thing that makes a project difficult to reproduce is when you open the project folder to find a big heap of confusingly named scripts.

Use folders/directories to organise your project, so that it is obvious (to you and anyone else who uses your code) where to find what is needed.

At the very top level of your project, why not have something like the following structure?

```
├── data/        
│   └── raw/
│   └── processed/
├── output/
├── reports/          # a clear folder for your papers or reports for the project
├── src/              # source code
│   └── @MyClass/     # a class directory
│   └── a_module/     # a directory containing a group of functions or classes with some commonality
│   └── utils/        # a directory containing utility functions
├── docs/             # documentation
├── tests/            # software tests for the project
├── README            # readme file! (essential)
└── my.prj            # MATLAB project file (read on for more details)
```

For more in depth guidance on how to organise a project (and loads of other excellent advice) check out the [BES' guide to Reproducible Code][bes-guide] - I still refer to this guide regularly.

### Documentation
Your users will thank you (that includes you) when they encounter some actual guidance on how to use your code - maybe they'll actually use it! Imagine that!

It's a great idea to version control your documentation alongside your project (see [version control section below](#version-control)) so that it remains up to date with changes in your code and the two don't get out of sync with each other.

Therefore, you need to write your documentation in a format that can be handled by your version control system (most likely, `git`) - e.g. as text files, and not a PDF, word document or google doc. A number of tools exist for doing this outside of Matlab, be it [read the docs](https://readthedocs.org/), [roxygen2](https://cran.r-project.org/web/packages/roxygen2/vignettes/roxygen2.html) or anoher documentation generator.

Of course, you can use these tools for your MATLAB project. Your documentation is written in a raw text format such as markdown (like this blog post), or reStructuredText, MATLAB itself isn't being used to execute code in the documentation. A documentation generator will process your raw text into a nice PDF or webpage. You could even run your documentation generator just using a [continuous deployment](#continuous-integration-and-continuous-deployment) tool such as github actions and never install or run the tool on your local machine at all! :fearful:

[See this MATLAB Answers thread](https://uk.mathworks.com/matlabcentral/answers/58438-which-tool-are-you-using-to-create-the-documentation-of-your-matlab-codes) for a few examples of documentation generators to use with MATLAB.

However, if you want to work purely in MATLAB, it has the tools to generate HTML or PDF (or even powerpoint) from an m-file, which can be version controlled alongside your code.

#### Generating documentation with MATLAB
The tools for generating documentation from MATLAB are relatively immature, however there are plenty of functions available as part of the [MATLAB Report Generator](https://uk.mathworks.com/help/rptgen/) which you can use for building documentation.

Take, for example, a file called `docs.m` which uses the [MATLAB markup syntax](https://uk.mathworks.com/help/matlab/matlab_prog/marking-up-matlab-comments-for-publishing.html) to format some documentation.
```matlab
%% My User Documentation

%% Section 1: Writing some text

%%
% One space after the comment symbol (|%|) renders some ordinary text.
%
%  Whereas two spaces creates a monospaced font output.
%
% Three spaces between the |%| and text outputs syntax highlighted code:
%
%
%   for i = 1:10
%       disp(x)
%   end
%
% You can format _bold_, *italic* and |monospaced| inline as well.
```

Try copying this code into a new m-file now. You can then publish your new documentation to an HTML file or PDF from the `Publish` tab in MATLAB:

![On the Publish tab, go to publish](/assets/images/matlab-repro-blog/matlab-publish.png)

Clicking the down arrow opens a menu, with the bottom option being `Edit publishing options...` where you can edit the publishing options on a per-file basis. You can choose to output HTML, PDF, latex or XML as well as edit a number of other options.

If you output to PDF, you'll get some output that looks like this:

![PDF rendered output](/assets/images/matlab-repro-blog/pdf-output.png)

You can also publish programmatically, using the `publish` function ([documentation here](https://uk.mathworks.com/help/matlab/ref/publish.html))

```matlab
options = struct('format', 'pdf', 'outputDir', 'docs');
publish("docs.m", options);
```

Whilst not shown here, these files can contain executable code, [see this blog article for an example](http://ricopic.one/publishing-matlab-code/), and there are many other tools for generating reports and documents from within MATLAB.


### Version Control


### Testing

### Licensing/Open Source
It is a common misconception that MATLAB code can not be released as open source because MATLAB itself is a proprietary language. This is not the case at all, just look at [MATLAB's File Exchange][file-exchange] to see thousands of examples of users sharing their code.

Software licensing is perhaps too big a discussion to be a subsection of a blog post, but the takeaway points here should be:
1. Release your code publicly, let others use it and cite your research and build upon it, have a bigger impact on the research community,
1. If you do not include a license at all, nobody can legally use your code, include a license that permits the kind of use that you want to, check out <https://choosealicense.com/> to help you pick one,


### Collaborative Hosting/GitHub/GitLab

### MATLAB `Projects`
Since R2019a, MATLAB has included the [`Projects` tool](https://uk.mathworks.com/help/matlab/projects.html) with the goal of improving collaboration and portability. Have you ever been sent code by a colleague and found that you can't run it at all because you're missing a bunch of dependent toolboxes and functions? This is one of the problems that `Projects` attempt to solve.

By creating a `Project` and adding all the relevant files needed to run the code, you should be able to pass on the code and project file (`.prj`) to someone else; they can open the `Project` and all the right files will be added to the path, any particular actions that you specify can be run, among other actions.

`Projects` also allow you to run a dependency analysis, to report which other code yours depends on, and therefore needs to be considered for reprodibility.

**Remember!** include your `.prj` file under version control.


### Continuous Integration and Continuous Deployment
These might sound pretty scary, but all I really mean is: "**actions that run automatically**", maybe when you make changes to your code, or on a particular schedule for instance. These can do things such as running tests or updating the documentation. There are lots of tools for this such as _Travis_, _CircleCI_, _Jenkins_ _etc_. but here I'm going to concentrate on _GitHub Actions_ because it's an increasingly popular tool and one that I've used with MATLAB myself.

In brief, GitHub actions is a really, really, _really_ useful tool! Some examples of things I've done with them with MATLAB are: running tests when a pull request is made so that we can see that the new code works and doesn't break anything before we merge it; automatically compiling a standalone application and an installer for any new releases so that I don't have to do it myself; and at the same time publishing a PDF of user documentation and uploading it to the project's release page automatically.

MathWorks have made a number of actions available for use on GitHub under the [matlab-actions](https://github.com/matlab-actions) organisation, for an overview, [see this repo](https://github.com/matlab-actions/overview).

To learn more about GitHub actions, have a look at [this learning resource](https://docs.github.com/en/actions/learn-github-actions). _Basically_ all you have to do is include a `.yml` file in the `.github/workflows/` folder of your project hosted on GitHub.

The actions available for MATLAB at present are reasonably limited, but versatile, at the moment they're available to:
* [Run Tests](https://github.com/matlab-actions/run-tests) - to automatically run a test suite, and
* [Run a MATLAB command](https://github.com/matlab-actions/run-command) - which allows you to do anything you can write the MATLAB code for, for instance:
  * run MATLAB's [`checkcode` function](https://uk.mathworks.com/help/matlab/ref/checkcode.html) against the repo to look for problems in the code so you don't have to look for them manually?
  * publish your [documentation][#Documentation] as HTML and use it to make a [GitHub pages](https://pages.github.com/) website containing docs for your code?
  * when a new release is made, build and share your toolbox to the MATLAB file exchange?

You can also combine these with one of the many actions from the [GitHub actions marketplace](https://github.com/marketplace?type=actions) even further extending the possibilities!

These can be run on GitHub actions' cloud computing for free for _public_ projects hosted on GitHub (just another reason to go open source! :grinning:), but if your project is private, you can still use GitHub actions by setting up a _self-hosted_ runner on your own computing infrastructure, I used a VM hosted by my university to do this for a private project.


### Compiling Standalone Applications


### Publishing your code with a research paper


[style-guide]: https://sites.google.com/site/matlabstyleguidelines/home
[bes-guide]: https://www.britishecologicalsociety.org/wp-content/uploads/2019/06/BES-Guide-Reproducible-Code-2019.pdf
[file-exchange]: https://uk.mathworks.com/matlabcentral/fileexchange/
