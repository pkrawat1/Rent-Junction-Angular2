# Request for Categories and subcategories

class Home extends Service
  constructor: ($http) ->
    #return $http.get("app/config/categories.json")
    return $http.get("http://localhost:3000/categories")
      .success (data) ->
        data
      .error (err) ->
        err