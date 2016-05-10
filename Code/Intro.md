# Node.js Intro

	Node.js 不直接支持多线程,异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
	回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。Node.js 异步编程的直接体现就是回调。
	我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。
	这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
	
	
*	Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
*	Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

###事件驱动程序
```Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。```

<p align="center" >
  <img src="./resourse/event_loop.jpg" alt="event_loop" title="event_loop">
</p>

###Node.js模块系统

```为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
```

<br>

`导入模块: require('express')`

	var express = require('express')
	var application = express()




`导出模块: module.exports = Hello`
	
	function Hello() { 
		var name; 
		this.setName = function(thyName) { 
		name = thyName; 
	};

		this.sayHello = function() { 
		console.log('Hello ' + name); 
		}; 
	}; 
	module.exports = Hello;



`这样就可以直接获得这个对象了：`

	var Hello = require('./hello'); 
	hello = new Hello(); 
	hello.setName('BYVoid'); 
	hello.sayHello(); 


```Node.js中自带了一个叫做"http"的模块，我们在我们的代码中请求它并把返回值赋给一个本地变量。
```




<p align="center" >
  <img src="./resourse/nodejs-require.jpg" alt="nodejs-require" title="nodejs-require">
</p>


`从文件模块缓存中加载`

尽管原生模块与文件模块的优先级不同，但是都不会优先于从文件模块的缓存中加载已经存在的模块。

`从原生模块加载`

原生模块的优先级仅次于文件模块缓存的优先级。
require方法在解析文件名之后，优先检查模块是否在原生模块列表中。
以http模块为例，尽管在目录下存在一个http/http.js/http.node/http.json文件，require("http")都不会从这些文件中加载，而是从原生模块中加载。
原生模块也有一个缓存区，同样也是优先从缓存区加载。如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行。

`从文件加载`

当文件模块缓存中不存在，而且不是原生模块的时候，Node.js会解析require方法传入的参数，并从文件系统中加载实际的文件，加载过程中的包装和编译细节在前一节中已经介绍过，这里我们将详细描述查找文件模块的过程，其中，也有一些细节值得知晓。


###require方法接受以下几种参数的传递：
*	http、fs、path等，原生模块。
*	./mod或../mod，相对路径的文件模块。
*	/pathtomodule/mod，绝对路径的文件模块。
*	mod，非原生模块的文件模块。

