# RSE Website

Built with [Jekyll](https://jekyllrb.com/)

## Rules for adding contents

### Adding Blog Posts

* Blog posts are located in the `_posts` folder. 
* The file **MUST** be prepended with a date e.g. `2018-01-01-my-article-title.md`, otherwise they won't be picked up.
* In the **FrontMatter**:
    * `slug` - The varible MUST be set, this is used to generate the permalink of the post. It is done this way to retain backwards compatibility with the old website paths.

### Adding images to pages/posts (in Markdown)
* Images should normally be located in the `/assets/images` folder but you can make subfolders in `assets` or `images` itself to store static resource related to your particular event.  
* If you just want to simply add an image, try this before adding html:

    ```
    ![my desciption](/assets/images/my-image-path.png){: .img-fluid}
    ```

The `!` in front of the link indicates that it's an image. The `[my description]` will appear in your alt text. 
The site uses bootstrap and the `{: .img-fluid}` adds a css class `img-fluid` to make the image responsive.

### Adding Events
**Note** - Add a `/` at the end of your `permalink` path so that the page can be accessed even if your user does or does not put a `/` at the end of their path. E.g. `permalink: /mysection/2019-01-01-myevent/` will allow the page to be accessed at `https://rse.shef.ac.uk/mysection/2019-01-01-myevent/` **and** `https://rse.shef.ac.uk/mysection/2019-01-01-myevent`. 

* Event posts are located in the `_events` folder.
* The following **FrontMatter** variables can be set:
    * `category` - Tagname of the category that your event belongs to
    * `permalink` - If you have dedicated pages for each event category, use this to place the event's permalink in the correct page, e.g. for deep learning events at /training/deeplearning/, you might want to set the permalink as /training/deeplearning/2019-01-01-myevent/ 
    * `title` - Title of your event
    * `date` - Starting date with format: YYYY-MM-DD
    * `end-date` - **Optional** The end date for events that run over multiple days, with format: YYYY-MM-DD
    * `from` - Starting time with format: HH:MM
    * `to` - Ending time with format: HH:MM
    * `location`  - Location of your event
    * `eventbrite_id` - **Optional** The ID of your event on eventbrite. This will automatically include the eventbrite's ticket purchasing/registration widget
    * `tags` - searchable tags, (not implemented yet)

### Adding a new Event Category

#### Updating the rendering when listing individual events
* The list of categories can be found at  `/_data/event-categories.yml`
* Add your new category tag to the map, this corresponds to value of the `category` FrontMatter variable in your event page. 

#### Including events listing in your own events page
* Create a new page in the `/pages` folder
* Include the event listing in your page, you can add a category variable in the include to specify the category or multiple categories using comma separation:
    ```
    {% include events_list.html category="mycustomcat" %}
    ```

## Installation

1. Install ruby
    * On Windows, this installer can be used [https://rubyinstaller.org/](https://rubyinstaller.org/)
    * On Linux, follow the instructions according to your distribution e.g. for Debian/Ubuntu:
        ```
        sudo apt install ruby-full
        ```
1. In the terminal, install the rest of the required packages: 
   ```
   gem install bundler jekyll 
   ``` 
1. Go to the root directory of this site and run
    ```
    bundler install 
    ```

Note, if you get an error related to the `public_suffix` package, try installing and updating bundler before rebuilding the site:
```
gem install public_suffix --version 3.0.3
bundler update
```



## Building and previewing the site

* Run the following command to build the site and serve it up on a local server:
    ```
    bundler exec jekyll serve
    ```
* The website can then be found at `http://127.0.0.1:4000`
    


