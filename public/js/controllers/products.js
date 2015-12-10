app.controller('ProductListCtrl', function ($scope, $mdDialog, $mdMedia) {
    $scope.products = [
        {
            name: 'Oxalis #1',
            img: 'http://www.cae-store.com/wp-content/uploads/2015/06/Chemise-en-jean-devant-femme2-325x600.jpg',
            ref: 'Cae1',
            sex: 'Femme',
            category: 'chemise',
            brand: 'Cae',
            price: 129.00,
            details: 'Chemise coupe droite'
        },
        {
            name: 'Oxalis #1',
            img: 'http://www.cae-store.com/wp-content/uploads/2015/06/Chemise-en-jean-devant-femme2-325x600.jpg',
            ref: 'Cae1',
            sex: 'Femme',
            category: 'chemise',
            brand: 'Cae',
            price: 129.00,
            details: 'Chemise coupe droite'
        }
    ];
    $scope.fields = [
        {name: 'Visuel', width: '10'},
        {name: 'Nom', width: '10'},
        {name: 'Ref', width: '5'},
        {name: 'Sexe', width: '10'},
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