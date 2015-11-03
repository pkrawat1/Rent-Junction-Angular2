# Request for Categories and subcategories

class Home extends Service
  constructor: ($http, CONSTANT) ->
    this.getCategories = ->
      #return  $http.get("app/config/categories.json")
      return  $http.get("#{CONSTANT.API_URL}categories")
              .then(
                (response) ->
                  return response.data
                (httpError) ->
                  throw httpError.status + " : " + httpError.data;
              )