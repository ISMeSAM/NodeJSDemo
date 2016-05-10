// express_demo.js

var express = require('express')

var app = express()

app.get('/',function(req,res){
	res.send('hello express')
})


var server = app.listen(8182,function(){
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例访问地址为http://%s:%s",host,port)
})


