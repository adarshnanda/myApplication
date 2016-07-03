var  myApp = angular.module("myApp", ["myApp2"]);
myApp.controller('firstCtrl', function (NUMBER) {
	console.log('controller loaded');
	var self = this;
	init();
	function init(){
		self.number1 = undefined;
		self.number = undefined;
	}
	self.incr = function () {
	self.number1 = self.number + NUMBER.ONE;
	};
});