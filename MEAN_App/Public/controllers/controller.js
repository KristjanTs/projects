var myApp = angular.module("myApp",[]);

myApp.controller("AppCtrl",["$scope","$http", function($scope, $http){
  console.log("test controller");

  var refresh = function(){
    $http.get("/contactList").then(successCallback, failCallback);

    function successCallback(res){
      console.log("Data received");
      $scope.contactList=res.data;
      $scope.contact={};
    };

    function failCallback(err){
      console.log(err.message);
    };
  };

  refresh();

  $scope.addContact = function(){
    $scope.contact._id="";
  	$http.post("/contactList", $scope.contact).then(function (success){

    },function (error){

	  });
    refresh();
  }

  $scope.remove = function(id){
    console.log(id);
    $http.delete("/contactList"+id);
    refresh();
  };

  $scope.edit = function(id){
    console.log(id);
    $http.get("/contactList/"+id).then(function(success){
      $scope.contact = success.data;
      console.log("yea bae");
    });
  }

  $scope.update = function(){
  	console.log($scope.contact._id);
    $http.put('/contactlist/'+ $scope.contact._id, $scope.contact).then(function (success){
      console.log(success.data);
      refresh();
      },function (error){
    });
  }

}]);
