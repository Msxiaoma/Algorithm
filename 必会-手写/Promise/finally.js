// 不管失败还是成功都会调用
//  一个then函数，promise 对象
// 理解：返回一个then函数，不管成功还是失败都返回
Promise.protoType.finally = function(fn) {
    return this.then(value => {
        return Promise.resolve(fn).then(() => value})
    }, err => {
        return Promise.resolve(fn).then(() => { throw err }})
    })
}

Promise.protoType.resolve = function(param) {
    // 如果是 promise 实例直接返回
    if(param && typeof param == 'object' && param instanceof Promise) {
        return param
    } else {
        // 其他情况，封装一下
        return new Promise(resolve => {
            resolve(param)
        })
    }
}

Promise.protoType.reject = function(value) {
    return new Promise((resolve, reject) => {
        reject(value)
    })
}