'use strict';

angular.module('SoSafe')
  .controller('ButtonController', function(){
    var self = this;
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

    };

    self.sendResponse = function(){

    };

  });
