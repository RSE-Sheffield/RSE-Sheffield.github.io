---
layout: post
title: Managing Container Security with GitHub
author: David Wilby
slug: 2021-01-21-github-container-security
date: 2021-01-21 12:00:00 UTC
tags:
category:
link:
description:
type: text
excerpt_separator: <!--more-->
social_image: /assets/images/logo/rse-logoonly-stroke.png
---

Containers (i.e. more often than not, Docker containers) continue to become an increasingly popular tool in research software. As a useful approach for many tasks, including (but not limited to) isolating a reproducible computing environment or managing the different roles required in a stack of software; containers are finding more and more of a place in our workflows.

As a result, it becomes ever more relevant to be able to automatically manage our images and perform tasks such as keeping up to date images available in an image registry, or scanning them for potential security vulnerabilities.

In a recent project, I have been developing an API server using Django run from within a Python image. With this project we had particular security concerns and wanted to ensure that any security vulnerabilities in dependent packages were patched as soon as possible. In this case, I took 2 approaches using GitHub actions as a continuous integration service:
1. Rebuild the image once a week and push to the GitHub container registry.
2. Run weekly security vulnerability checks and generate an alert if there are any problems.

In this blog post, I'll describe the approach I took, why, and the drawbacks.

<!--more-->

# Project Background
Simply put, this project was to create an API server for running (well-defined) simulations on an HPC resource. The API is used by a collaborator's web service to submit sets of parameters which are used to run a biomedical simulation. The API user also needs to monitor the progress of the batch job and once it's complete, download the results.
Not least because of 2020's [attacks on HPC clusters](blog/2020-05-20-ssh-best-prac/) - it is vital to take a defensive approach to any web-exposed software that grants any access to a computing resource. In this case, our app runs on an institutional virtual machine (VM), which has managed software updates designed to patch security vulnerabilities. However, due to our choice of using Docker/Docker-compose to manage the stack, we had to look after the updates ourselves.
One option would have been to manage this on the VM using cron jobs and a mail server for alerts; but in this case we decided to run the tasks using some GitHub services, since we we already use GitHub frequently as a remote code repository, collaboration and project management tool.

# Containers
It's perhaps beyond the scope of this blog post, but in brief, containers can be thought of as being a bit more than a virtual environment and a bit less than a virtual machine, running like a little computer on your computer, with just enough of an operating system and just enough resources to do the task they need to do.
Often (right now) when we mention containers we're talking about _Docker_ containers (other container systems are available). **Images** are the template from which a running **container** is spawned when it is run.

# GitHub Container Registry
A container registry is a repository (or collection of repositories) of container images. Basically, they're places from which we can download container images.

GitHub launched a container registry service in September 2020, as part of their packages ecosystem. Whilst DockerHub is the most common registry for docker images, for this project we wanted to keep our images private. Finding that GitHub container registry is free for private packages (up to a point, see below) for GitHub pro accounts (including pro for education, available to university members) whereas DockerHub is not, we elected to go the cheap-skate route. (As well as reducing the number of different services used..)

# GitHub Actions for Continuous Integration
In addition, GitHub has a framework which can be used for continuous integration/development (CI/CD). CI is a practice in which code can be continually added to a project, checked, tested and deployed without having to stick to a rigid release procedure. In this case, one of the useful qualities of a CI platform is its ability to run processes on a schedule, or in response to changes to the code repository - and run those changes on a cloud instance.

In contrast to some other cloud CI systems (eg GitLab, Travis, CircleCI, Appveyor [etc etc etc](https://github.com/ligurio/awesome-ci)) - GitHub actions is styled around plug-in style "actions" which can be browsed on the [marketplace](https://github.com/marketplace?type=actions). Whilst it is possible to write your own code (shell scripts etc) to run from an action, using a ready-made action is the quickest, easiest way to do most common CI tasks.

Actions can be [triggered](https://docs.github.com/en/actions/reference/events-that-trigger-workflows) in response to a variety of events, for example a push or pull request to the repo, on a schedule, a new git commit tag or release, manually or any combination.

# Building a new image and pushing to the registry
Each Docker image is denoted by a name and a tag. For instance `python:3.8` is the official Python image on DockerHub, with `3.8` indicating the Python language version in this case. It is also common practice to have one image also tagged as `latest`, allowing users to automatically use the most recent version of an image.

The actions workflow file looks like this:
```yaml
name: Build image from tagged commit
on:
  push:
    tags:
      - "v*"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Get the tag
        shell: bash
        run: |
          echo "IMAGE_TAG=${GITHUB_REF#refs/tags/}" >> $GITHUB_ENV

      - name: GitHub Docker Action
        uses: matootie/github-docker@v3.1.0
        with:
          tag: |
            latest
            ${{ env.IMAGE_TAG }}
          accessToken: ${{ secrets.GH_REG_PAT }}
          containerRegistry: true
```

In this project, for ease, I elected to build images when a new tagged commit was pushed to the master branch (or when a release was created on GitHub, which creates a commit tag). This is further specified to only run on tags which start with `v`, eg `v1.0`.
```yaml
on:
  push:
    tags:
      - "v*"
```

Jumping ahead to the meat of the workflow, a common first step is to checkout the code repo at the commit that triggered the workflow:
```yaml
      - uses: actions/checkout@v2
```

Then a bit of custom bash to get the commit tag and store it in an environment variable:
```yaml
- name: Get the tag
  shell: bash
  run: |
    echo "IMAGE_TAG=${GITHUB_REF#refs/tags/}" >> $GITHUB_ENV
```

I then use an off-the-shelf action to push to the github container registry, which requires a personal access token (PAT) stored in the repository's secrets:
```yaml
- name: GitHub Docker Action
  uses: matootie/github-docker@v3.1.0
  with:
    tag: |
      latest
      ${{ env.IMAGE_TAG }}
    accessToken: ${{ secrets.GH_REG_PAT }}
    containerRegistry: true
```
This builds from the Dockerfile at the top level of the repository, tags the result as both `latest` and the tag that triggered the commit and pushes them to the container registry.

# Building a development image
In addition to the main tagged image, I also build a development image from each new commit on the `dev` branch of the repo. It uses most of the same steps but uses a different trigger:
```yaml
on:
  push:
    branches:
      - "dev"
```

# Scheduling a regular rebuild
We wanted to build a new version of the image to take advantage of updates to dependencies in the base images (our image is based on the python image, which itself is based on a debian image). There are a few subtle differences to this workflow from the one above:
1. Use both a manual trigger and a scheduled trigger to run the action once a week.

```yaml
on:
  workflow_dispatch:
  schedule:
    - cron:  '0 3 * * 4'
```
The schedule is specified by the [cron](https://cron.help/) syntax.

2. Fetch all commits on the master branch, so we can find the most recent tagged commit later.

```yaml
steps:
  - uses: actions/checkout@v2
    with:
      ref: master
      fetch-depth: 0
```

3. Use `git describe` to find the tagged commits on the master branch, and store the most recent one in an environment variable.

```yaml
- name: Get latest tag
  shell: bash
  run: |
    git describe --tags --abbrev=0
    echo "LATEST_TAG=$(git describe --tags --abbrev=0)"  >> $GITHUB_ENV
```

4. Checkout that commit.

```yaml
- run: git checkout ${{ env.LATEST_TAG }}
```

5. Then build and push the images just as we did before, overwriting any previous images with those tags.

```yaml
- name: GitHub Docker Action
  uses: matootie/github-docker@v3.1.0
  with:
    tag: |
      latest
      ${{ env.LATEST_TAG }}
    accessToken: ${{ secrets.GH_REG_PAT }}
    containerRegistry: true
```

# Run regular vulnerability checks
In addition to automating image management, regular security vulnerability checks were paramount. We used GitHub actions again to run [Trivy](https://github.com/aquasecurity/trivy) - a container scanning tool; and [safety](https://pypi.org/project/safety/) - a python dependency scanner. Fortunately, off the shelf GitHub actions exist for both of these.

For the security checks, we run on a number of triggers including: manual, on pushes and pull requests to the master branch, and on schedule:

```yaml
on:
  workflow_dispatch:
  pull_request:
    branches:
      - master
  push:
    branches:
      - master
  schedule:
    - cron:  '0 2 * * 4'
```

For trivy we checkout the most recent tagged commit as we did before (though you could also pull the image from the container registry) - then run Trivy against it:

```yaml
- name: Run Trivy vulnerability scanner
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: 'cotainer_name:tag'
    format: 'table'
    exit-code: '1'
    ignore-unfixed: true
    severity: 'CRITICAL,HIGH'
```

To manage the signal to noise ratio of the output, we ignore any vulnerabilities that don't have fixes yet and only look at the most serious ones.

Some recent output looks like this:
```
Total: 3 (HIGH: 1, CRITICAL: 2)

+-------------+------------------+----------+-------------------+-------------------+---------------------------------------+
|   LIBRARY   | VULNERABILITY ID | SEVERITY | INSTALLED VERSION |   FIXED VERSION   |                 TITLE                 |
+-------------+------------------+----------+-------------------+-------------------+---------------------------------------+
| libp11-kit0 | CVE-2020-29362   | CRITICAL | 0.23.15-2         | 0.23.15-2+deb10u1 | p11-kit: out-of-bounds read in        |
|             |                  |          |                   |                   | p11_rpc_buffer_get_byte_array         |
|             |                  |          |                   |                   | function in rpc-message.c             |
|             |                  |          |                   |                   | -->avd.aquasec.com/nvd/cve-2020-29362 |
+             +------------------+          +                   +                   +---------------------------------------+
|             | CVE-2020-29363   |          |                   |                   | p11-kit: out-of-bounds write in       |
|             |                  |          |                   |                   | p11_rpc_buffer_get_byte_array_value   |
|             |                  |          |                   |                   | function in rpc-message.c             |
|             |                  |          |                   |                   | -->avd.aquasec.com/nvd/cve-2020-29363 |
+             +------------------+----------+                   +                   +---------------------------------------+
|             | CVE-2020-29361   | HIGH     |                   |                   | p11-kit: integer overflow when        |
|             |                  |          |                   |                   | allocating memory for arrays          |
|             |                  |          |                   |                   | or attributes and object...           |
|             |                  |          |                   |                   | -->avd.aquasec.com/nvd/cve-2020-29361 |
+-------------+------------------+----------+-------------------+-------------------+---------------------------------------+
```

Safety is fairly simple to run as well:

```yaml
env:
  DEP_PATH: requirements.txt

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out master
        uses: actions/checkout@master

      - name: Security vulnerabilities scan
        uses: aufdenpunkt/python-safety-check@master
```

Some recent output looks like this:

```
+==============================================================================+
|                                                                              |
|                               /$$$$$$            /$$                         |
|                              /$$__  $$          | $$                         |
|           /$$$$$$$  /$$$$$$ | $$  \__//$$$$$$  /$$$$$$   /$$   /$$           |
|          /$$_____/ |____  $$| $$$$   /$$__  $$|_  $$_/  | $$  | $$           |
|         |  $$$$$$   /$$$$$$$| $$_/  | $$$$$$$$  | $$    | $$  | $$           |
|          \____  $$ /$$__  $$| $$    | $$_____/  | $$ /$$| $$  | $$           |
|          /$$$$$$$/|  $$$$$$$| $$    |  $$$$$$$  |  $$$$/|  $$$$$$$           |
|         |_______/  \_______/|__/     \_______/   \___/   \____  $$           |
|                                                          /$$  | $$           |
|                                                         |  $$$$$$/           |
|  by pyup.io                                              \______/            |
|                                                                              |
+==============================================================================+
| REPORT                                                                       |
| checked 41 packages, using default DB                                        |
+============================+===========+==========================+==========+
| package                    | installed | affected                 | ID       |
+============================+===========+==========================+==========+
| cryptography               | 3.2.1     | <3.3                     | 39252    |
+==============================================================================+
```
which in this case allowed me to upgrade the version of the `cryptography` package, and manually re-run the action to check before merging.

# Weighing up the GitHub approach
The benefits to this _all-GitHub_ workflow are that:
* All my CI, package registry, code, testing is all in one place. Limiting the amount of systems I have to understand. It also makes cross-referencing in development discussions quite simple.
* The alerting is simple to manage, GitHub just emails me and other maintainers when an action fails. We don't have to setup any mail systems from our own infrastructure.
* It's someone else's computer. All the benefits of cloud reduce the amount of maintenance and administration I have to carry out myself.
* There's a friendly web interface.

On the downside:
* Vendor lock-in. It's all on one site, if GitHub goes down or decides to change its pricing model, I would have to rewrite all my workflows to run somewhere else, as well as move my codebase.
* At the moment, there seems to be no automatic pruning of images. So by pushing newly tagged images to the registry on a regular basis, it becomes overrun with ghost images.
* Partially, this is because the container registry is a new feature. So hopefully some actions will catch up. There are existing actions for package pruning, which are just not yet compatible with the container registry.
