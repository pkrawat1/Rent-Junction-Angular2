'use strict'

class ProductsRoutes extends Config
  constructor: ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise '/home'
    $stateProvider
    .state 'products',{
      url: '/products/:subCategoryId'
      abstact: true
      templateUrl: 'app/components/products/productsView.html'
    }