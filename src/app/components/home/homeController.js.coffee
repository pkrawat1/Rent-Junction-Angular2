'use strict'

class Home extends Controller
  constructor: ($scope, $rootScope, homeService) ->
    _home = this
    
    progressbar = $rootScope.progressbar
    progressbar.start()
    
    homeService.getCategories().then (data) ->
      progressbar.complete()
      _home.categories = data
    
    _home.showSubCategories = (index)->
      _home.selectedCategory = _home.categories[index]