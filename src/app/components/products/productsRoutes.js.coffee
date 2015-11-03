'use strict'

class ProductsRoutes extends Config
  constructor: ($stateProvider, $urlRouterProvider, PRODUCTS) ->
    
    $stateProvider
      .state('products',
        url: '/products/:subCategoryId'
        views:
          main: 
            templateUrl: PRODUCTS.templatePath('productsView.html')
      )
      .state('productDetail',
        url: '/product/:subCategoryId/:productId'
        views:
          main:
            templateUrl: PRODUCTS.templatePath('productDetailView.html')
      )