
class ShowSubCategory extends Directive
  constructor: ->
    return {
      restrict: 'E'
      scope: subcategory: '='
      templateUrl: 'home/directives/sub-category.html'
    }