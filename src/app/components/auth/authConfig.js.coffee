'use strict'

class Auth extends Config
  constructor: ($authProvider, ENV)->
    $authProvider.baseUrl = ENV.apiEndpoint
    $authProvider.facebook clientId: ENV.fbClientId
    $authProvider.google clientId: '475928403802-1n865bvi1gj82baluf5pbsm4abopq653.apps.googleusercontent.com'