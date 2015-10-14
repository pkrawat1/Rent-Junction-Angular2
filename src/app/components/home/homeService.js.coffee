# Request for Categories and subcategories

class Home extends Service
  constructor: ($http) ->
    return $http.get(postCommentUrl = "app/config/categories.json")
      .success (data) ->
        data
      .error (err) ->
        err