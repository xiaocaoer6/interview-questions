// push在数组末尾增加一个或者多个元素，
// pop 在数组末尾删除一个元素 arr.pop
// unshift在头部增加
// shift 在头部删除

// splice 在数组中间进行增删改操作，都理解为删除
// 这个方法影响了原数组，返回值是删除元素组成的新数组
let arr = [1,2,3, 4, 5, 6]
// console.log(arr.splice(0, 2)) // 删
// console.log(arr.splice(0, 0, "2"), arr) // 增，从0开始删，删掉0， 放进去的元素是“2”
console.log(arr.splice(0, 1, "2"), arr) // 改，删掉1个，从0开始删，删掉1个， 放进去的元素是“2”

//  join将数组转化为字符串，// 不影响原数组
let arr = [1,2,3]
console.log(arr.join())
console.log(arr.join(''))

//  翻转数组，reserve,影响了原数组
let arr = [1,2,3]
console.log(arr.reverse())

// concat 合并多个数组，数组跟元素或者数组之间的操作
// 不会影响原数组
let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log(arr1.concat(arr2,999, 'ooo')) // 如果合并的时候有数组的话会进行拆包


// slice 切割截取
// slice 对于字符串来说，截取字符串,不影响原字符串，返回的是截取的字符串
let str = '1222344422777'
console.log(str.slice(0,3), str)

// 对于数组来说，返回的是切割的数组
let arr1 = [1,2,3]
console.log(arr1.slice(2, 3))

// sort 对数组进行排序,参数是函数,影响原数组
let arr1  = [2, 5, 7, 3, 6, 7, 9, 0, 1]
let arr2  = [2, 5, 7, 3, 6, 7, 9, 0, 1]
let result1 = arr1.sort((a,b) => {return a-b})
let result2 = arr2.sort((a,b) => {return b-a})
console.log(result1, result2)

// toString()数组转字符串, 不影响元素组
// toString方法是写在Array构造函数的显示原型上,也即是arr1的隐式原型对象上,因为他们俩指向同一个地址
let arr1  = [2, 5, 7, 3, 6, 7, 9, 0, 1]
console.log(arr1.toString(), arr1)
console.log(arr1)

// forEach方法. 
// 不会影响原数组
let arr = [1, 3, 8, 9, 0, 0, 10]
let result = [];
arr.forEach((item, index)=>{
  if(item % 2){
    result.unshift(item)
  }
})
console.log(result, arr)

// map方法
let arr = [1, 3, 8, 9, 0, 0, 10]
let result = arr.map((item, index)=>{
  return index > 3 ? item+"Y" : item+"N"
})
console.log(result)


// filter方法
let arr = [1, 3, 8, 9, 0, 0, 10]
let result = arr.filter((item, index)=>{
  return item%2
})
console.log(result)

// find方法
let arr = [1, 3, 8, 9, 0, 0, 10]
let result = arr.find((item, index)=>{
  return item%2
})
console.log(result, arr)

// reduce方法
let arr = [1, 3, 8, 9, 0, 0, 10]
// arr.reduce(callback,[initialValue]) [initialValue]代表initialValue是一个可选参数
// callback （执行数组中每个值的函数，包含四个参数）
//     1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
//     2、currentValue （数组中当前被处理的元素）
//     3、index （当前元素在数组中的索引）
//     4、array （调用 reduce 的数组）

// initialValue （作为第一次调用 callback 的第一个参数。）

// 如果没有提供initialValue，
// reduce 会将数组第一个元素作为初始值,然后从下标1的地方开始执行callback方法，跳过第一个元素。
// 如果提供initialValue，从索引0开始
let sum = arr.reduce((prev, cur, index, arr) => {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);

let arr = [1, 3, 8, 9, 0, 0, 10]
let sum = arr.reduce((prev, cur, index, arr) => {
  // console.log(prev, cur, index);
  return prev + cur;
}, 4)
console.log(sum)

// 练习reduce 数组元素求和
let res = arr.reduce((prev, cur) => prev + cur)
console.log(res)

// es6数组方法
// Array.from() 将伪数组(类数组转化为真正的数组)
// 常见的伪数组: 
  // arguments(每个函数都有一个arguments对象,用来存放实参,如果形参的个数少于实参的话可以到arguments中去找剩下的实参)
  // DOM节点合集