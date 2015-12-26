module.exports = (grunt) ->

  # Load grunt tasks automatically
  require("load-grunt-tasks") grunt

  # Time how long tasks take. Can help when optimizing build times
  require("time-grunt") grunt

  # Configurable paths for the application
  appConfig=
    config:
      src: "config/grunt/*"

    app: 
      path: require("./bower.json").appPath or "src"
      dist: "dist"
      test: "test"
      tmp: ".tmp"

    scripts:
      libs: [
          'node_modules/es6-shim/es6-shim.js'
          'node_modules/angular2/bundles/angular2-polyfills.js'
          'node_modules/systemjs/dist/system.src.js'
          'node_modules/typescript/lib/typescript.js'
          'node_modules/rxjs/bundles/Rx.js'
          'node_modules/angular2/bundles/*.dev.js'
        ]
      app: [
        'build/boot.js'
        'build/app/components/{,*/}{,*/}*.js'
        'build/app/shared/{,*/}{,*/}*.js'
      ]
      
    stylesheets: [
      'build/app.css'
      'bower_components/ngprogress/ngProgress.css'
    ]

  # Define the configuration for all the tasks
  configs = require("load-grunt-configs") grunt, appConfig

  grunt.initConfig configs

  grunt.loadNpmTasks("grunt-ts")
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-hashres');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  #Scripts
  grunt.registerTask 'scripts', [
    'ts', 'clean:ts'#, 'concat'
    ]

  grunt.registerTask 'stylesheets', [
    'sass', 'cssmin', 'clean:scss'
  ]

  grunt.registerTask 'templates', [
    'jade', 'clean:jade', 'hashres'
  ]

  grunt.registerTask 'build', ['clean:build', 'copy', 'scripts', 'stylesheets', 'templates', 'connect', 'watch']