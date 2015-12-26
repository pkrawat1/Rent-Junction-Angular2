module.exports = (grunt, appConfig) -> tasks:
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