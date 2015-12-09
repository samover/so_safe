'use strict';

angular.module('SoSafe')
  .controller('ButtonController', ['$rootScope', 'User', function($rootScope, User){
    var self = this;
    this.currentUser = $rootScope.user.name;
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
      var receivers = ['Sam', 'Andrew'];

      child.push({ 'sender': sender, 'receivers': receivers });

      self.status.message = 'Waiting for response';
    };

    self.sendResponse = function(){

    };

  }]);
