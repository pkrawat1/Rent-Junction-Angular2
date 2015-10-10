'use strict'

class HomeRoutes extends Config
  constructor: ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise '/home'
    $stateProvider
    .state 'home',{
      url: '/home'
      abstact: true
      templateUrl: 'templates/home.html'
    }

class Home extends Controller
  constructor: ($scope, categoriesService) ->
    window.scope = $scope
    categoriesService.success (data) ->
      $scope.categories = data.categories
    
    $scope.showSubCategories = (index)->
      $scope.selectedCategory = $scope.categories[index]