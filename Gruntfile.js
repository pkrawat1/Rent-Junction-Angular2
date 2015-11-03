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
        src: [
          'build/**/*.js.coffee', 'build/bower_components',
          'build/application.js'
          ]
      },
    },

    sass: {
      dist: {
        files: {
          'build/app.css' : ['build/**/*.scss']
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'build/application.min.css': [ 'build/**/*.css' ]
        }
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

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'build/bower_components/angular/angular.js',
          'build/bower_components/angular-ui-router/release/angular-ui-router.js',
          'build/bower_components/firebase/firebase.js',
          'build/bower_components/angularfire/dist/angularfire.js',
          'build/bower_components/ngprogress/build/ngprogress.js',
          'build/bower_components/gsap/src/uncompressed/TweenMax.js',
          'build/bower_components/ngFx/dist/ngFx.js',
          'build/bower_components/angular-animate/angular-animate.js',
          'build/app/appModule.js',
          'build/app/**/*.js'
        ],
        dest: 'build/application.js'
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
          'build/application.min.js',
          'build/application.min.css'],
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

    watch: {
      options: {
        livereload: true,
      },
      stylesheets: {
        files: ['src/**/*.css', 'src/**/*.scss'],
        tasks: [ 'stylesheets' ]
      },
      scripts: {
        files: 'src/**/*.coffee',
        tasks: [ 'build' ]
      },
      jade: {
        files: 'src/**/*.jade',
        tasks: [ 'jade' , 'hashres']
      },
      copy: {
        files: [ 'src/**', '!src/**/*.styl', '!src/**/*.coffee', '!src/**/*.jade' ],
        tasks: [ 'copy' ]
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ng-classify');
  grunt.loadNpmTasks('grunt-hashres');

  // define the tasks
  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 
      'ngClassify', 'coffee', 'jshint:beforeconcat', 'concat', 'uglify',
      'clean:scripts'
    ]
  );

  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'sass' , 'cssmin', 'clean:stylesheets' ]
  );

  grunt.registerTask(
      'build', 
      'Compiles all of the assets and copies the files to the build directory.', 
      [ 'clean:build', 'copy', 'stylesheets', 'scripts', 'jade', 'hashres']
    );

  grunt.registerTask(
    'serve', 
    'Watches the project for changes, automatically builds them and runs a server.', 
    [ 'build', 'connect', 'watch' ]
  );
};