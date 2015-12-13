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
    panicMessage.once('value', function(snapshot) {
      firebaseRef.forEach(function(item, index) {
        item.receivers.forEach(function(receiver, i) {
          if(receiver.name === user.name) {
            firebaseRef[index].receivers[i].status = true;
          }
        });
        firebaseRef.$save(index);
      });
    });
  };

  panicMessage.isAppeased = function(snapshot) {
    return snapshot.val().receivers.every(function(receiver) {
      return receiver.status;
    });
  };

  panicMessage.stopPanicking = function(user) {
    panicMessage.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var item = firebaseRef.$getRecord(childSnapshot.key());
        if(childSnapshot.val().sender === user.name) {
          firebaseRef.$remove(item);
        }
      });
    });
  };

  return panicMessage;
});
