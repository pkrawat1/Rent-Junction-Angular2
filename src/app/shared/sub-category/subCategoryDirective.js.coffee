
class ShowSubCategory extends Directive
  constructor: ->
    return {
      restrict: 'E'
      scope: subcategory: '='
      templateUrl: 'app/shared/sub-category/subCategoryView.html'
    }