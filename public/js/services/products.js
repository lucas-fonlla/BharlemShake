app.factory('ProductsFactory', ['$http', '$q', function ($http, $q) {
    var factory = {
        products: false,
        getProductById : function(id)
        {
            var deferred = $q.defer();
            $http.get(app.server + "/api/products/" + id)
                .success(function(data, status) {
                    factory.products = data;
                    deferred.resolve(factory.products);
                })
                .error(function(data, status) {
                    deferred.reject("Error get products by id");
                });
            return deferred.promise;
        },
        getProducts : function()
        {
            var deferred = $q.defer();
            $http.get(app.server + "/api/products/")
                .success(function(data, status) {
                    factory.products = data;
                    deferred.resolve(factory.products);
                })
                .error(function(data, status) {
                    deferred.reject("Error get products");
                });
            return deferred.promise;
        }
    };
    return factory;
}]);
