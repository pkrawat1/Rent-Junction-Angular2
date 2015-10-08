'use strict'
# Declare app level module which depends on views, and components
class App extends App then constructor: -> return [
  'ui.router'
  'home'
]

class Routes extends Config
  contructor: ($urlRouterProvider) ->
    $urlRouterProvider.otherwise '/home'