'use strict';

/**
 * @ngdoc function
 * @name SoSafe.controller:requestController
 * @description
 */

angular.module('SoSafe')
  .controller('RequestController', function() {
    var self = this;
    var requestRef = new Firebase('https://sosafe.firebaseio.com');

    var child = requestRef.child('requests');

    //self.requests = Requests;

    self.addRequest = function() {
      var sender = 'Radu';
      var receivers = ['Sam', 'Andrew'];

      child.set({
        "sender": sender,
        "receivers": receivers
      });
    };
     
  });
