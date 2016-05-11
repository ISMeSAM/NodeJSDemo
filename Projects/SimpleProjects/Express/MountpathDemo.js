// MountpathDemo.js

var express = require('express')

var app = express()

var admin = express()

admin.get('/',function  (req,res) {
	console.log(admin.mountpath)
	res.send('Admin Homepage')
})


app.use('/admin',admin)

// 利用express托管静态资源 使用'/static'为静态资源挂载一个虚拟的路径
// http://localhost:8888/static/Resource/flower.jpg
app.use('/static',express.static("./"))


// setting
app.locals.title = "My App"
app.locals.email = "sam@samapp.com"
// app.locals.strftime = require('strftime')

app.listen(8888)

console.log(app)




