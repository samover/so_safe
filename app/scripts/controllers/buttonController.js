'use strict';

angular.module('SoSafe')
  .controller('ButtonController', function() {

    var requestRef = new Firebase('https://sosafe.firebaseio.com/');
    var self = this;
    self.user = 'Sam'
    requestRef.child('requests').on("child_added", function(snapshot) {
      var request = snapshot.val();
      console.log(request);
      if (request.receivers.includes(self.user)) {
        self.status.message = request.sender + " wants to know if you're okay"
      }
    });

    self.status = {
      message: 'Are you ok?'
    };

    self.sendRequest = function() {
      var child = requestRef.child('requests');
      var sender = 'Radu';
      var receivers = {
        'Sam': false,
        'Andrew': false
      };

      child.push({
        "sender": sender,
        "receivers": receivers
      });

      self.status.message = 'Waiting for response';
    };

    self.sendResponse = function() {
      var requests = requestRef.child('requests');
      requests.once("value", function(snapshot) {
        var data = snapshot.val();
        snapshot.forEach(function(request) {
          console.log(request.child('receivers'));
          if (self.user in request.val().receivers) {
            // console.log('hello world');
            request.child('receivers').child(self.user).set(true);
            self.status.message = "I'm ok!";
          }
        });
      });
    };

  });
