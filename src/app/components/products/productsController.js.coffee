'use strict'

class Products extends Controller
  constructor: ($scope, $state, ngProgressFactory, productsService) ->
    
    $scope.progressbar = ngProgressFactory.createInstance()
    $scope.progressbar.start()

    productsService($state.params.subCategoryId).success (data) ->
      $scope.products = data
      $scope.progressbar.complete()
    
    $scope.showProductDetails = (index)->
      $scope.selectedProduct = $scope.products[index]