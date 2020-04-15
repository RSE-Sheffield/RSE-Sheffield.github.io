# RSE-Sheffield Website

This repository contains the source for the RSE-Sheffield website, built with [Jekyll](https://jekyllrb.com/).

The website is hosted on GitHub Pages and can be found at [https://rse.shef.ac.uk](https://rse.shef.ac.uk).

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
   gem install bundler jekyll
   ```
3. Install other dependencies:
    ```sh
    cd path/to/clone/of/this/repo
    bundle config set path vendor/bundle
    bundle install
    ```

**Note:** if you get an error related to the `public_suffix` package, try installing and updating bundler before rebuilding the site:

```sh
gem install public_suffix --version 3.0.3
bundler update
```

### Updating Dependencies

Ensure ruby packages are up to date, to avoid differences between local and github/travis builds:

```sh
bundle update --all
```

### Serving a Local Copy of the Website

To build and serve a local copy of the website, run

```sh
bundle exec jekyll serve
```

The website can then be found at `http://127.0.0.1:4000`

### Building HTML files

```sh
bundle exec jekyll build
```

Generated HTML files can be found in `_site`.



## Writing Content

Content can be written in Markdown, reStructuredText or as HTML.

### Assets: Images, PDFs etc.

Resources such as images should be stored in the `assets` directory. E.g. `assets/images/image.png`.

This can then be included in your markdown file via:

```
![description of image](/assets/images/image.png){: .img-fluid}
```

This applies the `img-fluid` css class to the generate `<img>` element, to make the image responsive.

#### PDFs

PDFs or other very large binary files should be stored in an alternate repository, to avoid polluting the main website source with very large files.

##### Seminar-slides
For seminar content, use the [RSE-Sheffield/seminar-slides](https://github.com/RSE-Sheffield/seminar-slides) repository. Detailed instructions are provided in the README.md for how to add files, and how to link to them.

##### Others
Other files could be stored in an appropriate directory within `assets`, or alternatively another repository could be set up similar to [RSE-Sheffield/seminar-slides](https://github.com/RSE-Sheffield/seminar-slides).


### Linking to Local Content

Ideally link to other pages using either Jekyll's Liquid variables, relative or root-relative) links.

e.g. `[Target]({{site.url}}/target/page/)`, `[Target](target/page/)` or `[Target](/target/page/)`


Avoid absolute links such as `https://rse.shef.ac.uk/target/page/` which prevent local testing.



### Pages

The general website pages are stored in `pages/`, as Markdown or HTML files.

See the [Jekyll Docs /pages/](for https://jekyllrb.com/docs/pages/) for more information.

### Blog Posts

Blog posts are located in the `_posts` directory.

The filename **MUST** be prepended with a date (ISO 8601) e.g. `2018-01-01-foo-bar.md`.

Each blog post has a YAML *FrontMatter*, which **must** contain a `slug` (unique), `title`, `author`, and `date`.
Optional fields can also be included, such as `layout`, `category` (or `categories`), `tags` etc.
`image` is an optional field and will override the default image (RSE logo) for social cards. 

The YAML header should look something like:

```
---
slug: foo-bar
title: foo-bar
author: Baz
date: 2018-01-01 00:00:00
category:
tags:
image:
  path: /assets/images/logo/rse-logoonly-stroke.png
---
```

**Warning: GitHub will refuse to serve Jekyll sites that include funny characters (e.g. `&` or `@` in the `title:` YAML field unless the entire title is enclosed in double-quotes**, even though the Jekyll site will build locally without warnings.

### Events

Events are located in the `_events` directory.

Events have a YAML FrontMatter, which **must** include `category`, `date`, `from` and `to`.

The `category` variable classifies the type of event.
The list of existing categories can be found at `_data/event-categories.yml`.


Different categories of event may expect or make use of additional variables, such as `speaker`, `institute` and `title` for the `seminar` category. See other examples of the same category for further details.

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
| `eventbrite_id` | **Optional** The ID of your event on eventbrite. This will automatically include the eventbrite's ticket purchasing/registration widget |
| `tags`          | searchable tags, (not implemented yet) |

**Note** - Permalinks *should* end with a trailing `/` so the event can be accessed with or without the trailing `/`.
 E.g. `permalink: /mycategory/2019-01-01-myevent/` will allow the page to be accessed at `https://rse.shef.ac.uk/mycategory/2019-01-01-myevent/` **and** `https://rse.shef.ac.uk/mycategory/2019-01-01-myevent`.

### Event Categories

`_data/event-categories.yml` provides the details of existing event categories

Each category is identified with a unique key, such as `seminar`.
Categories should have an associated `image` representation and a `text` value for display.

i.e.

```
seminar:
    image: "/assets/images/icons/icons8-training-50.png"
    text: "Seminar"
```

To create a new category, add a new YAML element with a unique key to `_data/event-categories.yml`.

#### Creating a new category listing

To create a new page which lists all events of a given category:

1. Create a new page, i.e. `pages/newcategory.md`
2. Include the `event_list.html` template with the key from your new category:
    ```
    {% include events_list.html category="newcategory" %}
    ```

## Layout and Style

The structure of Jekyll websites are controlled through *Layouts*, found in `_layouts` directory which can be specified per-page in the YAML header.

Layouts (or pages) may reference *includes* which are re-usable sections of markup, found in `_includes`.

Style should primarily be controlled through CSS, both through the site theme and any custom CSS rules.
Custom CSS should be specified in `assets/css/custom.css`


### Table Formatting

Markdown tables generated by jekyll are not well-themed by the website theme / bootstrap by default, as classes need adding to the table to improve the formatting. This can be achieved in jekyll using a Kramdown feature as follows:


```
| Example | Table | A |
|---------|-------|---|
|       1 |     2 | 3 |
|       4 |     5 | 6 |
|       7 |     8 | 9 |
{:.table.table-bordered.table-striped.table-hovered}
```
