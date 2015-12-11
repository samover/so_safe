'use strict'

angular.module('SoSafe')
  .factory('User', function(){
    var user = {};

    user.build = function(username, friends){
      user.name = username;
      user.friends = friends;
    };

    return user;
  });
