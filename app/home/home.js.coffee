'use strict'

class App extends App('home') then constructor: -> return []

class Home extends Config('home')
  constructor: ($stateProvider) ->
    $stateProvider
    .state 'home',{
      url: '/home',
      templateUrl: 'home/home.html'
    }