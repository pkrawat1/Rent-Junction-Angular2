class Products extends Service
  constructor: ($http) ->
    this.getProducts = (subCategoryId)->
      return  $http.get("app/config/products.json")
              #$http.get("http://localhost:3000/products/#{subCategoryId}")
              .then(
                (response) ->
                  return response.data
                (httpError) ->
                  throw httpError.status + " : " + httpError.data;
              )