# Backbone Skeleton App v0.2

A skeleton for your new Backbone app that provides everything you need just out-of-the-box.

## 1. How it's made

### 1.1 Grunt

Grunt is the app compiler that takes care of everything. You'll need to install it in order to build the product.

### 1.2 Backbone

All you scripts must be written using **Coffeescript**. The MVC can be found here:

    src/coffee/
    
Feel free to use **jQuery** and **Underscore.js** as you like as they're both included.

### 1.3 Handlebars

Template engine, the templates can be found here:

    src/templates/
    
The templates will be compiled by trimming the **.hbs** extension from their paths as follows:

    src/templates/foo/bar.hbs
    
Will be available as:

    window.Tpl['foo/bar']
    
### 1.4 Sass

Source files are located here:

    src/sass
    
Please note that only the **main.scss** file will be compiled, which means that every other sass file will need to be imported somewhere (like the main.scc file).

### 1.5 Images sprite

Every PNG file contained into the **src/sprites** will be used to build a single sprite image file, plus the CSS to use that image will be automatically prepended to the application main css file. You can use the images simply like this:

    src/sprites/foobar.png
    
    .sprite-foobar

Normal images will be copied from the **src/img/** folder to **build/img/**.

---

## 2. App Config file

The config file can be found here:

    src/config/<environment>/config.js
    
The environment (**development** or **release**) will be chosen automatically by **Grunt** once you compile the source code.

---

## 3. Getting started

To compile the source code, you'll need npm (which comes with node.js), grunt, imagemagick and some other packages installed on the system:

    npm install -g grunt-cli
    
    npm install grunt-contrib-clean --save-dev
    npm install grunt-contrib-coffee --save-dev
    npm install grunt-contrib-concat --save-dev
    npm install grunt-contrib-copy --save-dev
    npm install grunt-contrib-handlebars --save-dev
    npm install grunt-contrib-sass --save-dev
    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-watch --save-dev
    
    brew install imagemagick
    brew install graphicsmagick
    npm install gm
    npm install grunt-spritesmith


#### Build the product
    
You can compile the sources by running
    
    grunt build
    
And everything will be compiled into the **build** folder.

#### Start a watch job for continuous deployment:
    
    grunt watch
    
By using the watch job, the build will be trigger automatically once you add/modify/delete a file from the **src** folder.


#### Build for release

To build the product for release, just use

    grunt build:release

#### Run the product

To run the product, open the application index file in your browser:

    build/index.html