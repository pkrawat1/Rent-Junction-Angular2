'use strict'

class HomeRoutes extends Config
  constructor: ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise '/home'
    $stateProvider
    .state 'home',{
      url: '/home'
      abstact: true
      templateUrl: 'home/home.html'
    }

class Home extends Controller
  constructor: ($scope, categoriesService) ->
    window.scope = $scope
    categoriesService.success (data) ->
      $scope.categories = data.categories
    
    $scope.showSubCategories = (index)->
      $scope.category = $scope.categories[index]