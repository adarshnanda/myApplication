angular.module('myApp',['myApp.controllers']);
angular.module("myApp.controllers", ['myApp.constant', 'myApp.services'])
	   .controller('firstCtrl', function ($scope, $parse, CONSTANTS, commonUtils) {
	var self = this;
	function init(){
		self.secondInput = CONSTANTS.und;
		self.firstInput = CONSTANTS.und;
	}
	self.nullable = function(argument){
		return commonUtils.nullable(argument);
	};
	self.operation = function(operationPerformed){
		self.operationPerformed = operationPerformed;
		switch(operationPerformed){
			case '+':
				self.result = self.firstInput + self.secondInput;
				break;
			case '-':
				self.result = self.firstInput - self.secondInput;
				break;
			case '*':
				self.result = self.firstInput * self.secondInput;
				break;
			case '/':
				self.result = (self.firstInput / self.secondInput).toFixed(2);
				break;
		};
	};
	init();
});