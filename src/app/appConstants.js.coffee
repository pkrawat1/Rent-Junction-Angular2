'use strict'

class Constant extends Constant
  constructor: ->
    return {
      API_URL: 'https://rntjunc.herokuapp.com/'
    }

class App extends Run
  constructor: ($rootScope, CONSTANT)->
    $rootScope.api_url = CONSTANT.API_URL