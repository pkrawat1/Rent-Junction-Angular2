
class Home extends Controller
  constructor: ($scope, categoriesService) ->
    console.log('Home Controller')
    categoriesService.success (data) ->
      $scope.categories = data.categories
        