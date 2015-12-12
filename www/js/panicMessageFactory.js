'use strict'

angular.module('SoSafe')
  .factory('PanicMessage', function($firebaseArray){
    var baseUrl = 'https://sosafe.firebaseio.com/requests',
        panicMessage = new Firebase(baseUrl),
        firebaseRef = $firebaseArray(panicMessage);

    panicMessage.broadcast = function(user) {
      firebaseRef.$add({ 'sender': user.name, 'receivers': user.friends });
    };

    panicMessage.appease = function(user) {
      firebaseRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var child = childSnapshot.val(),
              ref = $firebaseArray(new Firebase(baseUrl + '/' +
                    childSnapshot.key()));

          for(var i = 0; i < child.receivers.length; i++) {
            if(child.receivers[i].name === user.name) {
              child.receivers[i].status = true;
            }
          }

          firebaseRef.$save(child);
        });
      });
    };

    panicMessage.stopPanicking = function(user) {
      firebaseRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var child = childSnapshot.val();
          firebaseRef = $firebaseArray(new Firebase(baseUrl + '/' + childSnapshot.key()));
          
          if(child.sender === user.name) {
            firebaseRef.remove(child);
          }
        });
      });
    };
  
    return panicMessage;
  });
