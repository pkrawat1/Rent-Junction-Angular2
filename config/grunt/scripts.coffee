module.exports = (grunt, appConfig) -> tasks:
  ts:
    default :
      src: ["build/boot.ts"]
      outFile: 'build/boot.js'
      options:
        target: "ES5"
        module: "system"
        moduleResolution: "node"
        sourceMap: true
        experimentalDecorators: true
        emitDecoratorMetadata: true
        removeComments: false
        noImplicitAny: false

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