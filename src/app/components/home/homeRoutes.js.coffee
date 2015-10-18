'use strict'

class HomeRoutes extends Config
  constructor: ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise '/home'
    $stateProvider
    .state 'home',{
      url: '/home'
      abstact: true
      views: 
        main: templateUrl: 'app/components/home/homeView.html'
    }