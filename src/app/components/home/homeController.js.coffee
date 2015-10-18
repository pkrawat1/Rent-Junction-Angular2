'use strict'

class Home extends Controller
  constructor: ($scope, ngProgressFactory, homeService) ->
    
    $scope.progressbar = ngProgressFactory.createInstance()
    $scope.progressbar.start()

    homeService.success (data) ->
      $scope.progressbar.complete()
      $scope.categories = data
    
    $scope.showSubCategories = (index)->
      $scope.selectedCategory = $scope.categories[index]