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

  #Scripts
  grunt.registerTask 'scripts', ['ts', 'clean:ts']

  grunt.registerTask 'templates', [
    'jade', 'clean:jade'
  ]

  grunt.registerTask 'build', ['clean:build', 'copy', 'scripts', 'templates', 'connect', 'watch']