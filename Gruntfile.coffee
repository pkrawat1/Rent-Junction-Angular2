module.exports = (grunt) ->
  grunt.initConfig
    typescript: base:
      src: [
        #'typings/tsd.d.ts'
        'src/**/*.ts',
      ]
      dest: 'build'
      options:
        target: 'ES5'
        module: 'commonjs'
        sourceMap: true
        experimentalDecorators: true
      watch: false
    
    clean:
      build:
        src: [ '!build/node_modules', 'build/**' ]

    copy:
      build:
        files: [{
            cwd: 'src'
            src: [ '**']
            dest: 'build'
            expand: true
          },
          {
            cwd: 'node_modules'
            src: [ '**']
            dest: 'build/node_modules'
            expand: true
          }
        ] 

    jade:
      compile:
        options:
          data: {}
        files: [{
          expand: true
          cwd: 'src'
          src: [ '**/*.jade' ]
          dest: 'build'
          ext: '.html'
        }]

    connect: 
      server: 
        options:
          port: 3000,
          base: 'build',
          hostname: '*'

    watch:
      jade:
        files: 'src/**/*.jade',
        tasks: [ 'jade' ]

  grunt.loadNpmTasks 'grunt-typescript'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.registerTask 'default', [ 'typescript', 'jade' ]
  grunt.registerTask 'build', [ 'clean', 'copy', 'jade', 'connect', 'watch']
