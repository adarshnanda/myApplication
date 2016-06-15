var http = require('http');

http.createServer(onRequest).listen(9000);
console.log("server running");
function onRequest(request, response) {
	console.log("user request" + request.url);
	response.writeHead(200, {"Context-Type":"text/plain"});
	response.write("done");
	response.end();
}