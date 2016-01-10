'use strict';

angular.module('SoSafe')
  .controller('HomeController', ['$state', 'User', 'PanicMessage', function($state, User, PanicMessage) {
    var self = this,
        user = User.fetch(),
        panicMessage = PanicMessage;

    self.button = 'Are you ok?';
    self.friends = user.friends;

    panicMessage.orderByKey().on('child_added', function(snapshot) {
      snapshot.val().receivers.forEach(function(receiver) {
        if( receiver.name === user.name && !receiver.status ){
          self.button = 'I am ok!';
        }
      });

      $state.go($state.current, {}, { reload: true });
    });

    panicMessage.orderByKey().on('child_changed', function(snapshot) {
      var sender = snapshot.val().sender;

      if( sender === user.name && panicMessage.isAppeased(snapshot)) {
          self.button = 'Everyone is ok!';
        }

      $state.go($state.current, {}, { reload: true });
    });

    self.showFriendsList = function() {
      console.log(self.button);
      return self.button === 'Waiting for response';
    };
    
    self.changeStatus = function(){
      if (self.button === 'Are you ok?'){
        self.button = 'Waiting for response';
        panicMessage.broadcast(user);
      } else if (self.button === 'I am ok!') {
        panicMessage.appease(user);
        self.button = 'Are you ok?';
      } else if (self.button === 'Everyone is ok!') {
        self.button = 'Are you ok?';
        panicMessage.stopPanicking(user);
      }
    };
}]);
