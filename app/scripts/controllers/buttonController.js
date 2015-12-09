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
      var receivers = [
        { 
          'name': 'Sam', 
          'status': false
        }, {
          'name': 'Andrew',
          'status': false 
        }
      ];

      child.push({
        "sender": sender,
        "receivers": receivers
      });

      self.status.message = 'Waiting for response';
    };

    self.sendResponse = function() {
      var receiversRef = new Firebase('https://sosafe.firebaseio.com/requests');
      
      receiversRef.orderByKey().on('child_added', function(snapshot) {
        var request = snapshot.val();
        var key = snapshot.key();
        var postRef = new Firebase(receiversRef.toString() + '/' + key);

        for(var i = 0; i < request.receivers.length; i++) {
          if(request.receivers[i].name === self.user) {
            request.receivers[i].status = true; 
          }
        }
        
        postRef.update(request);
      });
      self.status.message = 'I am OK';
    };

  });
