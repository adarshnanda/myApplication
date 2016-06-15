var http = require('http');
var fs = require('fs');

http.createServer(onRequest).listen(9000);
console.log("server running");
function onRequest(request, response) {
	if(request.method == 'GET' && request.url== '/'){
		response.writeHead(200, {"Context-Type":"text/html"});
		fs.createReadStream("./index.html").pipe(response);
	}
	else{
		response.writeHead(404,{"Context-Type":"text/html"});
		fs.createReadStream("./404.html").pipe(response);
	}
}