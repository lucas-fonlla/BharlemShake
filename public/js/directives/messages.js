 angular
 .module('app')
 .directive('messagesSection', messagesSectionDirective);

 function messagesSectionDirective() {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      theme: '@',
      messages: '='
    },
    templateUrl: 'views/messages.html',
    link : function(scope, element, attrs) {
    }
  };
}