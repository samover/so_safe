'use strict'

angular.module('SoSafe')
  .factory('User', function(){
    this.user = {};

    var build = function(username, friends){
      // window.localStorage['username'] = username;
      // window.localStorage['friends'] = JSON.stringify(friends);
      this.name = username;
      this.friends = friends;
      this.user = {
        'sender': username,
        'receivers':
      }

    };
  });
