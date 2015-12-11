'use strict'

angular.module('SoSafe')
.controller('HomeController', ['$scope', '$state', 'User', 'Request', function($scope, $state, User, Request) {
  var self = this,
      ref;

  self.button = 'Are you ok?';

  self.changeStatus = function(){
    if (self.button === 'Are you ok?'){
      self.button = 'Waiting for response';
      self.sendRequest();
    } else if (self.button === 'I am ok!') {
      self.sendResponse();
      self.button = 'Are you ok?';
    } else if (self.button === 'Everyone is ok!') {
      self.button = 'Are you ok?';
      self.resetRequest();
    }
  };

  self.sendRequest = function() {
    ref = Request('requests');
  //var sender = $scope.user;
  //var receivers = JSON.parse(window.localStorage['friends']);

  //child.push({
    //'sender': sender,
    //'receivers': receivers
  //});

  //$scope.friends = receivers;
    };
}]);
