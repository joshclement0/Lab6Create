angular.module('myApp', ["firebase"]).
controller('myController', ['$scope', '$firebaseArray', '$http',
  function($scope, $firebaseArray, $http) {
    var ref=firebase.database().ref().child("messages");
    $scope.people=$firebaseArray(ref);
    $http.get('/user/profile')
      .success(function(data, status, headers, config) {
        $scope.user = data;
        $scope.error = "";
      }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
    $scope.update=function(user){
      var newmessage={from:user.name,location:{lat:32,lng:-111}}
    }
  }
]);
