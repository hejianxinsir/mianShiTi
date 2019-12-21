
# 关于 HTML

### 必考：如何理解 HTML 的语义化 ?
举例，比如碰到一个段落用 p 标签，碰到边栏用 aside 标签，碰到标题用 h1 标签，碰到列表用 ul ol li 标签。

### meta viewport 是做什么的？怎么写?
用来适配移动端。
<meta name="viewport" content=" width=device-width, initial-scale=1.0 user-scalable=no
      maximum-scale=1.0 minimum-scale=1.0">

### canvas 是用来干嘛的？
举例。或者把你的项目发给面试官。看 MDN .

# CSS

### 必考: 说说盒模型
- 如果是 content-box: width = 内容区宽度；
- 如果是 border-box(勉强可以说是 IE ): width = 内容区宽度 + padding 宽度(不管 IE : *{box-sizing: border-box;} )

### CSS reset 和 normalize.css 有什么区别？
这是考英文。
- reset: 样式重置，之前的样式不要了,抛弃默认样式，比如 a{color: red}.
- normalize: 让所有浏览器的标签跟标准规定的默认样式一致。它用标准的默认样式，让浏览器的默认样式基本统一。

### 必考: 如何居中？
见此仓库的其他笔记。

### BFC 是什么？
- overflow: hidden 清楚浮动 (方方总是用 .clearfix 清楚浮动，overflow: hidden 不建议用)；
- overflow: hidden 取消父子 margin 合并;(在父亲身上加 overflow: hidden); 注意：方方总是用 padding: 0.1px 取消父子合并。

### 如何清除浮动？
- overflow: hidden; 清除浮动，方方反对的办法
- clearfix 清楚浮动。正规方法。
```
.clearfix::after {
      display: block;
      clear: both;
      content: '';
}
.clearfix{
      zoom: 1; /*兼容 IE*/
}
```

### 七种数据类型
number-bool-string-undefined-null-symbol-object

### 必考 Promise 如何使用？
- then
```
$.ajax(...).then(成功函数, 失败函数)
```

- 链式 then
```
$.ajax(...).then(成功函数, 失败函数).then(成功函数2, 失败函数2)
```

- 自己生成 Promise 对象
```
function xxx(){
      return new Promise(function(resolve, reject){
            setTimeout(()=>{
                  resolve() 或者 reject()
            },3000)
      })
}

xxx.then();
```

### 必考: 手写 ajax
```

```



