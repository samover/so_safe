'use strict';

angular.module('SoSafe')
  .controller('ButtonController', function(){
    var self = this;
    self.status = {
      message: 'Are you ok?'
    };
    self.sendRequest = function(){
      self.status.message = 'Waiting for response';
    };
    self.receiveResponse = function(){
      self.status.message = 'I am ok!';
    };
  });
