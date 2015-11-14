'use strict'

# Request for Categories and subcategories

class Home extends Service
  constructor: ($http, ENV) ->
    this.getCategories = ->
      #return  $http.get("app/config/categories.json")
      return  $http.get("#{ENV.apiEndpoint}/categories")
              .then(
                (response) ->
                  return response.data
                (httpError) ->
                  throw httpError.status + " : " + httpError.data;
              )