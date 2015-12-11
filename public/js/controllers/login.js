app.controller('loginCtrl', function($scope, $mdMedia)
{

	$scope.customFullscreen = $mdMedia('sm');
	console.log("isConnected", $scope.isConnected);
})