# Request for Categories and subcategories

class Home extends Service
  constructor: ($http) ->
    this.getCategories = ->
      return  $http.get("app/config/categories.json")
              #return $http.get("http://localhost:3000/categories")
              .then(
                (response) ->
                  return response.data
                (httpError) ->
                  throw httpError.status + " : " + httpError.data;
              )