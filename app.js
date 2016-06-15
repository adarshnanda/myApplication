function placeOrder(orderNumber){
	console.log('Customer order placed with number ', orderNumber);
	cookAndDeliver(function(){
		console.log('deliver food', orderNumber);
	});
}

function cookAndDeliver(callBack){
	setTimeout(callBack, 5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);