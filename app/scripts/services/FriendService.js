'use strict';

angular.module('SoSafe')
 .service('Friend', function() {
   var friends = [
     {name: null}
   ];

  this.receiverName = function(receiverName){
    return this.friend.name; 
  };
});
