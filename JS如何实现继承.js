
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

// 另一种方法：用 extends 关键字实现继承

class Animal{
  constructor(){
    this.body = '肉体'
  }，
  move(){}
}

class Human extends Animal{
  constructor(name){
    super()
    this.name = name
  },
  useTools(){}
}

var janson = new Human()


