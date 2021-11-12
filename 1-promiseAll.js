// promise.all 接收一个具有 Iterator 接口的对象, 比如 array、map、set
// promise.all 只有所以的 promise 全部 resolve之后，才返回，有一个失败全部失败
// promise.resolve 返回传入参数解析之后的promise的对象，要在解析为自身的thenable（即带有"then" 方法） 上调用Promise.resolve。这将导致无限递归

function promiseAll(list){
    let result = new Array(list.length);
    let flag = 0
    return new Promise((resolve, reject) => {
        list.forEach((item, i) => {
            Promise.resolve(item).then(res => {
                flag++;
                result[i] = res;
                if(flag == list.length){
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        })
    })
}

// promise.race 如果有一个 promise resolve 之后，则返回该 promise 的值
function promiseRace(list) {
    let result
    return new Promise((resolve, reject) => {
        list.forEach((item, index) =>{
            Promise.resolve(item).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    })
}
