'use strict'

angular.module('SoSafe')
.service('User', function(){

  return({
    fetch: fetch,
    build: build
  });

  function build(username, friends) {
    window.localStorage['username'] = username;
    window.localStorage['friends'] = JSON.stringify(friends);
  }

  function fetch() {
    return {
      name: window.localStorage['username'],
      friends: JSON.parse(window.localStorage['friends'])
    };
  }
});
