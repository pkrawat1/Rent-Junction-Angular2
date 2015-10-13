'use strict'

class Home extends Controller
  constructor: ($scope, homeService) ->
    window.scope = $scope
    homeService.success (data) ->
      $scope.categories = data
    
    $scope.showSubCategories = (index)->
      $scope.selectedCategory = $scope.categories[index]