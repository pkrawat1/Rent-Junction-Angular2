'use strict'

class Modal extends Directive
  constructor: ->
    return {
      template: 'app/shared/modal/modalView.html'
      restrict: 'E'
      transclude: true
      replace:true
      scope:true
    }