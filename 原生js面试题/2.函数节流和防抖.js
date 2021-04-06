// 函数节流
// 限制最大流量,就行打枪的时候,即使你很快,前后子弹也不可能连接到一起,
//打游戏的时候,即使你手一直在操作,出招的速度也是又一个极限的,那个极限就是就是最大流了,


// 函数防抖
// 防止抖动,当你频繁的触发某个事件的时候,我不理你,你停下来了我才做处理,

//@fn: 要执行的函数
//@delay: 设定的时限

//防抖函数
function debunce(fn,delay){
	let flag = null;
  return function(){
  	if(flag) clearTimeout(flag)
    //利用apply改变函数指向，使得封装后的函数可以接收event本身
    flag = setTimeout(()=>fn.apply(this,arguments),delay)
  }
}

//节流函数
function throttle(fn,delay){
	let flag = true;
  return function(){
  	if(!flag) return false;
    flag = false;
    setTimeout(()=>{
      fn.apply(this,arguments)
      flag=true
    },delay)
  }
}
