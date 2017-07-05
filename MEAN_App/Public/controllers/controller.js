var myApp = angular.module("myApp",[]);

myApp.controller("AppCtrl",["$scope","$http", function($scope, $http){
  console.log("test controller");
  $http.get("/contactList").then(successCallback, failCallback);

  function successCallback(res){
    console.log("Data received");
    $scope.contactList=res.data;
  }

  function failCallback(err){
    console.log(err.message);
  }
}]);
