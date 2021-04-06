// 数组去重
// 思路: 一个空数组,每次王里面放元素时看下里面是不是已经有这个元素了,如果没有,才放进去
// 空数组不会执行数组遍历方法

// forEach 找到了还会继续遍历,不好
let arr = [2, 3, 4, 6, 5, 4, 3, 4, 4, 6]
let result = []
arr.forEach((item, index) => {
  let isHave = false
  result.forEach((it) => {
    if(it === item ) { isHave = true}
  })
  if(!index || !isHave){
    result.push(item)
  }
})
console.log(result)

// forEach 找到了还会继续遍历,不好
let arr = [2, 3, 4, 6, 5, 4, 3, 4, 4, 6]
let result = []
arr.forEach((item, index) => {
  let isHave = result.find((it) => {
    return item === it
  })
  if(!index || !isHave){
    result.push(item)
  }
})
console.log(result)

// find 找到了还会继续遍历,不好
let arr = [2, 3, 4, 6, 5, 4, 3, 4, 4, 6]
let result = []
arr.forEach((item, index) => {
  let isHave = result.includes(item)
  if(!isHave){
    result.push(item)
  }
})
console.log(result)

// for循环
let arr = [2, 3, 4, 6, 5, 4, 3, 4, 4, 6]
let result = []
for(let i = 0; i < arr.length; i++) {
  let isHave = false
  for(let j = 0; j < result.length; j++) {
    if( result[j] === arr[i]) {
      isHave = true
      break
    }
  }
  if(!isHave) {
    result.push(arr[i])
  }
}
console.log(result)

// set 
let arr = [2, 3, 4, 6, 5, 4, 3, 4, 4, 6]
 console.log(Array.from(new Set(arr)))


 // 数组扁平化
 // 遍历,如果发现还是数组,拆分
let arr = [[2, 3, [4, 5, [8, 0,], 6], 5, 4,], [ 3, 4,], 4, 6]
// console.log([1].concat(arr))
 function flatten(arr){
   let result = []
   arr.forEach((item) => {
     if(item instanceof Array){
      //  result.push(...arguments.callee(item))
       result = result.concat(arguments.callee(item))
     }else {
       result.push(item)
     }
   })
   return result 
 }
 console.log(flatten(arr))

