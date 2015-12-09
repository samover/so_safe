'use strict';

angular.module('SoSafe')
 .factory('User', function() {
   function User(userData) {
     if(userData) {
       this.setData(userData);
     }
 }
 User.prototype = {
   setData: function(userData) {
     angular.extend(this, userData);
   },
   load: function(id) {

   }
 };
});
