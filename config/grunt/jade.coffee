module.exports = (grunt, appConfig) -> tasks:
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