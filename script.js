var myApp= angular.module("myApp", ["ngAnimate"]);

myApp.controller("MyController", function($scope){
	$scope.errorMessage= false;
	$scope.isShow =false;
	

	$scope.submit=function(){
		if($scope.myForm.$valid){
			$scope.isShow= true;
		}else if ($scope.hugeNum.$invalid){
			$scope.errorMessage="Huge Number needs to be an integer";
		}else{
			$scope.errorMessage="You must submit all the fields"
		}

	};
	$scope.restart= function(){
		$scope.errorMessage= false;
		$scope.isShow =false;
		$scope.input=null;

		
	};
	$scope.integer=/^\d*$/;
});
// ng-pattern="integer"