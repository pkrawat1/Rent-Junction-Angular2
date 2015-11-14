class Products extends Service
  constructor: ($http, ENV) ->
    this.getProducts = (subCategoryId)->
      #return  $http.get("app/config/products.json")
      return  $http.get("#{ENV.apiEndpoint}/products/#{subCategoryId}")
              .then(
                (response) ->
                  return response.data
                (httpError) ->
                  throw httpError.status + " : " + httpError.data;
              )