'use strict'

class HomeRoutes extends Config
  constructor: ($stateProvider, $urlRouterProvider) ->
    console.log('HomeRoutes')
    $urlRouterProvider.otherwise '/home'
    $stateProvider
    .state 'home',{
      url: '/home',
      templateUrl: 'home/home.html'
    }