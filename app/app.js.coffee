'use strict'
# Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router'
  'myApp.home'
]).config [
  '$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise '/home'
    return
]