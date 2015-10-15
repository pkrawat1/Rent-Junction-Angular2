
class ShowProduct extends Directive
  constructor: ->
    return {
      restrict: 'E'
      scope: product: '='
      templateUrl: 'app/shared/product/productView.html'
    }