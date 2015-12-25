module.exports = (grunt) ->
  grunt.initConfig
    ts:
      default :
        src: ["build/**/*.ts"],
        options:
          target: "ES5"
          module: "system"
          moduleResolution: "node"
          sourceMap: true
          experimentalDecorators: true
          removeComments: false
          noImplicitAny: false
    
    clean:
      build:
        src: [ 'build' ]
      ts:
        src: ['build/**/*.ts']
      jade:
        src: ['build/**/*.jade']

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
            src: [
              'es6-shim/es6-shim.js'
              'angular2/bundles/angular2-polyfills.js'
              'systemjs/dist/system.src.js'
              'typescript/lib/typescript.js'
              'rxjs/bundles/Rx.js'
              'angular2/bundles/angular2.dev.js'
            ]
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

    concat:
      options: separator: ';'
      dist:
        src: [
          'node_modules/es6-shim/es6-shim.js'
          'node_modules/angular2/bundles/angular2-polyfills.js'
          'node_modules/systemjs/dist/system.src.js'
          'node_modules/typescript/lib/typescript.js'
          'node_modules/rxjs/bundles/Rx.js'
          'node_modules/angular2/bundles/angular2.dev.js'
        ]
        dest: 'build/lib.min.js'

    uglify:
      options: banner: '/*! lib.min.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      dist: files: 'build/lib.min.js': [ '<%= concat.dist.dest %>' ]

  grunt.loadNpmTasks("grunt-ts")
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify');

  #Scripts
  grunt.registerTask 'scripts', []

  grunt.registerTask 'templates', [
    'jade', 'clean:jade'
  ]

  grunt.registerTask 'build', ['clean', 'copy', 'scripts', 'templates', 'connect', 'watch']