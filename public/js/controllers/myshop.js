app.controller("MyShopCtrl", function($scope, UserFactory)
{
    $scope.products = [];
    $scope.emptyList = "Mon shop est vide";
    UserFactory.getUser("paul", "pass").then(function(result)
    {
        console.log("User > ", result);
        $scope.user = result;
    });

    UserFactory.getUserProducts("paul", "pass").then(function(result)
    {
        $scope.products = result;
    });
    $scope.fields = [
        {name: 'Visuel', width: '10'},
        {name: 'Nom', width: '10'},
        {name: 'Ref', width: '5'},
        {name: 'Catégorie', width: '15'},
        {name: 'Marque', width: '15'},
        {name: 'Prix', width: '5'},
        {name: 'Description', width: '30'}
    ];
    $scope.removeProduct = function(product)
    {
        UserFactory.removeProduct(product).then(function (result) {
            console.log("Product removed !");
        });
    }
});