
// JSONP


// 用图片构造 get 请求
button.addEventListener('click',(e)=>{
	let image = document.createElement('img');
	image.src = '/pay'
	image.onload = function(){
		alert('success')
	}
	image.onerror = function(){
		alert('fail')
	}
})

// 用 script 造 get 请求
button.addEventListener('click',(e)=>{
	let script = document.createElement('script')
	script.src = '/pay'
	document.body.appendChild(script)
	script.onload = function(e){	// 状态码是 200-299 表示成功
		e.currentTarget.remove()
	}
	script.onerror = function(e){	// 状态码 >=400 表示失败
		e.currentTarget.remove()
	}
})

// 后端代码
//...
if(path === '/pay'){
	let amount = fs.readFileSync('./db', 'utf8')
	amount -= 1
	fs.writeFileSync('./db', amount)
	response.setHeader('Content-Type', 'application/javascript')
	response.write('amount.innerText = ' + amount)
	response.end()
}
//...

//以上技术叫 SRJ - Server Rendered javascript

// 以下是 JSONP 方案

button.addEventListener('click',(e)=>{
	let script = document.createElement('script')
	let functionName = 'frank' + parseInt(Math.random()*10000, 10)
	window[functionName] = function(){
		amount.innerText = amount.innerText -0 -1
	}
	script.src = '/pay?callback=' + functionName
	script.onload = function(e){
		e.currentTarget.remove()
		delete window[functionName]
	}
	script.onerror = function(e){
		e.currentTarget.remove()
		delete window[functionName]
	}

})

// 后端代码
if(path === '/pay'){
	let amount = fs.readFileSync('./db','utf8')
	amount -= 1
	fs.writeFileSync('./db', amount)
	let callbackName = query.callback
	response.setHeader('Content-type', 'application/javascript')
	response.write(`
		${callbackName}.call(undefined, 'success')
	`)
	response.end()
}


// 重复默写代码

button.addEventListener('click',(e)=>{
	let script = document.createElement('script')
	let functionName = 'frank' + parseInt(Math.random()*10000,10)
	window[functionName] = function(){
		amount.innerText = amount.innerText -0 -1
	}
	script.src = '/pay?callback=' + functionName
	window.body.appendChild(script)
	script.onload = function(e){
		e.currentTarget.remove()	//状态码为200-299为成功
		delete window[functionName]
	}
	script.onerror = function(e){
		e.currentTarget.remove()
		delete window[functionName]
	}
})

if(path === '/pay'){
	let amount = fs.readFileSync('./db','utf8')
	amount -= 1
	fs.writeFileSync('./db',amount)
	let callbackName = query.callback
	response.setHeader('Content-Type', 'application/javascript')
	response.write(`
		${callbackName}.call(undefined, 'success')
	`)
	response.end()
}

// jQuery 写法；虽然以下代码有 ajax 单词，但这跟 ajax 没任何关系，这个名字很奇葩。

$.ajax({
	url: 'http://jack.com:8002/pay',
	dataType: 'jsonp',
	success: function(response){
		if(response === 'success'){
			amount.innerText = amount.innerText -1
		}
	}
})

$.jsonp()





