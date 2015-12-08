'user strict';

angular.module('SoSafe')
  .controller('ButtonController', function(){
    var self = this;
    self.sendRequest = function(){
      return 'Hello world';
    };
  });
