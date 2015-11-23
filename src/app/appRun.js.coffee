'use strict'

class App extends Run
  constructor: ($rootScope, CONSTANT, ENV, ngProgressFactory)->
    $rootScope.api_url = ENV.apiEndpoint
    $rootScope.showModal = false
    toastr.options.positionClass= 'toast-bottom-right'
    $rootScope.progressbar = ngProgressFactory.createInstance()