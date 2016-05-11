// Router.js

var express = require('express')

var http = require('http')

var app = express()

http.createServer(app).listen(8081)

// app.get('/',function  (req,res) {
// 	res.send('Server Root')
// })

// app.get('/Login',function  (req,res) {
// 	res.send('Login page')
// })

// app.post('/save',function  (req,res) {
// 	res.send("save page")
// })

app.all('*',function  (req,res) {
	console.log(req)
	res.send('* ' + 'all')
})

app.all('/user/*',function  (req,res) {
	console.log(req)
	res.send('user/ * page')
})



