'use strict';

angular.module('SoSafe')
 .factory('User', function() {
   function User(name) {
     if(name) {
       this.name = name;
     }
 }
 User.prototype = {
   setData: function(userData) {
     angular.extend(this, userData);
   },
   load: function(id) {

   }
 };
 return User;
});
