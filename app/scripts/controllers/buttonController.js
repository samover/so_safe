'use strict';

angular.module('SoSafe')
  .controller('ButtonController', function() {
    var requestRef = new Firebase('https://sosafe.firebaseio.com/requests');
    // var requestRef = new Firebase('https://sosafe.firebaseio.com/');
    var self = this;

    self.friends = []; 
    self.user = 'Radu';

    console.log('These are my friends: ' + self.friends);

    requestRef.orderByKey().on('child_added', function(snapshot) {
      var receivers = snapshot.val().receivers,
      sender = snapshot.val().sender;
      for(var i =0; i < receivers.length; i++){
        if(receivers[i].name === self.user){
          self.status.message = 'I am ok!'
        }
      }
    });

    requestRef.orderByKey().on('child_changed', function(snapshot) {
      var receivers = snapshot.val().receivers,
      sender = snapshot.val().sender;
      if( sender === self.user ) {
        self.friends = receivers;
        //for(var i = 0; i < receivers.length; i++){
          //if(receivers[i].status === true){
            //console.log(receivers[i].name + ' is OK');
            ////self.status.message = 'I am ok!'
          //}
        }
        console.log(self.friends);
      });

    self.status = {
      message: 'Are you ok?'
    };

    self.changeStatus = function(){
      if (self.status.message === 'Are you ok?'){
        self.status.message = 'Waiting for response';
        self.sendRequest();
      } else if (self.status.message === 'Waiting for response'){
        self.status.message = 'Your friend is ok';
      } else if (self.status.message === 'I am ok!') {
        self.sendResponse();
        self.status.message = 'Are you ok?';
      } else if (self.status.message === 'Your friend is ok'){
        self.status.message = 'Are you ok?';
      }
    };

    self.sendRequest = function(){
      var requestRef = new Firebase('https://sosafe.firebaseio.com');
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
        'sender': sender,
        'receivers': receivers
      });
      
      self.friends = receivers;
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
    };

  });
