module.exports = function(grunt) {

  // configure the tasks
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    copy: {
      build: {
        cwd: 'src',
        src: [
          '**', '!**/*.styl', '!**/*.coffee', '!**/*.jade', '!partials',
          '!**/*test.js.coffee'
        ],
        dest: 'build',
        expand: true
      },
    },

    clean: {
      build: {
        src: [ 'build' ]
      },
      stylesheets: {
        src: [
          'build/**/*.css', 'build/**/*.scss', '!build/application.min.css' ,
          'build/**/*.map'
          ]
      },
      scripts: {
        src: [ 'build/**/*.js', '!build/*.cache.js']
      },
      app: {
        src: [
          'build/app', 'build/bower_components', 'build/**/*.map', 'build/partials'
          ]
      }
    },

    sass: {
      dist: {
        options: {
          loadPath: ['build/bower_components/foundation-sites/scss']
        },
        files: {
          'build/app.css' : ['build/app/app.css.scss']
        }
      }
    },

    cssmin: {
      build: {
        src: [
          //'build/bower_components/foundation-sites/dist/foundation.css',
          'build/app.css',
          'build/bower_components/ngprogress/ngProgress.css'
          ],
        dest: 'build/application.min.css'
      }
    },

    coffee: {
      build: {
        expand: true,
        cwd: 'build',
        src: [ '**/*.js.coffee', '!**/*test.js.coffee' ],
        dest: 'build',
        ext: '.js'
      }
    },

    ngClassify: {
      app: {
          files: [
              {
                  cwd: 'src',
                  src: [ '**/*.js.coffee' ],
                  dest: 'build',
                  expand: true
              }
          ],
          options: {
              appName: 'rntJuncApp'
          }
      }
    },

    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'environment',
      },
      // Environment targets
      development: {
        options: {
          dest: 'build/app/environment.js'
        },
        constants: {
          ENV: {
            name: 'development',
            apiEndpoint: 'http://localhost:3000/api/v1',
            fbClientId: '168712170148866'
          }
        }
      },
      production: {
        options: {
          dest: 'build/app/environment.js'
        },
        constants: {
          ENV: {
            name: 'production',
            apiEndpoint: 'https://rntjunc.herokuapp.com/api/v1',
            fbClientId: '168095963543820'
          }
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'build/bower_components/jquery/dist/jquery.js',
          'build/bower_components/what-input/what-input.js',
          'build/bower_components/foundation-sites/dist/foundation.js',
          'build/bower_components/angular/angular.js',
          'build/bower_components/angular-cookie/angular-cookie.js',
          'build/bower_components/ng-token-auth/dist/ng-token-auth.js',
          'build/bower_components/angular-ui-router/release/angular-ui-router.js',
          'build/bower_components/firebase/firebase.js',
          'build/bower_components/angularfire/dist/angularfire.js',
          'build/bower_components/ngprogress/build/ngprogress.js',
          'build/bower_components/gsap/src/uncompressed/TweenMax.js',
          'build/bower_components/ngFx/dist/ngFx.js',
          'build/bower_components/angular-animate/angular-animate.js',
          'build/bower_components/satellizer/satellizer.js',
          'build/bower_components/toastr/toastr.js',
          'build/app/appModule.js',
          'build/app/**/*.js'
        ],
        dest: 'build/application.min.js'
      }
    },

    jshint: {
      options: {
        reporter: 'node_modules/jshint-stylish',
        '-W064': true,
        '-W093': true
      },
      beforeconcat: ['build/app/**/*.js'],
    },

    uglify: {
      options: {
        banner: '/*! application.min.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'build/application.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    hashres: {
      // Global options
      options: {
        // Optional. Encoding used to read/write files. Default value 'utf8'
        encoding: 'utf8',
        // Optional. Format used to name the files specified in 'files' property.
        // Default value: '${hash}.${name}.cache.${ext}'
        fileNameFormat: '${hash}.${name}.cache.${ext}',
        // Optional. Should files be renamed or only alter the references to the files
        // Use it with '${name}.${ext}?${hash} to get perfect caching without renaming your files
        // Default value: true
        renameFiles: true
      },
      // hashres is a multitask. Here 'prod' is the name of the subtask. You can have as many as you want.
      prod: {
        // Specific options, override the global ones
        options: {
          // You can override encoding, fileNameFormat or renameFiles
        },
        // Files to hash
        src: [
          // WARNING: These files will be renamed!
          'build/application.min.css',
          'build/application.min.js',
          'build/templates.min.js'
          ],
        // File that refers to above files and needs to be updated with the hashed name
        dest: 'build/index.html',
      }
    },

    jade: {
      compile: {
        options: {
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '**/*.html.jade', '!**/_*.html.jade' ],
          dest: 'build',
          ext: '.html'
        }]
      }
    },

    html2js: {
      options: {
        watch: true,
        base: 'build',
        singleModule: true,
        useStrict: true,
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      main: {
        src: ['build/**/*.html', '!build/bower_components/**/*.html'],
        dest: 'build/templates.min.js'
      },
    },

    watch: {
      options: {
        livereload: true,
      },
      stylesheets: {
        files: ['src/**/*.css', 'src/**/*.scss'],
        tasks: [ 'build' ]
      },
      scripts: {
        files: 'src/**/*.coffee',
        tasks: [ 'build' ]
      },
      jade: {
        files: 'src/**/*.jade',
        tasks: [ 'build']
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '0.0.0.0'
        }
      }
    }

  });

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ng-classify');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-hashres');

  // define the tasks
  grunt.registerTask(
    'scripts',
    function (env){
      grunt.task.run(
        [ 
          'ngClassify', 'coffee', 'jshint:beforeconcat', 'ngconstant:' + env,
          'concat'
        ]
      )
      env === 'production' && grunt.task.run(['uglify'])
    } 
  );

  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'sass' , 'cssmin', 'clean:stylesheets']
  );

  grunt.registerTask(
      'build',
      function (env){
        env = env || 'development'
        grunt.task.run(
          [
            'clean:build', 'copy', 'stylesheets', 'scripts:' + env, 'jade',
            'html2js', 'hashres', 'clean:scripts', 'clean:app'
          ]
        )
      }
    );

  grunt.registerTask('serve', function (env) {
    env = env || 'development'
    grunt.task.run(
      [
        'build:' + env, 'connect', 'watch'
      ]
    );
  });
};

