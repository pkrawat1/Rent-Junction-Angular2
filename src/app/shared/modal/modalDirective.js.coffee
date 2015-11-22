'use strict'

class Modal extends Directive
  constructor: ()->
    return {
      templateUrl: 'app/shared/modal/modalView.html'
      restrict: 'E'
      transclude: true
      replace:true
      scope:true
      link: (scope, element, attrs) ->
        $(document).foundation()
        scope.title = attrs.title

        scope.$watch attrs.visible, (value) ->
          if value == true
            element.foundation('open')
          else
            element.foundation('close')

        element.on 'open.zf.Reveal', ->
          scope.$apply ->
            scope.$parent[attrs.visible] = true
        
        element.on 'closed.zf.Reveal', ->
          scope.$apply ->
            scope.$parent[attrs.visible] = false
        
    }