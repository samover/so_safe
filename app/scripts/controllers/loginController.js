'use strict';

/**
 * @ngdoc function
 * @name SoSafe.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('SoSafe')
  .controller('LoginController', ['$scope', '$rootScope', '$state', 'User', function($scope, $rootScope, $state, User) {
    var self = this;

    self.login = function() {
      console.log('hello');
      $rootScope.user = new User($scope.name);
      $state.go('app.button');
    };

    self.friends = [
      { 'name': null,
        'status': false
      }];

    self.addInput = function() {
      console.log('hello!');
      self.friends.push({
        'name': friend.name,
        'status': false
      });
    };

    self.removeInput = function(index) {
      self.friends.splice(index, 1);
    };
  }]);
