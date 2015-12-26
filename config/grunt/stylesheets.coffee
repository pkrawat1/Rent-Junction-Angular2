module.exports = (grunt, appConfig) -> tasks:
  sass: 
    dist:
      options:
        loadPath: [ 'bower_components/foundation-sites/scss' ]
      files: 
        'build/app.css': [ 'src/app/app.css.scss' ]

  cssmin:
    build:
      src: appConfig.stylesheets
      dest: 'build/application.min.css'