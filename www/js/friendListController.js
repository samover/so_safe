'use strict';

angular.module('SoSafe')
  .controller('FriendListController', ['$state', 'User', 'PanicMessage', function($state, User, PanicMessage) {
    var self = this, 
        user = User.fetch();
    
    PanicMessage.orderByKey().on('value', function(snapshot) {
      snapshot.forEach(function(child) {
        if(child.val().sender === user.name) {
          self.friends = child.val().receivers;
        }
      });
    $state.go($state.current, {}, { reload: true });
    });

  }]);
