  angular
  .module('app')
  .controller('MessagesCtrl', [
    'messagesService',
    MessagesCtrl
    ]);

  function MessagesCtrl(messagesService) {
    var vm = this;

    vm.messages = [];

    messagesService
    .loadAllItems()
    .then(function(messages) {
      for (entry in messages){
        vm.messages[entry] = messages[entry];
      }
    });
  }