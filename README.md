# Backbone Skeleton App v0.3

A skeleton for your new Backbone app that provides everything you need just out-of-the-box.

## 1. How it's made

### 1.1 Grunt

Grunt is a Javascript task-runner and the main compiler tool of this skeleton app. You'll need to install it in order to build the product.

### 1.2 Backbone

All your scripts must be written using **Coffeescript**. The MVC can be found here:

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
    
Please note that only the **main.scss** file will be compiled, which means that every other sass file will need to be imported somewhere (like the main.scss file).

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

To compile the source code, you'll need npm (which comes with node.js), grunt, imagemagick and some other packages installed on the system.
You will also need **Ruby**, just because **Sass** is a Ruby Gem.
    
    # Sass gem (requires ruby)
    gem install sass
    
    # Install Homebrew (brew)
    ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
    
    # Install Imagemagick
    brew install imagemagick
    brew install graphicsmagick

    # Install Grunt (system-wise)
    npm install -g grunt-cli
    
    # Install Grunt plugins required by the app
    npm install .
    

#### Build the product
    
You can compile the sources by running
    
    $ grunt build
    
And everything will be compiled into the **build** folder.

#### Start a watch job for continuous deployment:
    
    $ grunt watch
    
By using the watch job, the build will be trigger automatically once you add/modify/delete a file from the **src** folder.


#### Build for release

To build the product for release, just use

    $ grunt build:release

#### Run the product

To run the product, open the application index file in your browser:

    $ open build/index.html

--

#### Deploy the product

To build the project for release and deploy it to a folder, use this syntax:
    
    $ grunt deploy:/path/to/dir
    
---

## 4. Development

#### 4.1 Boot and router

The application boot file is **src/coffee/boot.coffee** and as you can see it just creates a new instance of the router and it starts it.
The router file is **src/coffee/routes/router.coffee** and adding a new route is easy as follows:

First of all, add a new line specifying the route and the method to call:

    routes:
        '': 'home'

        # new route
        foo: 'bar'

Then, in the same file create the **bar** method as follows:

    bar: ->
        # Do your stuff here

Within a method, you will usually create a new instance of a view, render it, and then you will add the rendered element inside the DOM **#container**:

    bar: ->
        $('#container').html new MyView().render().el

---

#### 4.2 Creating your controller: the view
    
In Backbone, a view is what usually the Controller is in a **MVC** architecture.

Start by creating a **myview.coffee** file in the **src/views/** folder:

    class window.MyView extends Backbone.View

        initialize: -> 
        
        render: ->  
            @$el.html window.Tpl['foo'] {
                hello: 'world'
            }
        
            @

As you can see, the **render** method will fill up the **@$el** with the compiled template.

In backbone, the **@el** element is your view container, while the **@$el** is its **jQuery** object.

Remember to return the class instance at the end of the render method writing a **@** or **this** (which is the same).

The **foo** handlebar template used in the above example should be placed there:
    
    src/templates/foo.hbs
    
Some helpers for handlebars have been written; you can find all of them here: **src/coffee/helpers/handlebars.hbs**
