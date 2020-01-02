
// 如题

function Animal(){
  this.body = '肉体'
}

Animal.prototype.move = function(){

}

function Human(name){
  Animal.apply(this, arguments)
}
// Human.prototype.__proto__ = Animal.prototype  这是非法的，但我们要表达这个含义，等于以下三句

var f = function(){}
f.prototype = Animal.prototype
Human.prototype.useTools = function(){}

var frank = new Human()

// 写完以上代码就行
