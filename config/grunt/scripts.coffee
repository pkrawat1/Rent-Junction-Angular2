module.exports = (grunt, appConfig) -> tasks:
  ts:
    default :
      src: ["build/app/bootstrap.ts"]
      outFile: 'build/bootstrap.js'
      options:
        target: "ES5"
        module: "system"
        moduleResolution: "node"
        sourceMap: true
        experimentalDecorators: true
        emitDecoratorMetadata: true
        removeComments: true
        noImplicitAny: false

  concat:
    options:
      separator: ';'
      stripBanners: true
    libs:
      src: appConfig.scripts.libs
      dest: 'build/libs.min.js'
    app:
      src: appConfig.scripts.app
      dest: 'build/application.min.js'

  uglify:
    libs:
      options:
        banner: '/*! libs.min.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      files: 
        'build/libs.min.js': [ '<%= concat.libs.dest %>' ]
    app:
      options:
        banner: '/*! application.min.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      files: 
        'build/application.min.js': [ '<%= concat.app.dest %>' ]

  hashres:
    options:
      encoding: 'utf8'
      fileNameFormat: '${hash}.${name}.cache.${ext}'
      renameFiles: true
    prod:
      options: {}
      src: [
        'build/application.min.css'
        'build/application.min.js'
        'build/libs.min.js'
        'build/templates.min.js'
      ]
      dest: 'build/index.html'