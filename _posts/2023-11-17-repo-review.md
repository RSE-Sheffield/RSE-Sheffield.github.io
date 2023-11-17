---
layout: post
title: "Repository Review"
author: Neil Shephard
slug: repo-review
date: 2023-11-17 12:00:00 UTC
tags: python pre-commit packaging
category:
link:
description:
social_image: assets/images/headless_dancing.jpg
type: text
excerpt_separator: <!--more-->
---

I've written before about [Python Packaging](https://rse.shef.ac.uk/blog/2023-09-18-python-packaging/) and
[pre-commit](https://rse.shef.ac.uk/blog/pre-commit/) which I'm a big fan of. Today I discovered a really useful
tool for checking your packaging configuration and pre-commit configuration from the [Scientific Python
Development Guide](https://learn.scientific-python.org/development/).

<!--more-->

<div style="width: 50%; margin:0 auto;"><img src="/assets/images/headless_dancing.jpg" alt="Sculpture by Erwin Wurm at
Yorkshire Sculpture Park."/><p>Photo by <a href="https://www.flickr.com/photos/slackline/52985095726/in/album-72177720309170263/" target="_blank">Neil Shephard</a>.</p></div>

This development guide is really well written and has
[Tutorials](https://learn.scientific-python.org/development/tutorials/) and [Topical
Guides](https://learn.scientific-python.org/development/guides/) that cover package development, style guides, type
checking and tests amongst other things.

## Repo Review

Of particular use is the [Repo-Review - Scientific Python Development
Guide](https://learn.scientific-python.org/development/guides/repo-review/) which will automatically check a GitHub
hosted repository against the Scientific Python development guidelines and make recommendations where improvements can
be made to the package configuration and pre-commit configuration.

Having tested it against [AFM-SPM/TopoStats main
branch](https://learn.scientific-python.org/development/guides/repo-review/?repo=AFM-SPM%2FTopoStats&branch=main) there
are a lot of useful and simple recommendations made.

## More Pre-Commit hooks

More [pre-commit hooks](https://pre-commit.com/hooks) is only a good thing in my view, they don't take that long to run
against most reasonably sized repositories, particularly if [ruff](https://astral.sh/ruff) is used in favour of more
traditional tools such as `flake8` and `isort`.

There are a few [pre-commit](https://rse.shef.ac.uk/blog/pre-commit/) hooks that I wasn't aware of and will be
adding to my projects such as..,

+ [Check-manifest](https://pypi.org/project/check-manifest/) that verifies you have working SDist (source) packages.
+ [Codespell](https://github.com/codespell-project/codespell) for checking the spelling used in code.
+ [validate-pyproject](https://validate-pyproject.readthedocs.io/) for validating `pyproject.toml`.

## Conclusion

If you are involved in Python package development of any sort give your repository a review and see what recommendations
are suggested. You may not agree with all of the recommendations but the vast majority of tools are highly configurable
so you can disable the checks you don't want applied. It won't do any harm.
