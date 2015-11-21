'use strict'

class Modal extends Directive
  constructor: ->
    return {
      templateUrl: 'app/shared/modal/modalView.html'
      restrict: 'E'
      transclude: true
      replace:true
      scope:true
      link: (scope, element, attrs) ->
        scope.title = attrs.title

        scope.$watch attrs.visible, (value) ->
          if value == true
            element.foundation('reveal','open')
          else
            element.foundation('reveal','close')

        $(element).on 'opened.fndtn.reveal', ->
          scope.$apply ->
            scope.$parent[attrs.visible] = true
        
        $(element).on 'closed.fndtn.reveal', ->
          scope.$apply ->
            scope.$parent[attrs.visible] = false
        
    }