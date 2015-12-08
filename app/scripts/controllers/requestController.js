'use strict';

/**
 * @ngdoc function
 * @name SoSafe.controller:requestController
 * @description
 */

angular.module('SoSafe')
  .controller('RequestController', function(Requests) {
    var self = this;

    self.requests = Requests;

    self.addRequest = function() {
      var sender = 'Radu';
      var receivers = ['Sam', 'Andrew'];

      this.requests.$add({
        "sender": sender,
        "receivers": receivers
      });
    };
     
  });
