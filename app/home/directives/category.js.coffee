
class ShowCategory extends Directive
  constructor: ->
    return {
      restrict: 'E'
      scope: category: '='
      templateUrl: 'home/directives/category.html'
    }