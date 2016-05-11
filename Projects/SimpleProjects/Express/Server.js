// Server.js


var express = require('express')

var application = express()

var fs = require('fs')

console.log(application.locals)



application.get('/',function  (request,response) {
	response.send('hello sam')
})

application.listen(8088)




