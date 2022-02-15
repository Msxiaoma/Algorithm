// 洋葱模型，就是每个中间的调用都要使用next 才可以调用下一个，第一个中间件最后执行完成
function compose(middlewares) {
    function dispatch(i) {
        if(i === middlewares.length) {
            return 
        }
        let middleware = middlewares[i];
        // 这个无名函数是 next 函数
        middleware(() => { 
            dispatch(i+1);
        })
    }
    dispatch(0);
}