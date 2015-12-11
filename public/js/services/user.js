app.factory('UserFactory', ['$http', '$q', function ($http, $q) {
    var factory = {
        user: false,
        getUser: function (username, password) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: app.server + '/api/authenticate',
                data: {username: username, password: password},
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                    console.log(str);
                    return str.join("&");
                }
            }).then(function successCallback(response) {
                console.log("Get User > ", response);
                var user = {};
                user._id = response.data.data._id;
                factory.user = user;
                deferred.resolve(factory.user);
            }, function errorCallback(response) {
                console.log(response);
                deferred.reject("Error get user");
            });
            return deferred.promise;
        },
        getUserProducts: function (username, password) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: app.server + '/api/user/products',
                data: {username: username, password: password},
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                    console.log("str",str);
                    return str.join("&");
                }
            }).then(function successCallback(response) {
                factory.user = response.data;
                deferred.resolve(factory.user);
            }, function errorCallback(response) {
                console.log(response);
                deferred.reject("Error get user");
            });
            return deferred.promise;
        },
        addProduct : function(product)
        {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: app.server + '/api/user/addProduct',
                data: {_id : this.user._id, product : product._id},
                dataType : 'json',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function successCallback(response) {
                deferred.resolve("Product added");
            }, function errorCallback(response) {
                deferred.reject("Error set Product");
            });
            return deferred.promise;
        },
        removeProduct : function(product, user)
        {
            console.log("user", user);
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: app.server + '/api/user/removeProduct',
                data: {_id : user._id, product : product._id},
                dataType : 'json',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function successCallback(response) {
                deferred.resolve("Product removed");
            }, function errorCallback(response) {
                deferred.reject("Error set Product");
            });
            return deferred.promise;
        }
    };
    return factory;
}]);
