---
layout: post
title: "pre-commit : Protecting your future self"
author: Neil Shephard
slug: pre-commit
date: 2022-10-10 12:00:00 UTC
tags: git pre-commit github gitlab linting
category:
link:
description:
social_image: assets/images/watchful_eye.jpg
type: text
excerpt_separator: <!--more-->
---

[Pre-commit](https://pre-commit.com/) is a powerful tool for executing a range of hooks prior to making commits to your
Git history. This is useful because it means you can automatically run a range of linting tools on your code across an
array of languages to ensure your code is up-to-scratch _before_ you make the commit.

<!--more-->

Pre-commit is written in Python but that isn't a limitation as it will lint YAML, JSON, C, JavaScript, Go, Rust, TOML,
Terraform, Jupyter Notebooks, and so on. The list of [supported hooks](https://pre-commit.com/hooks.html) is vast.

## Background

For those unfamiliar with version control and Git in particular this will likely all sounds alien. If you are new to the
world of version control and Git I can highly recommend the [Git & Github through GitKraken Client - From Zero to
Hero!](https://srse-git-github-zero2hero.netlify.app/) offered by the [Research Software
Engineering](https://rse.shef.ac.uk) at the University of Sheffield and developed by Alumni [Anna
Krystalli](https://annakrystalli.me/).

### What is a "hook"?

In computing a "hook" refers to something that is run prior to or in response to a requested action. In the context of
the current discussion we are talking about hooks that relate to actions undertaken in Git version control and
specifically actions that are run before a "commit" is made.

When you have initialised a directory to be under Git version control the settings and configuration are stored in the
`.git/` sub-directory. There is the `.git/config` file for the repositories configuration but also the `.git/hooks/`
directory that is populated with a host of `*.sample` files with various different names that give you an in-road into
what different hooks you might want to run. Its worth spending a little time reading through these if you haven't done
so yet as they provide useful examples of how various hooks work.

### Why pre-commit hooks?

Typically when writing code you should [lint](https://ns-rse.github.io/posts/linting/) your code to ensure it
complies to agreed style guides and remove any "[code smells](https://en.wikipedia.org/wiki/Code_smell)" that may be
lingering (code that violates design principles). It won't guarantee that your code is perfect but its a good starting
point to improving it. People who write a lot of code have good habits of doing these checks manually prior to making
commits. Experienced coders will have configured their Integrated Development Environment (IDE) to apply many such
"hooks" on saving a file they have been working on.

At regular points in your work flow you save your work and check it into Git by making a commit and that is
where `pre-commit` comes in to play because it will run all the hooks it has been configured to run against the files
you are including in your commit. If any of the hooks fail then your commit is _not_ made. In some cases `pre-commit`
will automatically correct the errors (e.g. removing trailing white-space; applying
[black](https://github.com/psf/black) formatting if configured) but in others you have to correct them yourself before a
commit can be successfully made.

Initially this can be jarring, but it saves you, and more importantly those who you are asking to review your code in
your as yet to be created pull request, time and effort as it ensures your code meets the required style and is a little
bit cleaner before being sent out for review. Long term linting your code is beneficial (see [Linting - What is all the fluff
about?](2022-04-19-linting)).

## Installation

Pre-commit is written in Python and so you will need Python installed on your system in order to use it. Aside from that
there is little else extra that is required to be manually installed as pre-commit installs virtual environments
specific for each enabled hook.

If your systems package manager includes pre-commit you can install it system wide.

```bash
emerge -av pre-commit           # Gentoo
pacman -Syu pre-commit          # Arch
sudo apt-get install pre-commit # Debian/Ubuntu
brew install pre-commit         # Homebrew (OSX)
```

Alternatively you can install it under your account or virtual environment.

```bash
pip install pre-commit
conda install -c conda-forge pre-commit
```

If you are working on a Python project then you should include `pre-commit` as a requirement (either in
`requirements-dev.txt`) or under the `dev` section of `[options.extras_require]` in your `setup.cfg` as shown below.

```
[options.extras_require]
dev =
  pre-commit
  pytest
  pytest-cov
```


## Configuration

Configuration of pre-commit is via a file in the root of your Git version controlled directory called
`.pre-commit-config.yaml`. This file should be included in your Git repository, you can create a blank file or
`pre-commit` can generate a sample configuration for you.

```bash
# Empty configuration
touch .pre-commit-config.yaml
# Auto-generate basic configuration
pre-commit sample-config
git add .pre-commit-config.yaml
```

### Hooks

Each hook is associated with a repository (`repo`) and a version (`rev`). Many are available from the
`https://github.com/pre-commit/pre-commit-hooks`. The default set of `pre-commit` hooks might look like the following.


```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
      rev: v4.3.0 # Use the ref you want to point at
      hooks:
          - id: trailing-whitespace
            types: [file, text]
          - id: check-docstring-first
          - id: check-case-conflict
          - id: end-of-file-fixer
            types: [python]
          - id: requirements-txt-fixer
          - id: mixed-line-ending
            types: [python]
            args: [--fix=no]
          - id: debug-statements
          - id: fix-byte-order-marker
          - id: check-yaml
```

### Hooks from External Repositories

Some hooks are available from dedicated repositories, for example the following runs
[Black](https://github.com/psf/black), [Flake8](https://flake8.pycqa.org/en/latest/) and
[Pylint](https://pylint.pycqa.org/en/latest/) on your code and should follow under the above (with the same level of
indenting to be valid YAML).

```yaml
  - repo: https://github.com/psf/black
    rev: 22.6.0
    hooks:
        - id: black
          types: [python]

  - repo: https://gitlab.com/pycqa/flake8.git
    rev: 3.9.2
    hooks:
        - id: flake8
          additional_dependencies: [flake8-print]
          types: [python]
  - repo: https://github.com/pycqa/pylint
    rev: v2.15.3
    hooks:
        - id: pylint
```

An extensive list of [supported hooks](https://pre-commit.com/hooks.html) is available. It lists the repository from
which the hook is derived along with its name.

### Local Hooks

You can also define [new hook](https://pre-commit.com/#new-hooks) and configure them under the `- repo: local`.

```yaml
  - repo: local
    hooks:
      - id: <id>
        name: <descriptive name>
        language: python
        entry:
        types: [python]

```

For some examples of locally defined hooks see the [Pandas
.pre-commit-config.yaml](https://github.com/pandas-dev/pandas/blob/main/.pre-commit-config.yaml).

## Usage

Before `pre-commit` will run you need to install it within your repository. This puts the file
`.git/hooks/pre-commit` in place that contains the hooks you have configured to run. To install this you should have
your `.pre-commit-config.yaml` in place and then run the following.

```bash
pre-commit install
```

Once installed and configured there really isn't much to be said for using `pre-commit`, just make commits and before
you can make a successful commit `pre-commit` must run with all the hooks you have configured passing. By default
`pre-commit` only runs on files that are staged and ready to be committed, if you have unstaged files these will be
stashed prior to running the `pre-commit` hook and restored afterwards. Should you wish to run these manually without
making a commit then, after activating a virtual environment if you are using one simply, or you can make a `git commit`.

```bash
pre-commit run
```

If any of the configured hooks fail then the commit will not be made. Some hooks such as
[black](https://github.com/psf/black) may reformat files in place and you can then make another commit recording those
changes and the hook should pass. Its important to pay close attention to the output.

If you want to run a specific hook you simply add the `<id>` after `run`.

```bash
pre-commit run <id>
```

Or if you want to force running against all files (except unstaged ones) you can do so.

```bash
pre-commit run --all-files # Across all files/hooks
```

And these two options can be combined to run a specific hook against all files.

```bash
pre-commit run <id> --all-files
```

## Updating

You can update hooks by running `pre-commit autoupdate`.


## Pre-commit CI/CD

Ideally contributors will have setup their system to work with pre-commit and be running such checks prior to making
pushes. It is however useful to enable running pre-commit as part of your Continuous Integration/Development
pipeline (CI/CD). This can be done with both [GitLab](https://gitlab.com) and [GitHub](https://github.com) although
similar methods are available for many [continuous integration
systems](https://pre-commit.com/#usage-in-continuous-integration).

### GitHub

GitHub actions reside in the `.github/workflows/` directory of your project. A simple pre-commit action is available on
the Marketplace at [pre-commit/action](https://github.com/marketplace/actions/pre-commit). Copy this template to
`.github/workflows/pre-commit.yml` and include it in your Git repository.

```bash
git add .github/workflows/pre-commit.yml
git commit -m "Adding pre-commit GitHub Action" && git push
```


### GitLab

If you use GitLab the following article describes how to configure a CI job to run as part of your repository.

* [How to use pre-commit to automatically correct commits and merge requests with GitLab CI](https://stackoverflow.com/collectives/gitlab/articles/71270196/how-to-use-pre-commit-to-automatically-correct-commits-and-merge-requests-with-g)


## Links

* [Pre-commit](https://pre-commit.com/)
* [Supported hooks](https://pre-commit.com/hooks.html)
* [GitHub Action](https://github.com/marketplace/actions/pre-commit)
* [GitLab CI](https://stackoverflow.com/collectives/gitlab/articles/71270196/how-to-use-pre-commit-to-automatically-correct-commits-and-merge-requests-with-g)
