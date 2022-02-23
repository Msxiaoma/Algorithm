// 执行中间件的函数
function compose(middlewares) { 
    function dispatch(i) {
        if(i == middlewares.length) {
            return
        }
        let temp = middlewares[i];
        temp(()=> { // 当前的箭头函数是 next 方法
            dispatch(i+1);
        })
    }
    dispatch(0);
}  