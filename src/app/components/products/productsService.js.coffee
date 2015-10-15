class Products extends Service
  constructor: ($http) ->
    #return $http.get("app/config/products.json")
    return products = (subCategoryId)->
      $http.get("http://localhost:3000/products/#{subCategoryId}")
        .success (data) ->
          data
        .error (err) ->
          err