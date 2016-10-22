angular.module('myApp',['myApp.controllers']);
angular.module("myApp.controllers", ['myApp.constant', 'myApp.services'])
	   .controller('firstCtrl', function (NUMBER, commonUtils) {
	var self = this;
	init();
	function init(){
		self.number1 = undefined;
		self.number = undefined;
	}
	self.nullable = function(argument){
		return commonUtils.nullable(argument);
	}
	self.incr = function () {
	self.number1 = self.number + NUMBER.ONE;
	};
});