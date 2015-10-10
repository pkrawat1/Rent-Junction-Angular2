
class ShowCategory extends Directive
  constructor: ->
    return {
      restrict: 'E'
      scope: {
        category: '='
        selectedcategory: '='
      }
      templateUrl: 'templates/category.html'
    }