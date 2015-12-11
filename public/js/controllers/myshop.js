app.controller("MyShopCtrl", function($scope, UserFactory, $mdDialog, $mdMedia)
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
    $scope.removeProduct = function(product, index)
    {
        UserFactory.removeProduct(product, $scope.user).then(function (result) {
            $scope.products.splice(index, 1);
            console.log("Product removed !");   
        });
    }

    $scope.goToProduct = function (product, event) {
        $scope.product = product;
        $mdDialog.show({
            controller: ProductCtrl,
            templateUrl: 'views/preview_product.html',
            parent: angular.element(document.body),
            targetEvent: event,
            scope: $scope.$new(),
            clickOutsideToClose: true,
            fullscreen: $mdMedia('sm') && $scope.fullscreen
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
        $scope.$watch(function () {
            return $mdMedia('sm');
        }, function (sm) {
            $scope.fullscreen = (sm === true);
        });
    };
});