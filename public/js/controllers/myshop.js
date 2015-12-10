app.controller("MyShopCtrl", function($scope, UserFactory)
{
    console.log(UserFactory);
    $scope.products = [];
    $scope.emptyList = "Mon shop est vide";
    UserFactory.getUser("Carl", "pass").then(function(result)
    {
       console.log(result);
    });
});