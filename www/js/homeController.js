'use strict';

angular.module('SoSafe')
.controller('HomeController', ['$scope', '$state', 'User', 'PanicMessage', function($scope, $state, User, PanicMessage) {
    var self = this, ref, child,
        user = User.fetch(),
        panicMessage = PanicMessage;

    self.button = 'Are you ok?';

    panicMessage.orderByKey().on('child_added', function(snapshot) {
      var receivers = snapshot.val().receivers;
      console.log('a child has been added');
      for(var i = 0; i < receivers.length; i++){
        if(receivers[i].name === user.name){
          self.button = 'I am ok!'
        }
      }

      $state.go($state.current, {}, { reload: true });
    });

    panicMessage.orderByKey().on('child_changed', function(snapshot) {
      console.log('a child has been changed');
      var receivers = snapshot.val().receivers,
          sender = snapshot.val().sender,
          key = snapshot.key();

      if( sender === user.name ) {
        user.friends = receivers;

        console.log('test')
        var friendArray = receivers.filter(function(receiver){
          return receiver.status === false;
        });

        if(friendArray.length === 0) {
          self.button = 'Everyone is ok!';
        }
      }

      $state.go($state.current, {}, { reload: true });
    });

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
