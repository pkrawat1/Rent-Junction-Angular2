'use strict'

class Thumbnail extends Filter
  constructor: ->
    return (imageUrl, modifiers) ->
      imageUrl && imageUrl.replace('upload', "upload/#{modifiers}")