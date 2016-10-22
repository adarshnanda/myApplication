angular.module('myApp',['myApp.controllers']);
angular.module("myApp.controllers", ['myApp.constant', 'myApp.services'])
	   .controller('firstCtrl', function (NUMBER, commonUtils) {
	var self = this;
	init();
	function init(){
		self.secondInput = NUMBER.und;
		self.firstInput = NUMBER.und;
	}
	self.nullable = function(argument){
		return commonUtils.nullable(argument);
	}
	self.nullable = function(argument){
		return commonUtils.nullable(argument);
	}
	self.incr = function () {
	self.sum = self.firstInput + self.secondInput;
	};
});