'use strict'

class Auth extends Controller
  constructor: ($scope, $auth)->
    _auth = this

    _auth.isAuthenticated = ->
      return $auth.isAuthenticated()

    _auth.authenticate = (provider)->
      $auth.authenticate(provider)
        .then(
          ()->
            toastr.success('You have successfully signed in with ' + provider + '!')
        )
        .catch(
          (error)->
            if error.error
              #Popup error - invalid redirect_uri, pressed cancel button, etc.
              toastr.error(error.error);
            else if error.data
              #HTTP response error from server
              toastr.error(error.data.message, error.status);
            else 
              toastr.error(error);
        )

    _auth.login = ->
      $auth.login($scope.user)
        .then(
          ()->
            toastr.success('You have successfully signed in!')
        )
        .catch(
          (error)->
            toastr.error(error.data.message, error.status)
        )

    _auth.logout = ->
      return if not $auth.isAuthenticated()
      $auth.logout()
        .then(
          -> 
            toastr.info('You have been logged out')
        )