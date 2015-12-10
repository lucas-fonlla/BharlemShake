app.controller("MainCtrl", function($scope,  $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast)
{
    $scope.menuItems = [
        {
            name: 'Dashboard',
            icon: 'dashboard',
            sref: '.dashboard'
        },
        {
            name: 'Profile',
            icon: 'person',
            sref: '.profile'
        },
        {
            name: 'Produits',
            icon: 'view_module',
            sref: '.products'
        }
    ];

    $scope.toggleItemsList = function() {
        var pending = $mdBottomSheet.hide() || $q.when(true);

        pending.then(function(){
            $mdSidenav('left').toggle();
        });
    }

});