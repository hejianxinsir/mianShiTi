
// 用计数排序的逻辑去重: 只能去重正整数

var a = [4,2,5,6,3,4,5];
var hashTab = {}
for( let i=0; i<a.length; i++ ){
  if( a[i] in hashTab ){
    // 什么也不做
  }else{
    hashTab[ a[i] ] = true
  }
}

// 此时 hashTab 是: {4: true, 2: true; 5: true; 6: true; 3: true}

console.log(Object.keys(hashTab))   // ['4', '2', '5', '6', '3']

// 用 Set 去重: 基本没有缺点
a = [1,2,1,2,1,5,6,7,8,8]；
Array.from(new Set(a))

// WeakMap 去重 15k 以上需要知道
