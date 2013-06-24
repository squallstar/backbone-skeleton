# Backbone Skeleton

This skeleton is using the following stack and libs:

- Grunt
- Backbone and Underscore
- Handlebars
- Coffeescript
- Sass
- Also included: Responsive Bootstrap, jQuery

To compile the source code, you'll need grunt and some npm packages installed on the system:

    npm install -g grunt-cli
    npm install grunt-contrib-clean --save-dev
    npm install grunt-contrib-coffee --save-dev
    npm install grunt-contrib-concat --save-dev
    npm install grunt-contrib-copy --save-dev
    npm install grunt-contrib-handlebars --save-dev
    npm install grunt-contrib-sass --save-dev
    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-watch --save-dev
    
Then, you can compile the source by running
    
    grunt build
    
And everything will be compiled into the **build** folder.
You can also run a watch job using
    
    grunt watch
    
By using the watch job, the build will be trigger automatically once you add/modify/delete a file from the **src** folder.

To build the product for release, just use

    grunt build:release

And open the index file on your favorite browser:

    build/index.html