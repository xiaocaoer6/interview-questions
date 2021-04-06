// typeof
// 区分不了 数组，null和对象，得到的都是object
console.log(typeof(undefined))
console.log(typeof({}))
console.log(typeof(null))
console.log(typeof([1,23,6])) // object
console.log(typeof(function(){
  return 1
}))
let arr = [0, 9, 0, "999"]
console.log(typeof(arr));

// instanceof
// 只能判断A是否是B的实列，不能准确的确定其类型
console.log([] instanceof Array); //true
console.log({} instanceof Object);//true
console.log(new Date() instanceof Date);//true

function Person(){};
console.log(new Person() instanceof Person);

console.log([] instanceof Object);; //true
new Date() instanceof Object;//true
new Person instanceof Object;//true 

//  Array.isArray() 判断是否为数组
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// Object.prototype.toString.call(),最准确的方法
console.log(Object.prototype.toString.call(2)); // [object Number]
console.log(Object.prototype.toString.call("2")); // [object String]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call(function(){})); // [object Function]

// 不能像以下这么写, 这么写的意思是,Object.prototype.转为字符串的返回值,而不是括号中的参数调用这个方法的返回值
console.log(Object.prototype.toString(2)); // [object Object]
console.log(Object.prototype.toString("2")); // [object Object]
console.log(Object.prototype.toString(true)); // [object Object]
console.log(Object.prototype.toString(undefined)); // [object Object]
console.log(Object.prototype.toString(null)); // [object Object]
console.log(Object.prototype.toString([])); // [object Object]
console.log(Object.prototype.toString({})); // [object Object]
console.log(Object.prototype.toString(function(){})); // [object Object]

//  call apply bind的区别
// 将A上可以用的方法给B用,将这个方法的执行者也就是this指向改为B,然后调用这个函数,后面跟的是传递的参数
A.call(B,params1,params2) 
// apply跟call的不同点是参数的类型是引用数据类型
A.apply(B, obj1)
// bind跟上面两个的区别是,改变完this指向不调用,bind方法返回改变完this指向的函数