
// JS 的原型是什么？

//举例

var a = [1,2,3];
// a 只有 0、1、2、length 这四个 key
// 我们知道数组有 push 方法，那么这个 a.push(4) 这个 push 是哪来的？
// 实际上 a.__proto__ === Array.prototype
// push 就是沿着 a.__proto__ 找到的，也就是 Array.prototype.push
// Array.prototype 还有很多方法，如 join pop slice splice
// Array.prototype 就是 a 的原型(__proto__)
// 参考 google 方应杭 原型
