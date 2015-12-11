app.controller("DashboardCtrl", function ($scope, messagesService)
{

//    $scope.messages = [];

    messagesService
    .loadAllItems()
    .then(function(messages) {
//      for (entry in messages){
//        $scope.messages[entry] = messages[entry];
//      }
      $scope.messages = messages;
    });
  }
);