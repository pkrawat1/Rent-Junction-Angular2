'use strict'

class Products extends Controller
  constructor: ($scope, $state, productsService) ->
  
    productsService($state.params.subCategoryId).success (data) ->
      $scope.products = data
    
    $scope.showProductDetails = (index)->
      $scope.selectedProduct = $scope.products[index]