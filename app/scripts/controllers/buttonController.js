'use strict';

angular.module('SoSafe')
  .controller('ButtonController', function(){
    var self = this;
    self.status = {
      message: 'Are you ok?'
    };

    self.sendRequest = function(){
      var requestRef = new Firebase('https://sosafe.firebaseio.com');
      var child = requestRef.child('requests');
      var sender = 'Radu';
      var receivers = ['Sam', 'Andrew'];

      child.push({ "sender": sender, "receivers": receivers });

      self.status.message = 'Waiting for response';
    };,.

    self.
  });
