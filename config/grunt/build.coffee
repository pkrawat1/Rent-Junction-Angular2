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
          src: appConfig.scripts.libs
          dest: 'build'
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
    options:
      livereload: true
    jade:
      files: 'src/**/*.jade',
      tasks: [ 'jade' ]
    ts:
      files: 'src/**/*.jade'
      tasks: ['ts']
