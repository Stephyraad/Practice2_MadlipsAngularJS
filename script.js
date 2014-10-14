var myApp= angular.module("myApp", []);

myApp.controller("MyController", function($scope){
	$scope.errorMessage= false;
	$scope.isShow =false;

	$scope.submit=function(){
		if($scope.myForm.$valid){
			$scope.isShow= true;
		}else{
			$scope.errorMessage="You must submit all the fields";

		}

	};
});

