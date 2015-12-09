'use strict';

angular.module('SoSafe')
  .controller('ButtonController', ['$scope', '$state', 'ApiService', function($scope, $state, ApiService) {
    var requestRef = new Firebase('https://sosafe.firebaseio.com/requests'),
      receivers, sender, key;

    $scope.friends = [];
    $scope.user = 'Sam';
    $scope.status = { message: 'Are you ok?' };

    requestRef.orderByKey().on('child_added', function(snapshot) {
      receivers = snapshot.val().receivers;

      for(var i =0; i < receivers.length; i++){
        if(receivers[i].name === $scope.user){
          $scope.status.message = 'I am ok!';
        }
      }

      $state.go($state.current, {}, { reload: true });
    });

    requestRef.orderByKey().on('child_changed', function(snapshot) {
      receivers = snapshot.val().receivers;
      sender = snapshot.val().sender;
      key = snapshot.key();

      if( sender === $scope.user ) {
        $scope.friends = receivers;

        var friendArray = receivers.filter(function(receiver){
          return receiver.status === false;
        });

        if(friendArray.length === 0) {
          console.log('hello');
          $scope.status.message = 'Everyone is ok!';
        }
      }

      $state.go($state.current, {}, { reload: true });
    });

    $scope.resetRequest = function() {
      var url = requestRef.toString() + '/' + key;
      var deleteRef = new Firebase(url);
      deleteRef.remove();
      $scope.friends = [];
    };

    $scope.changeStatus = function(){
      if ($scope.status.message === 'Are you ok?'){
        $scope.status.message = 'Waiting for response';
        $scope.sendRequest();
      } else if ($scope.status.message === 'I am ok!') {
        $scope.sendResponse();
        $scope.status.message = 'Are you ok?';
      } else if ($scope.status.message === 'Everyone is ok!') {
        $scope.status.message = 'Are you ok?';
        $scope.resetRequest();
      }
    };

    $scope.sendRequest = function(){
      var requestRef = new Firebase('https://sosafe.firebaseio.com');
      var child = requestRef.child('requests');
      var sender = 'Sam';
      var receivers = [
        {
          'name': 'Radu',
          'status': false
        }, {
          'name': 'Amy',
          'status': false
        }
      ];

      child.push({
        'sender': sender,
        'receivers': receivers
      });

      $scope.friends = receivers;
    };

    $scope.sendResponse = function() {
      var receiversRef = new Firebase('https://sosafe.firebaseio.com/requests');

      receiversRef.orderByKey().on('child_added', function(snapshot) {
        var request = snapshot.val();
        var key = snapshot.key();
        var postRef = new Firebase(receiversRef.toString() + '/' + key);

        for(var i = 0; i < request.receivers.length; i++) {
          if(request.receivers[i].name === $scope.user) {
            request.receivers[i].status = true;
          }
        }

        postRef.update(request);
      });
    };

  }]);
