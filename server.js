var http = require('http');
var fs = require('fs');
var path = require('path');


http.createServer(onRequest).listen(9000);
console.log("server running");


function onRequest(request, response) {
	if(request.method == 'GET'){
    	var filePath = '.' + request.url;
    	var extname = path.extname(filePath);
	 	if(request.url== '/'){
			console.log("index.html served!!");
			response.writeHead(200, {"Context-Type":"text/html"});
			fs.createReadStream("./index.html").pipe(response);
		}else {
			var contentType = 'text/html';
    		switch (extname) {
        	case '.js':
            	contentType = 'text/javascript';
            	break;
        	case '.css':
            	contentType = 'text/css';
            	break;
    		}


			fs.readFile(filePath,function(error, content) {
				if(error){
					fs.readFile('./404.html', function(error, content) {
                    	response.writeHead(200, { 'Content-Type': contentType });
                    	response.end(content, 'utf-8');
                	});
				}else{
					console.log(filePath+" served!!");
					response.writeHead(200, { 'Content-Type': contentType });
            		response.end(content, 'utf-8');
				}
			});
		}
	}
}
