app.controller('ProductListCtrl', function ($scope, $mdDialog, $mdMedia, ProductsFactory, UserFactory) {

    UserFactory.getUser("paul", "pass").then(function(result)
    {
        console.log(result);
    });
    $scope.products = [];
    $scope.emptyList = "Aucun produit";
    ProductsFactory.getProducts().then(function (result) {
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
    $scope.addProduct = function (product) {
        UserFactory.addProduct(product).then(function (result) {
            console.log("Product added !");
        });
    };
});

function ProductCtrl($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}