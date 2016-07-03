var  myApp = angular.module("myApp", ["myApp2"]);
myApp.controller('firstCtrl', function ($scope, NUMBER) {
	console.log('controller loaded');
	init();
	function init(){
		$scope.number1 = 1;
		$scope.number = 1;
	}
	$scope.incr = function () {
	$scope.number1 = $scope.number + NUMBER.ONE;
	};
});