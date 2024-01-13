---
layout: post
title: "Python Packaging"
author: Neil Shephard
slug: 2023-09-18-python-packaging
date: 2023-09-18 12:00:00 UTC
tags: python linting
category:
link:
description:
social_image: /assets/images/python_packaging.jpg
type: text
excerpt_separator: <!--more-->
---

[Python](https://www.python/org) packaging is in a constant state of flux. There is the official [Python
Packaging User Guide](https://packaging.python.org/en/latest/) and the [Python Packaging
Authority (PyPA)](https://www.pypa.io/en/latest/) which is probably the best resource to read but things change, and often
quickly. The focus here is on the PyPA [Setuptools](https://setuptools.pypa.io/en/latest/index.html) using
`pyproject.toml` which works with Python \>= 3.7, but you may wish to consider other packages such as
[Poetry](index.qmd#poetry) or [PDM](index.qmd#PDM) which offer some advantages but with additional frameworks to learn.

<!--more-->

A few examples of Python packages that I have packaged are listed below, most have also been released to
[PyPI](https://pypi.org/).

- [TopoStats](https://github.com/AFM-SPM/TopoStats/) (professional)
- [clarity](https://github.com/claritychallenge/clarity) (professional)
- [pgfinder](https://github.com/Mesnage-Org/pgfinder) (professional)

## Package Structure

You should place your code within a Git version controlled directory for your project. It is then normal to place all
files in an organised hierarchy with a sub-directory of the same name for Python code, known as a \"flat\" structure and
tests under `tests` directory. It is possible to have more than one directory containing code but for now I\'m sticking
to the flat structure.

```bash
.
    ├── ./build
    ├── ./dist
    ├── ./
    ├── ./my_package
    ├── ./my_package/__init__.py
    ├── ./my_package/module_a.py
    ├── ./my_package/module_b.py
    ├── ./my_package/something/module_c.py
    └── ./tests
        ├── ./tests/conftest.py
        ├── ./tests/resources
        ├── ./tests/test_module_a.py
        ├── ./tests/test_module_b.py
        └── ./tests/something/test_module_c.py
```

### `__init__.py`

In older versions of Python (\<3.3) a `__init__.py` was required in every directory and sub-directory that was to be a
module/sub-module. In more recent versions of Python (\>\=3.3) they are not essential though as Python uses [namespace
packages](https://docs.python.org/3/reference/import.html#namespace-packages). But in most cases its simpler to include
such a file in the top level of your directory. `__init__.py` files can be completely empty or they can contain code
that is used throughout your package, such as setting up a logger.

## Configuration `pyproject.toml`

Package configuration has been and is in a state of flux, there was originally `setup.py` which was then complemented
and gradually replaced by `setup.cfg`. The new method which is being standardised is `pyproject.toml` which, with a
little tweaking and judicious choice of packages can handle everything.

Setuptools is shifting towards using `pyproject.toml` and whilst it is still under development its already
highly functional. It's written in [Tom\'s Obvious Minimal Language](https://toml.io/en/) and isn\'t too dissimilar in
structure to `setup.cfg`.

A useful reference for writing your configuration in `pyproject.toml` is [Configuring setuptools using pyproject.toml
files](https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html). It is based around [PEP 621 -- Storing
project metadata in pyproject.toml \| peps.python.org](https://peps.python.org/pep-0621/).

A bare-bones `pyproject.toml` file should reside in the top level of your directory with the following (**NB** This
includes the minimum versions and `setuptools_scm` extension for dynamically setting package version)...

### `build-system`

``` {.toml}
[build-system]
requires = ["setuptools>=65.6.3", "setuptools_scm[tools]>=6.2", "wheel"]
build-backend = "setuptools.build_meta"
```

### `project`

This is the main body of the project description detailing `name`, `authors`, `description`, `readme`, `license`, `keywords`,
`classifiers`, `dependencies` and `version` amongst other things.

The type of license you have chosen to apply to your package. For guidance see [Choose an Open Source
License](https://choosealicense.com/).

The `README` of your package which may be in [Markdown](https://www.markdownguide.org/) or Restructured Text.

Sets the components of your package which are set dynamically. In this example we only set the version dynamically using
`setuptools_scm`.

The `dependencies` are those that are required for running the code. They should not include packages that are required for
development (e.g. `black`. `flake8`, `ruff`, `pre-comit`, `pylint` etc.), nor those required for testing (e.g. `pytest`,
`pytest-regtest`, `pytest-cov` etc.), documentation (e.g. `Sphinx`, `numpydoc`, `sphinx_markdown_table`,
`sphinx-autodoc-typehints`, `sphinxcontrib-mermaid` etc.) as these are defined in a separate section.

Note that the `version` is _not_ explicitly stated, rather it is defined as being `dynamic`.

``` {.toml}
[project]
name = "my_package"
authors = [
  {name = "Author 1", email="author1@somewhere.com"},
  {name = "Author 2", email="author2@somewhere.com"},
  {name = "Author 3", email="author3@somewhere.com"},
]
description = "A package that does some magic!"
license = "GNU GPLv3 only"
readme = "README.md"
dynamic = ["version"]
dependencies = [
  "numpy",
  "pandas",
  "tqdm",
]
```

All other sections are considered subsections, either of `project` or `tool` and are defined under their own heading
with `[project|tool].<package>[.<options>]`.

#### `project.urls`

These are important as they define where people can find the `Source`, `Documentation` and `Bug_Tracker` amongst other
things. There may be more fields that can be configured here but I\'ve not used the yet. Substitute these to reflect
where your package is hosted, your username and the package name.

``` {.toml}
[project.urls]
Source = "https://gitlab.com/username/my_package"
Bug_Tracker = "https://gitlab.com/username/my_package/issues"
Documentation = "https://username.gitlab.com/my_package"
```

#### `project.optional-dependencies`

This is where you list dependencies that are not required for running a package but are required for different aspects
such as development, documentation, publishing to PyPI, additional Notebooks and so forth, the options are limitless.

``` {.toml}
[project.optional-dependencies]
dev = [
  "black",
  "flake8",
  "Flake8-pyproject",
  "pre-commit",
  "pylint",
  "ruff",
]
docs = [
  "Sphinx",
  "myst-parser",
  "numpydoc",
  "pydata_sphinx_theme",
  "sphinx-autodoc-typehints",
  "sphinx_markdown_tables",
  "sphinxcontrib-mermaid",
]
pypi = [
  "build",
  "pytest-runner",
  "setuptools-lint",
  "setuptools_scm",
  "twine",
  "wheel"
]
test = [
 "pytest",
 "pytest-cov",
]
notebooks = [
  "ipython",
  "ipywidgets",
  "jupyter_contrib_nbextensions",
  "jupyterthemes",
]
```

#### `project.scripts` (Entry Points)

Entry points or `scripts` are a neat method of providing a simple command line interface to your package that links
directly into a specific module to provide a command line interface to your programme.

These are defined under `project.scripts` section.

``` {.toml}
[project.scripts]
tcx2gpx = "tcx2gpx:process"
```

### `tool`

#### `tool.setuptools`

[setuptools](https://setuptools.pypa.io/en/latest/index.html) is perhaps the most common package for configuring Python
packages and is the one that is being exposed here. Its configuration is multi-level depending on which component you
are configuring.

##### `tool.setuptools.packages.find`

Uses the `find` utility to search for packages to include, based on my understanding it looks for `__init__.py` in a
directory and includes it (see above note about these no longer being required in every directory). Typically you would
want to exclude `tests/` from a package you are making as most users won't need to run the test suite (if they do they
would clone from the source repository).

``` {.toml}
[tool.setuptools.packages.find]
where = ["."]
include = ["topostats"]
exclude = ["tests"]
```

#### `tool.setuptools.package-data`

This allows additional, non `.py` files to be included, they are listed on a per package basis and are a table (in toml
parlance, list in Python terms).

``` {.toml}
  [tool.setuptools.packages-data]
  topostats = ["*.yaml", "*.json"]
```

#### `tool.pytest`

``` {.toml}
[tool.pytest.ini_options]
minversion = "7.0"
addopts = "--cov --mpl"
testpaths = [
    "tests",
]
filterwarnings = [
    "ignore::DeprecationWarning",
    "ignore::UserWarning"
]

```

#### `tool.black`

``` toml
[tool.black]
line-length = 120
target-version = ["py38", "py39", "py310", "py311"]
exclude = '''

(
  /(
      \.eggs         # exclude a few common directories in the
    | \.git          # root of the project
    | \.venv
  )/
)
'''
```

#### `tool.flake8`

The developers of Flake8 will not be supporting `pyproject.toml` for configuration. This is a shame but a work around is
available in the form of [Flake8-pyproject](https://github.com/john-hen/Flake8-pyproject). Make sure to add this to your
requirements section to ensure it is installed when people use `pre-commit`.

``` {.toml}
[tool.flake8]
ignore = ['E231', 'E241']
per-file-ignores = [
    '__init__.py:F401',
]
max-line-length = 120
count = true
```

#### `tool.setuptools_scm`

[setuptools_scm](https://github.com/pypa/setuptools_scm/) is a simple to use extension to setuptools that dynamically
sets the package version based on git tags and the version control data. It is important to note that by default
`setuptools_scm` will attempt to bump the version of the release. The following configuration forces the use of the
current `git tag`. See below for more on versioning.

``` {.toml}
[tool.setuptools_scm]
write_to = "topostats/_version.py"
version_scheme = "post-release"
local_scheme = "no-local-version"
git_describe_command = "git describe --tags"
```

#### `tool.ruff`

[ruff](https://github.com/charliermarsh/ruff) is a Python linter written in [Rust](https://www.rust-lang.org/) which is
therefore very fast. It provides the same functionality as `black`, `flake8` and `pylint` and can auto-correct many
issues if configured to do so. A [GitHub Actions](https://github.com/charliermarsh/ruff#usage) is also available. I\'d
recommend checking it out.

``` {.toml}
[tool.ruff]
fixable = ["A", "B", "C", "D", "E", "F", "R", "S", "W", "U"]
unfixable = []
```

## Versioning

Typically the version is defined in the `__version__` variable/object in the top-level `__init__.py` or as a value in
`[metadata]` of either `setup.cfg` or `pyproject.toml` but this has some downsides in that you have to remember to
update the string manually when you are ready for a release and it doesn\'t tie in with using tags in Git to tag
versions of your commits.

It is worth taking a moment to read and understand about [Semantic Versioning](https://semver.org/) which you are likely
to use when tagging versions of your software to work with `setuptools_scm`.

### Setuptools-scm

[setuptools_scm](https://github.com/pypa/setuptools_scm) is simpler to setup and use than
[versioneer](https://github.com/python-versioneer/python-versioneer) as it relies solely on configuration
via `pyproject.toml` rather than being dependent on now deprecated `setup.py`.

 As shown above you should have set the minimum versions of `"setuptools>=45"` and `"setuptools_scm[toml]>=6.2"`,
 `dynamic = ["version"]` under `project` and set the `write_to = "pkg/_version.py"` (**NB** substitute `pkg` for your
 package directory, whether its `src` or the package name).

``` {.python}
[build-system]
requires = ["setuptools>=65.6.3", "setuptools_scm[toml]>=6.2"]

[project]
dynamic = ["version"]

[tool.setuptools_scm]
write_to "pkg/_version.py"
version_scheme = "post-release"
local_scheme = "no-local-version"
git_describe_command = "git describe --tags"
```

#### Including Version in Sphinx Documentation

If you have Sphinx documentation you can add the following to ~docs/conf.py~

``` {.python}
from importlib.metadata import version
release = version("myproject")
version = ".".join(release.split(".")[:2])
```

## Building your Package

### Generate Distribution Archive

In your package directory you can create a distribution of your package with the latest versions of `setuptools` and
`wheel`. To do this in your virtual environment run the following. The documentation for how to do this is at [Building
and Distributing Packages with Setuptools](https://setuptools.pypa.io/en/latest/setuptools.html).

``` {.toml}
[build-system]
requires = [
  "setuptools >= 65.6.3",
  "wheel",
]
build-backend = "setuptools.build_meta"
```

The package can now be built locally with...

``` {.bash}
python -m pip install --upgrade setuptools wheel
python -m build --no-isolation
```

...and the resulting package will be generated in the `dist/` directory.

## Publishing to [PyPI](https://pypi.org)

Before pushing the package to the main PyPi server it is prudent to test things out on
[TestPyPI](https://test.pypi.org/) first. You must first generate an API Token from your account settings page. It needs
a name and the scope should be \`Entire account (all projects)\`. This token will be shown once so do **not** navigate
away from the page until you have copied it.

You use [twine](https://twine.readthedocs.io/en/latest/) to upload the package and should create a `.pypirc` file in the
root of the package directory that contains your API key and the username `__token__`. For the TestPyPI server it
follows the following format.

``` {.conf}
[testpypi]
  username = __token__
  password = pypi-dfkjh9384hdszfkjnkjahkjfhd3YAJKSHE0089asdf0lkjsjJLLS_-0942358JKHDKjhkljna39o854yurlaoisdvnzli8yw459872jkhlkjsdfkjhasdfadsfasdf
```

Once this is in place you are ready to use `twine` to upload the package using the configuration file you have just created.

``` {.bash}
twine upload --config-file ./.pypirc --repository testpypi dist/*
```

### Testing Download

After having uploaded your package to the TestPyPI server you should create a clean virtual environment and try
installing the package from where you have just uploaded it. You can do this using `pip` and the `--index-url` and
`--extra-index-url`, the former installs your package from TestPyPI, the later installs dependencies from PyPI.

``` {.bash}
pip install --index-url https://test.pypi.org/simple/ --extra-index-url https://pypi.org/simple/ your-package
```

Once installed you can try running the code, scripts or notebooks associated with the package as you would normally.

### Repeat for PyPI

Once you are happy this is working you can repeat the process on the main [PyPI](https://pypi.org) server. You can add
the token that you generate to `/.pypirc` under a separate heading.

``` {.conf}
[testpypi]
  username = __token__
  password = pypi-dfkjh9384hdszfkjnkjahkjfhd3YAJKSHE0089asdf0lkjsjJLLS_-0942358JKHDKjhkljna39o854yurlaoisdvnzli8yw459872jkhlkjsdfkjhdfJZZZZZF
[pypi]
  username = __token__
  password = pypi-dfkjh9384hdszfkjnkjahkjfhd3YAJKSHE0089asdf0lkjsjJLLS_-0942358JKHDKjhkljna39o854yurlaoisdvnzli8yw459872jkhlkjsdfkjhdfJZZZZZF
```

### GitHub Action

Manually uploading is somewhat time consuming and tedious. Fortunately though with `setuptools_scm` in place and tokens
generated we can automate the process of building and uploading packages to PyPI using the GitHub Action
[gh-action-pypi-publish](https://github.com/pypa/gh-action-pypi-publish) (read more about [GitHub
Actions](id:e19b6eb6-46b2-440a-ba35-be29feb33407)). You will have already generated a [PYPI
token](https://pypi.org/help/#apitoken) (and similarly one for [test PyPI](https://test.pypi.org)) and these can stored
on the projects GitHub account under _Settings \> Secrets \> Actions_ with the names `PYPI_API_TOKEN` and
`TEST_PYPI_API_TOKEN` respectively. You can then add the following GitHub Action under `.github/workflow/pypi.yaml`.

``` {.yaml}
name: Publish package to PyPi

on:
  push:
tags:
  - v*
jobs:
  build-release:
runs-on: ubuntu-latest
name: Publish package to PyPi
steps:
  - uses: actions/checkout@v3
    with:
      fetch-depth: 0
  - name: Setup Python
    uses: actions/setup-python@v4.3.0
    with:
      python-version: 3.9
      cache: 'pip'
  - name: Installing the package
    run: |
      pip3 install .
      pip3 install .[pypi]
  - name: Build package
    run: |
      python -m build --no-isolation
  - name: Publish package to PyPI
    uses: pypa/gh-action-pypi-publish@release/v1
    with:
      user: __token__
      password: ${{ secrets.PYPI_API_TOKEN }}
```

### Releasing via GitHub

With `setuptools_scm` in place and a [GitHub Action](id:5e1f167e-5c0c-4206-b2ac-6694e08524d8) setup and configured it is
now possible to make a release to PyPI via GitHub Releases.

1. Go to the Releases page (its linked from the right-hand side of the front-page).
2. Draft a New release.
3. Create a new tag using semantic versioning and select "_Create new tag v#.#.# on publish_".
4. Click the "_Generate Release Notes_" button, this adds all the titles for all Pull Requests, I\'ll often remove
    all these but leave the link to the `ChangeLog` that is generated for the release.
5. Write your release notes.
6. Select "_Set as latest release_".
7. Select "_Create a discussion for this releases_" and select "_Announcements_".
8. Click on "_Publish Release_".

## Packaging Frameworks

There are some frameworks that are meant to ease the pain of this process and make it easier. I\'m yet to test these for
two reasons. Firstly I wanted to understand what is going on rather than learn another framework. Secondly it was an
additional framework to learn.

### PDM

[PDM](https://pdm.fming.dev/latest/) (Python package and Dependency Manager) handles all stages of setting up and
creating a package and managing its dependencies. In essence its a tool for interactively generating the configuration
files described above. I\'ve not yet.

### Poetry

[Poetry](https://python-poetry.org/) is another package for managing packaging and dependencies. Again, I\'ve not yet
used it.

## Links

- [PyPA : Building and Distributing Packages with Setuptools](https://setuptools.pypa.io/en/latest/userguide/index.html)
- [PyPA : Specifications](https://packaging.python.org/en/latest/specifications/)
- [Packaging Python Projects](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
- [Python package structure information — pyOpenSci Python Packaging Guide](https://www.pyopensci.org/python-package-guide/package-structure-code/intro.html)
- [Packaging Data files in a Python Distribution](https://github.com/wimglenn/resources-example)
- [PDM - Python package and Dependency Manager](https://pdm.fming.dev/latest/)
- [Why you shouldn\'t invoke setup.py directly](https://blog.ganssle.io/articles/2021/10/setup-py-deprecated.html)
- [python-versioneer/python-versioneer: version-string management for VCS-controlled trees](https://github.com/python-versioneer/python-versioneer)
- [pypa/setuptools~scm~: the blessed package to manage your versions by scm tags](https://github.com/pypa/setuptools_scm)
- [rye one-shop-stop for Python](https://github.com/mitsuhiko/rye)
