// 函数防抖：在一定时间后执行该操作，如果指定时间内触发，则重新计算时间
// 应用场景：输入校验
function debounce(fn, seconds){
  let timer = null
  return function(){
    if(timer) {
        clearTimeout(timer);
     )
    timer = setTimeout(() => {
      fn.apply(this, arugements);
    }, seconds);
  }
}
