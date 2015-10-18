'use strict'

class Products extends Constant
  constructor: ->
    return {
      templatePath: (fileName)->
        "app/components/products/templates/#{fileName}"
    }