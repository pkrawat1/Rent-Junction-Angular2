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

        element.on 'closed.zf.reveal', ->
          scope.$apply ->
            # Gives [scope alias, variable]
            arr = attrs.visible.split('.')
            scope.$parent[arr[0]][arr[1]] = false
        
    }