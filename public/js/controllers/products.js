app.controller('ProductListCtrl', function ($scope, $mdDialog, $mdMedia, ProductsFactory) {

    $scope.emptyList = "Aucun produits";
    ProductsFactory.getProducts().then(function (result) {
        $scope.products = [];
        for (item in result) {
            var product = result[item];
            product.sex = '-';
            product.name = result[item].nom;
            product.category = result[item]["catégorie"];
            product.img = result[item].url;
            product.brand = result[item].marque;
            product.price = result[item].prix;
            product.details = result[item].comment;
            $scope.products.push(product);
        }
    });
    $scope.fields = [
        {name: 'Visuel', width: '10'},
        {name: 'Nom', width: '10'},
        {name: 'Ref', width: '5'},
        {name: 'Sexe', width: '10'},
        {name: 'CatÃ©gorie', width: '15'},
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