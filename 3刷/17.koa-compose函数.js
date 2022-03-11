function compose(middlewares) {
    function dispatch(i) {
        if(i == middlewares.length) {
            return
        }
        let middle = middlewares[i];
        middle(() => {
            dispatch(i++);
        })
    }
    dispatch(0);
}