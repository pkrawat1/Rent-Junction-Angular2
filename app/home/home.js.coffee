'use strict'
angular.module('myApp.home', [ 'ui.router' ]).config([
  '$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) ->
    console.log('here');
    $stateProvider
      .state 'home',{
        url: '/home',
        templateUrl: 'home/home.html'
      }
])
