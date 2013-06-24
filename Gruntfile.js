/*
 * Squallstar's Backbone Skeleton
 * Author: Nicholas Valbusa (@squallstar)
 * https://github.com/squallstar/backbone-skeleton
*/

'use strict';

var mount = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.initConfig({

    clean: {
      all: ['build'],
      post_build: ['.sass-cache', 'npm-debug.log', 'build/js/tpl.js']
    },
    
    coffee: {      
      compileJoined: {
        options: {
          join: true
        },
        files: {
          'build/js/app.js': [
            'src/coffeescript/config/*.coffee',
            'src/coffeescript/core/*.coffee',
            'src/coffeescript/helpers/*.coffee',
            'src/coffeescript/models/*.coffee',
            'src/coffeescript/routes/*.coffee',
            'src/coffeescript/views/*.coffee',
            'src/coffeescript/collections/*.coffee',
            'src/coffeescript/*.coffee'
          ]
        }
      },
    },

    concat: {      
      libjs: {
        src: [
          'src/libs/js/jquery.js',
          'src/libs/js/underscore.js',
          'src/libs/js/backbone.js',
          'src/libs/js/handlebars.js'
        ],
        dest: 'build/libs/js/libs.js'
      },
      libcss: {
        src: [
          'src/libs/css/*.css',
        ],
        dest: 'build/libs/css/libs.css'
      },
      js: {
        src: [
          'build/js/app.js',
          'build/js/tpl.js'
        ],
        dest: 'build/js/app.js'
      }
    },
    
    copy: {
      build: {
        files: [
          {expand: true, cwd: 'src/', src: ['index.html'], dest: 'build/'},
          {expand: true, cwd: 'src/libs/img/', src: ['**'], dest: 'build/libs/img/'}
        ]
      },
      deploy: {
        files: [
          {expand: true, cwd: 'build/', src: ['**'], dest: '/path/to/folder/'}
        ]
      }
    },
    
    handlebars: {
      compile: {
        options: {
          namespace: "Tpl",
          processName: function(filename) {
            return filename.replace('src/templates/', '').replace('.hbs', '');
          }
        },
        files: {
          'build/js/tpl.js': ['src/templates/**/*.hbs']
        }
      }
    },

    sass: {
      build: {
        files: {
          'build/css/app.css' : 'src/sass/main.scss'
        }
      }
    },

    uglify: {
      release: {
        preserveComments : false,
        files: {
          'build/js/app.js': ['build/js/app.js'],
          'build/libs/js/libs.js': ['build/libs/js/libs.js']
        }
      }
    },

    watch : {
      src: {
        files: ['Gruntfile.js', 'src/**'],
        tasks: ['build'],
      },
    }
    
  });
  
  grunt.registerTask('build', [
    'clean:all',
    'coffee',
    'copy:build',
    'handlebars',
    'concat',
    'sass',
    'clean:post_build'
  ]);

  grunt.registerTask('build:release', [
    'build',
    'uglify:release'
  ]);

  grunt.registerTask('deploy', [
    'build:release',
    'copy:deploy'
  ]);
}