
// (a == 1 && a == 2 && a == 3) 可能为 true 吗？
// 答案是，可能。只要有如下代码：

a = {
  value: 0,
  toString(){
    a.value += 1
    return a.value
  }
}

a == 1 //true
a == 2 //true
a == 3 //true

// 因为两个等于号 == 发现 a 是个对象的时候，会调用 toString 方法把 a 加 1. 
