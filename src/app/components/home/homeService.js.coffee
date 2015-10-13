# Request for Categories and subcategories

class Home extends Service
  constructor: ($http) ->
    return $http.get(postCommentUrl = "https://rntjunc.firebaseio.com/categories.json")
      .success (data) ->
        data
      .error (err) ->
        err