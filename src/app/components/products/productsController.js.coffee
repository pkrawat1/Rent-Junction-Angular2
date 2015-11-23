'use strict'

class Products extends Controller
  constructor: ($scope, $state, $rootScope, productsService) ->
    _products = this
    _products.productId = $state.params.productId
    subCategoryId = $state.params.subCategoryId

    progressbar = $rootScope.progressbar
    
    # Get all Products for Sub-category
    progressbar.start()
    productsService.getProducts(subCategoryId).then (data) ->
      _products.products = data
      progressbar.complete()
      showProductDetails() unless _products.productId is undefined
    
    showProductDetails = ->
      _products.selectedProduct = _products.products[_products.productId]