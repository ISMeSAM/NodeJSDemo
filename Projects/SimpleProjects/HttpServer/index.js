// index.js

// import 
var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function  (request,response) {

	var pathname = url.parse(request.url).pathname

	console.log(url.parse('request: ' +  request.url))
	console.log("path ==>" + pathname.substr(1))

	fs.readFile(pathname.substr(1),function  (err,data) {

		if (err) {
			
			console.log("err" + ' ==>' + err)
			response.writeHead(404,{'content-type':'text/html'})

			fs.readFile("./NotFound.html",function  (error,notFoundHtml) {
					
					if (error) {

					} else{
						response.write(notFoundHtml.toString())
					}
					response.end()
			})

		} else{

			if (pathname.substr(1) == "index.html" || pathname.substr(1) == "NotFound.html") {

				response.writeHead(200,{'content-type':'text/html'})

			}else{
				response.writeHead(200,{'content-type':'application/json'})
				
			}

			response.write(data.toString())
			response.end()
		}

		
	});
}).listen(8082)


console.log('Server running at http://127.0.0.1:8082/');













