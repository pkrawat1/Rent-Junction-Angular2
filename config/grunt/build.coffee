module.exports = (grunt, appConfig) -> tasks:
  clean:
    build:
      src: [ 'build' ]
    ts:
      src: ['build/**/*.ts']
    jade:
      src: ['build/**/*.jade']
    scss:
      src: ['build/app.css', 'build/app.css.map', 'build/**/*.scss', 'build/app/scss', 'build/*.cache.css']

  copy:
    build:
      files: [{
          cwd: 'src'
          src: [ '**']
          dest: 'build'
          expand: true
        },
        {
          src: appConfig.scripts.libs
          dest: 'build'
          expand: true
        }
      ]
    ts: 
      files:[
        cwd: 'src'
        src: [ '**/*.ts']
        dest: 'build'
        expand: true
      ]

  connect: 
    server: 
      options:
        port: 4000,
        base: 'build',
        hostname: '*'

  watch:
    options:
      livereload: true
    jade:
      files: 'src/**/*.jade',
      tasks: ['stylesheets', 'templates']
    ts:
      files: 'src/**/*.ts'
      tasks: [ 'copy:ts', 'scripts' ]
