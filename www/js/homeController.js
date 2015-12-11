'use strict'

angular.module('SoSafe')
.controller('HomeController', ['$scope', '$state', 'User', 'Request', function($scope, $state, User, Request) {
  var self = this,
    ref, child, key;

    self.requests = Request('requests');
    self.user = User;
    self.button = 'Are you ok?';

    self.changeStatus = function(){
      if (self.button === 'Are you ok?'){
        self.button = 'Waiting for response';
        self.sendRequest();
      } else if (self.button === 'I am ok!') {
        self.sendResponse();
        self.button = 'Are you ok?';
      } else if (self.button === 'Everyone is ok!') {
        self.button = 'Are you ok?';
        self.resetRequest();
      }
    };

    self.sendRequest = function() {
      self.requests.$add({
        'sender': self.user.name,
        'receivers': self.user.friends
      });
    };

    self.sendResponse = function() {
      self.requests.orderByKey().on('child_added', function(snapshot) {
        child = snapshot.val();
        ref = Request('requests/' + snapshot.key());

        for(var i = 0; i < child.receivers.length; i++) {
          if(child.receivers[i].name === self.user.name) {
            child.receivers[i].status = true;
          }
        }

        ref.$save(child);
      });

    };

}]);
