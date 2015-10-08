module.exports = function(grunt) {

  // configure the tasks
  grunt.initConfig({

    copy: {
      build: {
        cwd: 'app',
        src: [ '**', '!**/*.styl', '!**/*.coffee', '!**/*.jade', '!partials' ],
        dest: 'build',
        expand: true
      },
    },

    clean: {
      build: {
        src: [ 'build' ]
      },
      stylesheets: {
        src: [ 'build/**/*.css', 'build/**/*.scss', '!build/application.css' , 'build/**/*.map']
      },
      scripts: {
        src: [ 'build/**/*.js.coffee', '!build/application.js' ]
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
          'build/application.css': [ 'build/**/*.css' ]
        }
      }
    },

    coffee: {
      build: {
        expand: true,
        cwd: 'build',
        src: [ '**/*.js.coffee' ],
        dest: 'build',
        ext: '.js'
      }
    },

    ngClassify: {
      app: {
          files: [
              {
                  cwd: 'app',
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

    uglify: {
      build: {
        options: {
          mangle: false
        },
        files: {
          'build/application.js': [ 'build/**/*.js' ]
        }
      }
    },

    jade: {
      compile: {
        options: {
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'app',
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
        files: ['app/**/*.css', 'app/**/*.scss'],
        tasks: [ 'stylesheets' ]
      },
      scripts: {
        files: 'app/**/*.coffee',
        tasks: [ 'scripts' ]
      },
      jade: {
        files: 'app/**/*.jade',
        tasks: [ 'jade' ]
      },
      copy: {
        files: [ 'app/**', '!app/**/*.styl', '!app/**/*.coffee', '!app/**/*.jade' ],
        tasks: [ 'copy' ]
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '*'
        }
      }
    }

  });

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ng-classify');

  // define the tasks
  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 'ngClassify', 'coffee', 'clean:scripts']//, 'uglify']
  );

  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'sass' , 'cssmin', 'clean:stylesheets' ]
  );

  grunt.registerTask(
      'build', 
      'Compiles all of the assets and copies the files to the build directory.', 
      [ 'clean:build', 'copy', 'stylesheets', 'scripts', 'jade']
    );

  grunt.registerTask(
    'default', 
    'Watches the project for changes, automatically builds them and runs a server.', 
    [ 'build', 'connect', 'watch' ]
  );
};