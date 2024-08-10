---
layout: post
title: "Python Virtualenvwrapper"
author: Neil Shephard
slug: 2024-08-11-python-virtualenvwrapper
date: 2024-08-11 12:00:00 UTC
tags: python "virtual environment" anaconda virtualenvwrapper pip
category:
link:
description:
social_image: https://live.staticflickr.com/65535/53176160657_1a148b3c36_k.jpg
type: text
excerpt_separator: <!--more-->
---

Recently the use of [Anaconda](https://www.anaconda.com/) has been highlighted as problematic for those working in a
research environment because of the restrictive
[licensing](https://legal.anaconda.com/policies/en/?name=terms-of-service) that is starting to be
[enforced](https://www.theregister.com/2024/08/08/anaconda_puts_the_squeeze_on/). This article introduces another option
[virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) for creating and working with
[Python](https://www.python/org) Virtual Environments showing how to install and use it and highlighting some useful
features.

<!--more-->

<div style="width: 80%; margin:0 auto;"><img src="https://live.staticflickr.com/65535/53176160657_1a148b3c36_k.jpg"
alt="Clouds Rising at Sunset in the Julian Alps"/><p>Photo by <a
href="https://www.flickr.com/photos/slackline/53176160657/" target="_blank">Neil Shephard</a>.</p></div>

If you use [Python](https://www.python/org) regularly chances are you are familiar with and use virtual environments to
isolate the installed packages as you develop your code from the Python packages installed at the system level. The
standard libraries [venv](https://docs.python.org/3/library/venv.html), [pipx](https://github.com/pypa/pipx),
[virtualenv](https://virtualenv.pypa.io/en/latest/) and [Anaconda](https://www.anaconda.com/) are all popular options,
perhaps the later being the most popular for its ease of use. Many of the popular package development suites such as
[Hatch](https://hatch.pypa.io/latest/), [PDM](https://pdm-project.org/latest/) and [Poetry](https://python-poetry.org/)
will also manage virtual environments for you too. One you might not have come across is
[virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) which is...

> _a set of extensions to Ian Bicking’s virtualenv tool. The extensions include wrappers for creating and deleting
> virtual environments and otherwise managing your development workflow, making it easier to work on more than one
> project at a time without introducing conflicts in their dependencies._

**NB** If you are using Microsoft Windows it is recommended that you install and use [Windows Subsystem for
Linux](https://learn.microsoft.com/en-us/windows/wsl/install) to follow along.

## What are Virtual Environments

Before getting started a quick recap for readers who aren't familiar with virtual environments.

When you run programmes at the command line such as invoking `python`, whether that is GNU/Linux, Mac OSX or Microsoft
Windows, the operating system searches for the command you run in a defined set of places. It doesn't look everywhere,
rather it looks in the locations defined by an environment variable called `$PATH`. This is a variable holds a set of
paths to locations to look for executable/binary programmes, you can inspect its value with `echo $PATH` and it lists
all paths that are searched for executable files separated by colons (`:`). The order in which the listed paths are
checked takes left-to-right precedence and on my system this looks like the following.

``` bash
❱ echo $PATH
/home/neil/.local/share/pnpm:/home/neil/bin:/home/neil/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/bin:/usr/lib/llvm/18/bin:/usr/lib/llvm/17/bin:/home/neil/.local/bin:/home/neil/.cargo/bin:/home/neil/.node/bin
```

Thus if I invoke `python` the first path that is checked for a binary with that name is `/home/neil/.local/share/pnpm`
if one isn't found the second is checked (`/home/neil/bin`), then the third (`/home/neil/.cargo/bin`) and so on until a
match is found. If no match is found. You can check the path to a given binary using `which` if no such
programme with that name is found you are told so and likely made a tpyo (**Hint** use
[tab-complete](https://www.cyberciti.biz/faq/add-bash-auto-completion-in-ubuntu-linux/) its usually installed and works
in most shells).

``` bash
❱ which python
/usr/bin/python
❱ which ptyhon
ptyhon not found
```

A virtual environment modifies the `$PATH` variable, placing a new path at the start that points to a directory under
your user account that contains a copy of `python` and the specific set of packages you have installed under that
environment. We'll cover this in more detail but if I look at the `$PATH` variable _after_ having activated the
`topostats` virtual environment you will see that its value has been modified and the _first_ directory that is checked
is `/home/neil/.virtualenvs/topostats/bin` and if I check which version of `python` is used it is the one within this
directory.

``` bash
❱ echo $PATH
/home/neil/.virtualenvs/topostats/bin:/home/neil/.local/share/pnpm:/home/neil/miniconda3/condabin:/home/neil/bin:/home/neil/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/bin:/usr/lib/llvm/18/bin:/usr/lib/llvm/17/bin:/home/neil/.local/bin:/home/neil/.cargo/bin:/home/neil/.node/bin
❱ which python
/home/neil/.virtualenvs/topostats/bin/python
```

## Managing Virtual Environments with `virtualenvwrapper`

As the name suggests [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.io/en/latest/) is a wrapper for the
[`virtualenv`](https://virtualenv.pypa.io/en/latest/) package that adds a bunch of convenience functions and features
that, in this authors view, make it easier to install, activate/deactivate and manage your virtual environments.

### Installation

I recommend installing `virtualenvwrapper` at the system level, ideally with your systems package manager. Under
different GNU/Linux or OSX using Homebrew this can be done with...

``` bash
❱ sudo pacman -Syu virtualenvwrapper       # Arch
❱ sudo emerge -av virtualenvwrapper        # Gentoo
❱ sudo apt-get install virtualenvwrapper   # Debian/Ubuntu
❱ brew install virtualenvwrapper           # OSX Homebrew
```

...or if you are happy installing packages using you can follow the [official installation
instructions](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) and use `pip` to install at the system
level.

``` bash
❱ sudo pip install virtualenvwrapper
```

Alternatively you can install locally using `pip` by using the `--user` flag.

``` bash
❱ pip install --user virtualenvwrapper
```

You now need to ensure that the `virtualenvwrapper.sh` is sourced each time you start a new shell. To do this you need
to add lines similar to the following to your `~/.bashrc` or `~/.zshrc` files depending on which shell you use (the
former is the default on most GNU/Linux systems and Windows Subsystem for Linux, the later is the default under OSX).

``` bash
# Configure and setup virtualenvwrapper
export WORKON_HOME=${HOME}/.virtualenvs
export PROJECT_HOME=${HOME}/work/
source /usr/local/bin/virtualenvwrapper.sh
```

The values of `PROJECT_HOME` should be specific to where you wish to create your projects, whilst the argument to
`source` will depend on how you have installed `virtualenvwrapper`, you can check using `which` so use the value
returned by

``` bash
❱ which virtualenvwrapper.sh
/usr/bin/virtualenvwrapper.sh
```

### Always using a virtual environment

Once in `virtualenvwrapper` is installed you can change a configuration option to `pip` to ensure that you are _always_
using a virtual environment when you attempt to install packages using `pip` by adding the following to the
`~/.config/pip/pip.conf` file on your system.

``` bash
[global]
require-virtualenv = True
```

## Creating a Virtual Environment with `virtualenvwrapper`

This is straight-forward.

```bash
❱ mkvirtualenv test_env
```

By default on creating a new virtual environment it is activated and your prompt should change to reflect this with the
environment name appearing as part of the prompt. You can check that the `python` that will be executed resides in this
directory using `which`.

```bash
(test_env) ❱ which python
/home/neil/.virtualenvs/test_env/bin/python
```

## Activating/Deactivating Virtual Environment

You have been dropped into the `test_env` virtual environment to exit from it use the `deactivate` command, again you
can check which version of `python` is found on your `$PATH` using `which`.

```bash
(test_env) ❱ deactivate
(test_env) ❱ which python
/usr/bin/python
```

You won't always create a virtual environment when you want to use it though, that would be a waste of time and
bandwidth downloading and installing packages (although these are cached and used if no new updates are available). To
activate an existing virtual environment you use the `workon` command.

``` bash
 ❱ workon test_env
(test_env) ❱
```

## Project Directories

Typically code for a project resides in its own directory and this can be automatically bound to the virtual environment
using the `mkproject` command instead of `mkvirtualenv`. The project directory is stored in the `$PROJECT_HOME` path
you will have configured during [installation](installation). You can then create a project _and_  a virtual environment
with...

```bash
mkproject new_project
```

### Manually setting Project Directories

If you don't use `mkproject` to create a project you can set it manually after activating a virtual environment using
`setvirtualenvproject` in the desired directory. This adds an entry to the `~/.virtualenv/<env_name>/.project` file
that reflects the directory associated with the environment.

### Disabling Switching to Project Directories

The environment variable `VIRTUALENVWRAPPER_WORKON_CD` "_controls whether the working directory is changed during the
post activate phase. The default is `1`, to enable changing directories. Set the value to `0` to disable this behaviour
for all invocations of `workon`_". If this is something you _don't_ want to happen you should set this in your
`~/.bashrc` or `./zshrc`, otherwise the default can be left alone.

``` bash
export VIRTUALENVWRAPPER_WORKON_CD=0
```

## Deactivating and Removing Virtual Environments

Its straight-forward to deactivate the current virtual environment just type `deactivate`. Similarly you can remove a
virtual environment with `rmvirtualenv <env_name>`.

One neat option if you want to keep a virtual environment but install all packages anew is the ability to remove all
third-party packages in the current virtual environment using `wipeenv`. You can then use `pip` to reinstall a packages
dependencies or a set of packages from a `requirements.txt` file.

## Temporary Virtual Environments

Sometimes you just want to try something out quickly in a clean virtual environment, if for example you are reviewing a
Pull Request and want to check installation and testes pass. `virtualenvwrapper` can help here as it has the
`mktmpenv`. There are two options here `-c|--cd` or `-n|--no-cd` which changes directory post-activation or _doesn't_
respectively. The environment gets a unique name and will be deleted automatically when it is deactivated.

## `virtualenvwrapper` hooks

Just like the various hooks available in Git, [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.io/en/latest/)
also supports [hooks](https://virtualenvwrapper.readthedocs.io/en/latest/scripts.html#scripts) that allow scripts to be
run in response to various events. These reside under your `$VIRTUALENVWRAPPER_HOOK_DIR` which by default is the same as
your `$WORKON_HOME` directory and in a typical standard installation will be `~/.virtualenvs`.

The available scripts that are recognised are...

+ `get_env_details`
+ `initialize`
+ `premkvirtualenv`
+ `postmkvirtualenv`
+ `precpvirtualenv`
+ `postcpvirtualenv`
+ `preactivate`
+ `postactivate`

Each of these is a simple shell script and will start with the scripting language to use e.g. `#!/usr/bin/bash` or
`#!/usr/bin/zsh` depending on your shell. You can then script the actions you wish to take when the script is executed.

### Install minimal requirements

I'm a big fan of [dotfiles](https://dotfiles.github.io)[^1], mine are [hosted on
GitLab](https://gitlab.com/nshephard/dotfiles/), it's a repository of my configuration files and scripts that I use
regularly across multiple computers.  Because I'm lazy I wrote a couple of `requirements.txt` files for installing
packages in my virtual environments.

+ [`requirements.txt`](https://gitlab.com/nshephard/dotfiles/-/blob/master/python/requirements.txt) :
  holds everything I might ever want to use in Python.
+ [`python-lsp-requirements.txt`](https://gitlab.com/nshephard/dotfiles/-/blob/master/python/requirements.txt) :
  Install packages for setting up a Python Language Server (which I use from Emacs).
+ [`venv_minimal_requirements.txt`](https://gitlab.com/nshephard/dotfiles/-/blob/master/python/venv_minimal_requirements.txt)
  : a minimal set of the most common Python packages I am likely to want when creating a new virtual environment.

Because I have my `dotfiles` cloned to the same location on every computer (`~/dotfiles`) I added the following to the
`~/.virtualenvs/postmkvirtualenv` [^2] which will install all of the packages listed in
`~/dotfiles/python/venv_minimal_requirements.txt` whenever a create a new virtual environment, whether that is with
`mkvritualenv` or `mktmpenv`.

```bash
pip install --no-cache-dir -r ~/dotfiles/python/venv_minimal_requirements.txt
```

This ensured the latest versions of each packages listed in `~/dotfiles/python/venv_minimal_requirements.txt` were
downloaded and installed as the `--no-cache-dir` prevents using cached versions of packages.

### A smarter script

This served me well for a time, but occasionally I found I _didn't_ want to install _any_ packages in a new virtual
environment (most often when testing new branches using `mktmpenv`) and I'd have to remember to comment out the line in
the hook file (`~/.virtualenvs/postmkvirtualenv`) before creating the environment. Typically though I'd forget to do
this and would have to halt installation of required packages, deactivate the environment, _then_ comment it out and
create a new environment.

This quickly became irksome.

But `~/.virtualenvs/postmkvirtualenv` is just a script and so we can use a bit of scripting knowledge to make it
interactive and ask the user if they want to install the packages listed in `venv_minimal_requirements.txt`. I found a
really useful answer on StackOverflow in the [How do I prompt for yes/no/cancel input in a Linux shell
script](https://stackoverflow.com/a/226724/1444043) that showed several different ways to prompt the user for a response
as to whether they want to do something.

I therefore updated my
[`~/.virtualenvs/postmkvirtualenv`](https://gitlab.com/nshephard/dotfiles/-/blob/master/python/postmkvirtualenv?ref_type=heads)
to the following which prompts for a numeric response, `1` for `Yes` and `2` for `No` and takes the appropriate action,
installing using my original invocation of `pip` if I want to install packages and enter `1` or installing nothing if I
enter `2`.

```bash
#!/usr/bin/zsh
# This hook is sourced after a new virtualenv is activated.


echo "Do you wish to install minimal requirements (from venv_minimal_requirements.txt)? "
select yn in "Yes" "No"; do
  case $yn in
    Yes ) pip install --no-cache-dir -r ~/dotfiles/python/venv_minimal_requirements.txt; break;;
    No ) echo "No packages installed. install packages with 'pip'.\n"; break;;
  esac
done
```

**NB** You may want to tweak the opening shebang if you use the Bash shell.

## Drawbacks

There are a couple of drawbacks I've found to using using `virtualenvwrapper`.

The first is that `mkproject` doesn't allow nesting of project directories, you have to specify a single directory and
it will be created under the `$PROJECT_HOME` directory with the associated environment name. This doesn't work for me as
I use the structure `~/work/git` as the base but then have sub-directories based on the Git Forge
([GitHub](https://github.com)/[GitLab](https://gitlab.com)/[Codeberg](https://codeberg.org/)) the repository is
associated with and further nesting to reflect the user/organisation within as I have both a personal and work
accounts. E.g. `~/work/git/hub/ns-rse/ns-rse.github.io` which is the source
([github.com/ns-rse/ns-rse.github.io](https://github.com/ns-rse/ns-rse.github.io)) for my
[blog](https://blog.nshephard.dev) hosted in GitHub under my work account (`ns-rse`) or
`~/work/git/lab/nshephard/tcx2gpx` which is a project of mine ([tcx2gpx](https://pypi.org/project/tcx2gpx)) which is
[hosted on GitLab](https://gitlab.com/nshephard/tcx2gpx).

This means that if I wanted to create a project with `mkproject` based on `$PROJECT_HOME` being `/work/git` following
this structure I would specify `mkproject  git/lab/new_project` and whilst the directory is created, the virtual
environment is created as `git/lab/new_project` which is truncated to `git` and you can't `workon git` because the
activation scripts are nested deeper under `git/lab/new_project`. Further each environment I created would then
conflict. I could probably work around this by creating symbolic links but in practice I just use `mkvirtualenv` and
`setvirtualenvproject` after I `git clone` work.

This is a problem specifically of my own creation though and I can live with it/work around it.

Something other users might find causes greater friction is that `virtualenvwrapper` doesn't support creating and
keeping the virtual environments within the project directory itself. This is never something that I've wanted to do
myself though as I find it tidier to keep them all in one place and easier to find and remove obsolete environments.

## Conclusion

With [Anaconda](https://www.anaconda.com/) enforcing their licensing more strictly many at Universities and research
institutes where there are > 200 employees should look for an alternative solution for working with Python virtual
environments. There are many options including those provided by package development frameworks such as
[Hatch](https://hatch.pypa.io/latest/), [PDM](https://pdm-project.org/latest/) and [Poetry](https://python-poetry.org/)
but [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.io/en/latest/) is a viable option that has many neat
features, more than covered here, that make working with virtual environments straight-forward. The
[documentation](https://virtualenvwrapper.readthedocs.io/en/latest/) is excellent and worth reading in detail if this
introductory article has sparked your interest as there are more than options than those covered here.

**NB** This post is based on (and hopefully improves on) two earlier blogs made by the author...

+ [virtualenvwrapper](https://blog.nshephard.dev/posts/virtualenvwrapper/)
+ [virtualenvwrapper hooks](https://blog.nshephard.dev/posts/virtualenv-hooks/)

## Links

+ [Anaconda](https://www.anaconda.com/)
+ [Hatch](https://hatch.pypa.io/latest/)
+ [PDM](https://pdm-project.org/latest/)
+ [pipx](https://github.com/pypa/pipx)
+ [Poetry](https://python-poetry.org/)
+ [venv](https://docs.python.org/3/library/venv.html)
+ [virtualenv](https://virtualenv.pypa.io/en/latest/)
+ [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/)

[^1]: There is a wealth of information on what you can do with your `dotfiles` but that is an article in itself and I'm
    yet to write it. A useful set of different aliases you could use can be found
    [here](https://dotfiles.io/about/#introduction).
[^2]: Actually I create the script in
    [`~/dotfiles/python/postmkvirtualenv`](https://gitlab.com/nshephard/dotfiles/-/blob/master/python/postmkvirtualenv?ref_type=heads)
    and made a symbolic link at `~/.virtualenv/postmkvirtualenv` that points to it so that whenever I update or improve
    this script it is updated across my computers.
