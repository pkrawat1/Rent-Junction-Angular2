
class ShowSubCategory extends Directive
  constructor: ->
    return {
      restrict: 'E'
      scope: subcategory: '='
      templateUrl: 'templates/sub-category.html'
    }