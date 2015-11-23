'use strict'

class Auth extends Controller
  constructor: ($scope, $auth, ngProgressFactory)->
    _auth = this
    _auth.signInModalStatus = false
    _auth.signUpModalStatus = false
    progressbar = ngProgressFactory.createInstance()

    _auth.toggleSignInModal = ->
      _auth.signInModalStatus = !_auth.signInModalStatus

    _auth.toggleSignUpModal = ->
      _auth.signUpModalStatus = !_auth.signUpModalStatus

    _auth.isAuthenticated = ->
      return $auth.isAuthenticated()

    _auth.authenticate = (provider)->
      progressbar.start()
      $auth.authenticate(provider)
        .then(
          ()->
            toastr.success('You have successfully signed in with ' + provider + '!')
            _auth.toggleSignInModal()
            progressbar.complete()
        )
        .catch(
          (error)->
            progressbar.complete()
            if error.error
              #Popup error - invalid redirect_uri, pressed cancel button, etc.
              toastr.error(error.error)
            else if error.data
              #HTTP response error from server
              toastr.error(error.data.message, error.status)
            else 
              toastr.error(error)
        )

    _auth.login = ->
      progressbar.start()
      $auth.login(_auth.user)
        .then(
          ()->
            toastr.success('You have successfully signed in!')
            _auth.toggleSignInModal()
            progressbar.complete()
        )
        .catch(
          (error)->
            progressbar.complete()
            toastr.error(error.data.message, error.status)
        )

    _auth.logout = ->
      return if not $auth.isAuthenticated()
      progressbar.start()
      $auth.logout()
        .then(
          ()-> 
            toastr.info('You have been logged out')
            progressbar.complete()
        )

    _auth.signup = ->
      progressbar.start()
      $auth.signup(_auth.user)
        .then(
          (response)->
            progressbar.complete()
            $auth.setToken(response)
            toastr.info('You have successfully created a new account and have been signed-in')
            _auth.toggleSignUpModal()
        )
        .catch(
          ()->
            progressbar.complete()
            toastr.error(response.data.message)
        )