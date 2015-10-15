class Products extends Service
  constructor: ($http) ->
    return products = (subCategoryId)->
      $http.get("app/config/products.json")
      #$http.get("http://localhost:3000/products/#{subCategoryId}")
        .success (data) ->
          data
        .error (err) ->
          err