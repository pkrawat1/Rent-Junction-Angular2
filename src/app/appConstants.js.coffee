'use strict'

class Constant extends Constant
  constructor: ->
    return {
    }

class App extends Run
  constructor: ($rootScope, CONSTANT, ENV)->
    $rootScope.api_url = ENV.apiEndpoint
    $rootScope.showModal = false