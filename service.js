angular.module("myApp.services", []).factory("commonUtils",function(){
 this.nullable = function (argument) {
	if(argument===null||argument===undefined||argument===''){
		return false;
	}
	return true;
}
return this;
});