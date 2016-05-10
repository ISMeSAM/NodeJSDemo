// express_demo3.js


var express  = require('express')

var app = express()

// 主页输出 hello world
app.get('/',function  (request,response) {
	
	console.log('主页 GET 请求')
	response.send('Hello GET')
})


// POST 请求
app.post('/',function  (request,response) {
	console.log('主页 POST 请求 ')
	response.send('Hello POST')
})

// del_user 页面相应
app.delete('/del_user',function  (request,response) {
	console.log('/list_user 相应 DELETE 请求')
	response.send('删除页面')
})

// list_user 页面
app.get('/list_user',function  (request,response) {
	console.log('list_user GET 请求')
	response.send('用户列表页面')
})


// 对页面 abcd abxcd ab123cd 等相应 GET 请求
app.get('/ab*cd',function  (request,response) {
	console.log('ab*cd GET 请求')
	response.send('正则匹配')
})


var server = app.listen(4444,function  () {
	var host = server.address().address
	var port = server.address().port
	console.log('应用实例 访问地址 为 http://%s,%s',host,port)
})








