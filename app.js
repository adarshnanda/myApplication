var  myApp = angular.module("myApp", ["myApp2"]);
myApp.controller('firstCtrl', function (NUMBER) {
	console.log(NUMBER.ONE);
});