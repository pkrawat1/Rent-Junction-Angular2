
class ShowProduct extends Directive
  constructor: ->
    return {
      restrict: 'E'
      scope:
        product: '=product'
        index: '=index'
      templateUrl: 'app/shared/product/productView.html'
    }