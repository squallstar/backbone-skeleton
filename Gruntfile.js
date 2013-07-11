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
  grunt.loadNpmTasks('grunt-spritesmith');
  
  grunt.initConfig({

    clean: {
      all: ['.sass-cache', 'build'],
      post_build: ['.sass-cache', 'npm-debug.log', 'build/.tmp']
    },
    
    coffee: {      
      compileJoined: {
        options: {
          join: true
        },
        files: {
          'build/.tmp/app.js': [
            'src/coffee/core/*.coffee',
            'src/coffee/helpers/*.coffee',
            'src/coffee/models/*.coffee',
            'src/coffee/routes/*.coffee',
            'src/coffee/views/*.coffee',
            'src/coffee/collections/*.coffee',
            'src/coffee/*.coffee'
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
          'build/.tmp/config.js',
          'build/.tmp/app.js',
          'build/.tmp/tpl.js'
        ],
        dest: 'build/js/app.js'
      }
    },
    
    copy: {
      development: {
        files: [
          {expand: true, cwd: 'src/config/development/', src: ['config.js'], dest: 'build/.tmp/'},
        ]
      },

      release: {
        files: [
          {expand: true, cwd: 'src/config/release/', src: ['config.js'], dest: 'build/.tmp/'},
        ]
      },

      build: {
        files: [
          {expand: true, cwd: 'src/', src: ['index.html'], dest: 'build/'},
          {expand: true, cwd: 'src/libs/img/', src: ['**'], dest: 'build/libs/img/'},
          {expand: true, cwd: 'src/img/', src: ['**'], dest: 'build/img/'}
        ]
      },
      deploy: {
        files: [
          {expand: true, cwd: 'build/', src: ['**'], dest: '<%= deployPath %>'}
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
          'build/.tmp/tpl.js': ['src/templates/**/*.hbs']
        }
      }
    },

    sass: {
      development: {
        files: {
          'build/css/app.css' : [
            'build/.tmp/sprite.css',
            'src/sass/main.scss'
          ]
        },
        options: {
          style: 'expanded'
        }
      },
      release: {
        files: {
          'build/css/app.css' : [
            'build/.tmp/sprite.css',
            'src/sass/main.scss'
          ]
        },
        options: {
          style: 'compressed'
        }
      }
    },

    sprite: {
        build: {
            src: ['src/sprites/*.png'],
            destImg: 'build/img/sprite.png',
            destCSS: 'build/.tmp/sprite.css',
            imgPath: '../img/sprite.png',
            algorithm: 'left-right',
            engine: 'gm',
            'engineOpts': {
              'imagemagick': true
            },
            cssOpts: {
              cssClass: function (item) {
                return '.sprite-' + item.name;
              }
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
    'sprite',
    'coffee',
    'copy:development',
    'copy:build',
    'handlebars',
    'sass:development',
    'concat',
    'clean:post_build'
  ]);

  grunt.registerTask('build:release', [
    'clean:all',
    'sprite',
    'coffee',
    'copy:release',
    'copy:build',
    'handlebars',
    'sass:release',
    'concat',
    'clean:post_build',
    'uglify:release'
  ]);

  grunt.registerTask('deploy', 'Builds the app for release and deploys it to the provided destination path',
    function(where) {
      if (!where) {
        grunt.log.writeln('Please provide the deploy path: grunt deploy:/path/to/dir');
        return false;
      }
      grunt.config.set('deployPath', where);
      grunt.task.run(['build:release', 'copy:deploy']);
    }
  );

  grunt.registerTask('default', ['build']);
}
