'use strict'

class Home extends Controller
  constructor: ($scope, homeService) ->
  
    homeService.success (data) ->
      $scope.categories = data
    
    $scope.showSubCategories = (index)->
      $scope.selectedCategory = $scope.categories[index]