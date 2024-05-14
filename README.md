# RSE-Sheffield Website

This repository contains the source for the RSE-Sheffield website, built with [Jekyll](https://jekyllrb.com/).

The website is hosted on GitHub Pages and can be found at [https://rse.shef.ac.uk](https://rse.shef.ac.uk), and mirrored
at [https://rse.sheffield.ac.uk](https://rse.sheffield.ac.uk) by
[RSE-Sheffield/rse.sheffield.ac.uk](https://github.com/RSE-Sheffield/rse.sheffield.ac.uk).

All content (excluding logos or where explicitly stated) licensed under the
<a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
   target="_blank"
   rel="license noopener noreferrer"
   style="display:inline-block;">
CC BY-SA 4.0
<img
   style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
   src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img
   style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
   src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img
   style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
   src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a>
license.

## Development

### Install Dependencies

1. Install Ruby
    * On Windows, this installer can be used [https://rubyinstaller.org/](https://rubyinstaller.org/)
    * On Linux, follow the instructions according to your distribution e.g. for Debian/Ubuntu:

        ```sh
        sudo apt install ruby-full
        ```

2. Install `bundler` (via a terminal):

   ```sh
   gem install bundler
   ```

3. Install other dependencies:

    ```sh
    cd path/to/clone/of/this/repo
    bundle config set path vendor/bundle
    bundle install
    ```

**Note:** if you get an error related to the `public_suffix` package, try installing and updating bundler before
rebuilding the site:

```sh
gem install public_suffix --version 3.0.3
bundler update
```

### Updating Dependencies

Ensure ruby packages are up to date, to avoid differences between local and GitHub/GitHub Actions builds:

```sh
bundle update --all
```

### Serving a Local Copy of the Website

To build and serve a local copy of the website, run

```sh
bundle exec jekyll serve
```

The website can then be found at `http://127.0.0.1:4000`

Note that if you are running Ruby 2.7 then you [will see lots of deprecation warnings until Jekyll 4.1 is
released](https://github.com/jekyll/jekyll/pull/7948#issuecomment-584132037).

### Building HTML files

```sh
bundle exec jekyll build
```

Generated HTML files can be found in `_site`.

## Writing Content

Content can be written in Markdown, reStructuredText or as HTML.

### Assets: Images, PDFs etc

Resources such as images should be stored in the `assets` directory. E.g. `assets/images/image.png`.

This can then be included in your markdown file via:

```markdown
![description of image](/assets/images/image.png){: .img-fluid}
```

This applies the `img-fluid` css class to the generate `<img>` element, to make the image responsive.

#### PDFs

PDFs or other very large binary files should be stored in an alternate repository, to avoid polluting the main website
source with very large files.

##### Seminar-slides

For seminar content, use the [RSE-Sheffield/seminar-slides](https://github.com/RSE-Sheffield/seminar-slides)
repository. Detailed instructions are provided in the README.md for how to add files, and how to link to them.

##### Others

Other files could be stored in an appropriate directory within `assets`, or alternatively another repository could be
set up similar to [RSE-Sheffield/seminar-slides](https://github.com/RSE-Sheffield/seminar-slides).

### Linking to Local Content

Ideally link to other pages using either Jekyll's Liquid variables, relative or root-relative) links.

e.g. `[Target]({{site.url}}/target/page/)`, `[Target](target/page/)` or `[Target](/target/page/)`

Avoid absolute links such as `https://rse.shef.ac.uk/target/page/` which prevent local testing.

### Pages

The general website pages are stored in `pages/`, as Markdown or HTML files.

See the [Jekyll Docs /pages/](https://jekyllrb.com/docs/pages/) for more information.

### Staff Pages

Staff pages contain biographies of current and alumni (previous) members of the team. There are a few key fields that
require careful attention to when adding a new member or updating details of those who have left the team.

The header of each Markdown file is written in [yaml](https://yaml.org) with intuitive and self-explanatory fields
names.

#### New Members

When adding a new member a new Markdown file should be created under
`RSE-Sheffield.github.io/_people/<forename>-<surname>.md` with the following example YAML header.

```yaml
---
alumnum: false
level: 2
published: true

othernames: <forename>
surname: <surname>
role: <role>
---
```

Most fields required for the header are self-explanatory. One key field is that of `level` which should be completed
according to the level of appointment as detailed in the table below.

| Level | Description                       |
|:-----:|:----------------------------------|
| 0     | Head of Department                |
| 1     | Senior Research Software Engineer |
| 2     | Research Software Engineer        |
| 3     | Junior Research Software Engineer |

Details of alumni of the RSE team are kept and this is defined by the `alumnum` field. Whilst a member of the team this
should be `false` and their profile will be listed under _Contact > RSE TEAM_, but after having left the team it should
be `true` which means their details will be listed under _Contact > Alumni_.

### Blog Posts

Blog posts are located in the `_posts` directory.

The filename **MUST** be prepended with a date (ISO 8601) e.g. `2018-01-01-foo-bar.md`.

Each blog post has a YAML _FrontMatter_, which **must** contain a `slug` (unique), `title`, `author`, `date` and
`excerpt_separator`.
Optional fields can also be included, such as `layout`, `category` (or `categories`), `tags` etc.
`image` is an optional field and will override the default image (RSE logo) for social cards.

The YAML header should look something like:

```yaml
---
slug: foo-bar
title: foo-bar
author: Baz
date: 2018-01-01 00:00:00
excerpt_separator: <!--more-->
category:
tags:
social_image: /assets/images/logo/rse-logoonly-stroke.png
---
```

The `excerpt_separator` defines a token, which when placed in the blog post causes the remainder of the post to be
omitted from blog post previews shown around the website (e.g. the [blog](https://rse.shef.ac.uk/blog/). It is
recommended that blog posts account for the excerpt by having the first paragraph/s act as an introduction to the blog
post's content. If `excerpt_separator` is not included in the front-matter, the first line-break will be treated as the
end of the excerpt, the suggested seperator `<!--more-->` is a html comment so will not be visible within blog posts.

**Warning: GitHub will refuse to serve Jekyll sites that include funny characters (e.g. `&` or `@` in the `title:` YAML
field unless the entire title is enclosed in double-quotes**, even though the Jekyll site will build locally without
warnings.

**Warning: Social Card images [cannot be
SVGs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image)**.

### Events

Events are located in the `_events` directory.

Events have a YAML FrontMatter, which **must** include `category`, `date`, `from` and `to`.

The `category` variable classifies the type of event.
The list of existing categories can be found at `_data/event-categories.yml`.

Different categories of event may expect or make use of additional variables, such as `speaker`, `institute` and `title`
for the `seminar` category. See other examples of the same category for further details.

The following are some of the  **FrontMatter** variables which can be set:

| Category        | Description |
|-----------------|-------------|
| `category`      | Tagname of the category that your event belongs to |
| `permalink`     | If you have dedicated pages for each event category, use this to place the event's permalink in the correct page, e.g. for deep learning events at `/training/deeplearning/`, you might want to set the permalink as `/training/deeplearning/2019-01-01-myevent/`  |
| `title`         | Title of your event |
| `date`          | Starting date with format: `YYYY-MM-DD` |
| `end-date`      | **Optional** The end date for events that run over multiple days, with format: YYYY-MM-DD |
| `from`          | Starting time with format: HH:MM |
| `to`            | Ending time with format: HH:MM |
| `location`      | Location of your event |
| `tags`          | searchable tags, (not implemented yet) |

**Note** - Permalinks _should_ end with a trailing `/` so the event can be accessed with or without the trailing `/`.
 E.g. `permalink: /mycategory/2019-01-01-myevent/` will allow the page to be accessed at
 `https://rse.shef.ac.uk/mycategory/2019-01-01-myevent/` **and**
 `https://rse.shef.ac.uk/mycategory/2019-01-01-myevent`.

### Event Categories

`_data/event-categories.yml` provides the details of existing event categories

Each category is identified with a unique key, such as `seminar`.
Categories should have an associated `image` representation and a `text` value for display.

i.e.

```yaml
seminar:
    image: "/assets/images/icons/icons8-training-50.png"
    text: "Seminar"
```

To create a new category, add a new YAML element with a unique key to `_data/event-categories.yml`.

Events with categories: `workshop`, `carpentry`, `dltraining` and `gitzerohero` are included in the list on the training
page.

#### Creating a new category listing

To create a new page which lists all events of a given category:

1. Create a new page, i.e. `pages/newcategory.md`
2. Include the `event_list.html` template with the key from your new category:

    ```liquid
    {% include events_list.html category="newcategory" %}
    ```

### Adding/editing info re RSE team projects

Each project listed in [`_data/projects.csv`](_data/projects.csv) should have a description in a markdown file in the
[`_project_descriptions/`](_project_descriptions/) folder. The markdown file must be named identically to the text in
the key column of `projects.csv`.

The following project data (and metadata) are to be populated in `projects.csv`:

| Field | Description | Mandatory |
| - | - | - |
| ID | Project ID from [RSE Admin](https://rseadmin.shef.ac.uk/) | No |
| key | A code that links this table to the markdown file containing the full project description. | Yes |
| title | Project title used in RSE Admin. | Yes |
| long_title | A descriptive project title. | Yes |
| tech_methods | Technology and methods used in the project including programming languages. Each item in this list should be separated by a comma and a space. | Yes |
| rses | Comma seperated list of RSEs involved (`firstname` `lastname`). | Yes |
| start | Project start date `dd/mm/yyyy` | Yes |
| end | Project end date `dd/mm/yyyy`; leave as the empty string if ongoing | No |
| department | Collaborator department. | Yes |
| level | Priority level for display - currently set to 1 if project has a description, 2 if not. | No |
| show | Set to 1 if the project is to be displayed, 0 if not. | No |

Project descriptions are to be written in markdown with a header containing the project key:

```yaml
---
key: <key>
---
```

The text should address the following:

* A general description of the project, its aims and objectives, link to project website (if available).
* What does / did the RSE collaboration add to the project?
* Current and planned project outputs linked to RSE contribution (e.g. GitHub link, papers, talks).
* Project impact beyond software (societal benefits, policy change, improved media output, financial / business, public
  engagement, health benefits).

## Layout and Style

The structure of Jekyll websites are controlled through _Layouts_, found in `_layouts` directory which can be specified
per-page in the YAML header.

Layouts (or pages) may reference _includes_ which are re-usable sections of markup, found in `_includes`.

Style should primarily be controlled through CSS, both through the site theme and any custom CSS rules.
Custom CSS should be specified in `assets/css/custom.css`

### Table Formatting

Markdown tables generated by jekyll are not well-themed by the website theme / bootstrap by default, as classes need
adding to the table to improve the formatting. This can be achieved in jekyll using a Kramdown feature as follows:

```markdown
| Example | Table | A |
|---------|-------|---|
|       1 |     2 | 3 |
|       4 |     5 | 6 |
|       7 |     8 | 9 |
{:.table.table-bordered.table-striped.table-hovered}
```

### Enabling page redirects

Sometimes you want to change the name or permalink of a page.
A Jekyll plugin has been enabled to help with that: you can create redirects to a page by adding something like the
following to the page's YAML header:

```yaml
redirect_from:
  - /events/some-page-that-might-not-exist.html
```

## Linting

[pre-commit](https://pre-commit.com) hooks have been added to the repository (2023-07-22) and are configured in
`.pre-commit-config.yaml`. Basic `pre-commit` hooks to check YAML files, trailing whitespace and end of files are
included along with a 8Mb file limit on large files. In addition the
[markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) hook is also enabled to lint Markdown. It is
configured using the `.markdownlint-cli2.yaml` configuration file. A full list of the
[rule/aliases](https://github.com/DavidAnson/markdownlint#rules--aliases) serves as a reference for the style/linting
that is applied to committed files. The hook is configured to fix errors automatically where possible.

[pre-commit.ci](https://pre-commit.ci) configuration has also been included so linting can be applied to pull-requests
and the test will fail if errors have not been corrected locally when making your commits. This has the added advantage
that the `.pre-commit-config.yaml` will be kept up-to-date when new versions of hooks are released.

### pre-commit

Installing and configuring `pre-commit` locally is relatively straight-forward. A useful reference is [pre-commit :
Protecting your future self](https://rse.shef.ac.uk/blog/pre-commit/). You will need `pre-commit` installed on your
system. Many Linux distributions include this in their package repository and it is available in Homebrew for OSX. For
Windows systems you will have to use a virtual environment (and of course you can use a virtual environment under
Linux/OSX too if desired).

Once you have installed `pre-commit` on your system you need to enable it and install the configured hooks for this
repository.

``` bash
cd ~/path/to/RSE-Sheffield.github.io
pre-commit install --install-hooks
```

This will download the necessary virtual environment for running each of the hooks. You are now done, each `git commit`
you now make will first run `pre-commit` to check the files that you are adding conform to the [linting
rules](https://github.com/DavidAnson/markdownlint#rules--aliases). If there are errors the commit will fail, where
possible `markdownlint-cli2` will correct these and you will have unstaged changes that need staging and committing. This
is not always possible, if for example there is a [MD045 -
no-alt-text](https://github.com/DavidAnson/markdownlint/blob/main/doc/md045.md) error which means there is no `alt-text`
description for an included image. You will have to correct such errors manually and then stage the changes.

### markdownlint-cli2

Some of the rules may be considered undesirable, for example Jekyll allows in-line html and it is widely used across
files. For this reason a number of rules are disabled.

### Retrospective Linting

When enabling `pre-commit` and `markdownlint-cli2` an attempt was made to check and lint the existing pages using
`pre-commit run --all-files`. A large number of errors were found, some more common than others e.g. [MD013 - line
length](https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md) was the most common. Mindful of not wanting
to break the web-site it was decided _not_ to fix these automatically. A summary of the number of each problem found
across all files is given below.

``` bash
 pre-commit run --all-files | awk -F " M" '{ print "M" $2 }' | awk -F "/" '{ print $1 }' | sort | uniq -c
      7 MD001
     71 MD007
     19 MD009
    552 MD012
   2023 MD013
      2 MD018
      2 MD019
     25 MD022
      2 MD023
     44 MD024
     44 MD025
      4 MD028
      2 MD029
      1 MD030
      5 MD031
     20 MD032
     66 MD033
      3 MD034
     69 MD036
      1 MD038
      1 MD039
     31 MD040
     42 MD041
      1 MD042
      8 MD045
      5 MD047
      8 MD051
     24 MD052
      3 MD053
```

A few files (`LICENSE.md`, `README.md`, `404.md`, `CNAME`, `rst_to_md.sh`) were however modified and included. If
retrospective linting is to be undertaken be mindful that the `git blame` will be associated with whoever makes the
changes. This can be avoided by adding the commit to the `.git-blame-ignore-revs` file which means `git` and GitHub will
ignore the blame for any commits listed in that file. For more on ignoring blame revisions see [Who's to
blame?](https://rse.shef.ac.uk/blog/git-blame/).

## Deployment and Mirroring

This website is deployed to [`rse.shef.ac.uk`](https://rse.shef.ac.uk) via GitHub pages using `GitHub Actions`.
The `.github/workflows/publish.yaml` workflow is triggered by pushes to `master`, or `workflow_dispatch` events on this repository.

When this workflow successfully deploys the website, it also triggers a deployment to
[`rse.sheffield.ac.uk`](https://rse.sheffield.ac.uk), by triggering the
[RSE-Sheffield/rse.sheffield.ac.uk](https://github.com/RSE-Sheffield/rse.sheffield.ac.uk) repositories
[`.github/workflows/mirror.yaml`](https://github.com/RSE-Sheffield/rse.sheffield.ac.uk/actions/workflows/mirror.yaml)
workflow via `gh`.
This requires a fine-grained PAT with `actions: read and write` permissions for actions events, storing in a repository
secret `SHEFFIELD_MIRROR_TOKEN`.
The token will need periodically renewing.

The mirror CI workflow can also be manually triggered if needed, by selecting `Run workflow` on
[github.com/RSE-Sheffield/rse.sheffield.ac.uk/actions/workflows/mirror.yaml](https://github.com/RSE-Sheffield/rse.sheffield.ac.uk/actions/workflows/mirror.yaml). This
should not be necessary, but may be required if the PAT expires or API errors occur.

### GitHub Settings

* Enable Github pages, with `GitHub Actions` as the source.
* Set the `custom domain` to `rse.sheffield.ac.uk`
* Wait up to 24 hours, then enable `Enforce HTTPS`
* a user with privileges must [Generate a fine-grained PAT](https://github.com/settings/tokens?type=beta) with
  * an appropriate name, description and expiration period
  * the `RSE-Sheffield` org as the Resource Owner
  * Access to `Only select repositories`, selecting `RSE-Sheffield/rse.sheffield.ac.uk`
  * Grant `Read and write` permissions for `Actions`
  * Save the PAT to an [action repository
    secret](https://github.com/RSE-Sheffield/RSE-Sheffield.github.io/settings/secrets/actions) named
    `SHEFFIELD_MIRROR_TOKEN`
  * The token/secret will need renewing periodically.
