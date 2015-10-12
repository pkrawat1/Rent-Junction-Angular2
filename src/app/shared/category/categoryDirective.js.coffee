
class ShowCategory extends Directive
  constructor: ->
    return {
      restrict: 'E'
      scope: {
        category: '='
        selectedcategory: '='
      }
      templateUrl: 'app/shared/category/categoryView.html'
    }