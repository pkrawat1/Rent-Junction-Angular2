'use strict'

class App extends Run
  constructor: ($rootScope, CONSTANT, ENV)->
    $rootScope.api_url = ENV.apiEndpoint
    $rootScope.showModal = false
    toastr.options.positionClass= 'toast-bottom-right'