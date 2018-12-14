# RSE Website

Built with [Jekyll](https://jekyllrb.com/)

## Rules for adding contents

# Adding Blog Posts

* Blog posts are located in the `_posts` folder. 
* The file **MUST** be prepended with a date e.g. `2018-01-01-my-article-title.md`, otherwise they won't be picked up.

# Adding images to pages/posts (in Markdown)
* Images should normally be located in the `/assets/images` folder but you can make subfolders in `assets` or `images` itself to store static resource related to your particular event.  
* If you just want to simply add an image, try this before adding html:
    ```
    ![my desciption](/assets/images/my-image-path.png){: .img-fluid}
    ```

The `!` in front of the link indicates that it's an image. The `[my description]` will appear in your alt text. 
The site uses bootstrap and the `{: .img-fluid}` adds a css class `img-fluid` to make the image responsive.

## Installation

1. Install ruby
    * On Windows, this installer can be used [https://rubyinstaller.org/](https://rubyinstaller.org/)
    * On Linux 
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
    


