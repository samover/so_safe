'use strict';

/**
 * @ngdoc function
 * @name SoSafe.controller:requestController
 * @description
 */

angular.module('SoSafe')
  .controller('RequestController', ['Requests', function(Requests) {
    var self = this;

    self.requests = Requests;

    self.addRequest = function() {
      var sender = 'Radu';
      var receivers = ['Sam', 'Andrew'];

      self.requests.$add({
        "sender": sender,
        "receivers": receivers
      });
    };
     
  }]);
