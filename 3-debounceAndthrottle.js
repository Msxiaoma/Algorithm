// 函数防抖：在一定时间后执行该操作，如果指定时间内触发，则重新计算时间
// 应用场景：输入校验
function debounce(fn, seconds){
  let timer = null;
  return function(){
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arugements);
    }, seconds);
  }
}
// 函数节流：在一定的时间内触发一次
// 应用场景：拖拽、下拉加载
function throttle(fn, seconds){
  let timer = null;
  return function(){
    if(timer) {
      return;
    }
    timer = setTimeout(()=>{
      fn.apply(this, arugements);
      clearTimeout(timer);
    }, seconds)
  }
}
