class Products extends Service
  constructor: ($http, CONSTANT) ->
    this.getProducts = (subCategoryId)->
      #return  $http.get("app/config/products.json")
      return  $http.get("#{CONSTANT.API_URL}products/#{subCategoryId}")
              .then(
                (response) ->
                  return response.data
                (httpError) ->
                  throw httpError.status + " : " + httpError.data;
              )