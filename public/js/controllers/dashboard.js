app.controller("DashboardCtrl", function ($scope, messagesService)
{
    messagesService
    .loadAllItems()
    .then(function(messages) {
      $scope.messages = messages;
    });
  }
);