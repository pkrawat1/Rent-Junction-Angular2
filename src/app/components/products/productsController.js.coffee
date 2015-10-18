'use strict'

class Products extends Controller
  constructor: ($scope, $state, ngProgressFactory, productsService) ->
    
    $scope.progressbar = ngProgressFactory.createInstance()
    $scope.productId = $state.params.productId
    
    # Get all Products for Sub-category
    $scope.progressbar.start()
    productsService($state.params.subCategoryId).success (data) ->
      $scope.products = data
      $scope.progressbar.complete()
      showProductDetails() if $scope.productId != undefined
    
    showProductDetails = ->
      $scope.selectedProduct = $scope.products[$scope.productId]