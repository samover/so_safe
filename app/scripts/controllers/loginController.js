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

    self.login = function(user) {
      console.log('hello');
      var friends = [
        {
          'name': user.friend1,
          'status': false
        },
        {
          'name': user.friend2,
          'status': false
        }
      ];
      //$rootScope.user = new User(user.name);
      window.localStorage['username'] = user.name;
      window.localStorage['friends'] = JSON.stringify(friends);
      //$rootScope.friend = user.friend;
      //console.log(user);
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
