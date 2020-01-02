
// 如何实现深拷贝？

// 用 JSON 来深拷贝
var a = {...}
var b = JSON.parse(JSON.stringify(a))   //此法缺点是，不支持函数、引用、undefined、RegExp、Date...

// 用递归的方法，google 一下递归深拷贝就行。
// 重点是思路：(答对了以下两点，基本就行了)(抄别人的完备代码，以下供参考)
// 1. 要分是否为对象、是否是数组、函数、普通对象； 
// 2. 克隆里面还要克隆

function clone(object){
  let object2
  if(!(object instanceof Object)){
    return object   // 说明是普通类型，直接返回即可
  }else if(object instanceof Array){
    object2 = []
  }else if(object instanceof Function){
    object2 = eval(object.toString())
  }else if(object instanceof Object){
    object = {}
  }
  
  for(let key in object){
    object2[key] = clone(object[key])   //clone 里面再 clone  这是思路的重点
  }
  
  return object2
}
