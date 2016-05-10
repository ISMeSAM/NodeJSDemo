// express_Demo.js

var express = require('express')

var app = express()

app.get('/',function(req,res){
	res.send('hello express')

	
	console.log('-------req---------')


	console.log('app =>' + req.app)

	console.log('baseURL ' + req.baseUrl)
 
	console.log('cookies ' + req.cookies)

	console.log('homename ' + req.homename)

	console.log('path ' + req.path)

	console.log('get ' + req.get())

})


var server = app.listen(8000,function  () {
	
	var host = server.address().address

	console.log(host)

	
	var port = server.address().port

	console.log(port)


	console.log("应用实例 http://%s:%s",host,port)

})
