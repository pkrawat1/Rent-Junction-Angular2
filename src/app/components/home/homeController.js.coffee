'use strict'

class Home extends Controller
  constructor: ($scope, ngProgressFactory, homeService) ->
    _home = this
    
    progressbar = ngProgressFactory.createInstance()
    progressbar.start()

    homeService.success (data) ->
      progressbar.complete()
      _home.categories = data
    
    _home.showSubCategories = (index)->
      _home.selectedCategory = _home.categories[index]