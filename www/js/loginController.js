'use strict';

angular.module('SoSafe')
  .controller('LoginController', ['$scope', '$state', 'User', function($scope, $state, User) {
    var self = this;

    self.login = function(user) {
      var friends = self.friends;

      window.localStorage['username'] = user.name;
      window.localStorage['friends'] = JSON.stringify(friends);
      $state.go('app.button');
    };

    self.friends = [
      { 'name': null,
        'status': false
      }];

    self.addInput = function(friend) {
      self.friends.push({
        'name': friend.name,
        'status': false
      });
    };

    self.removeInput = function(index) {
      self.friends.splice(index, 1);
    };
  }]);
