// Promise.allsettled(), 参数是一个 promise 数组 每个promise按照顺序返回
// 不过是失败还是成功、所有promise对象的状态发生改变，返回的 promise 才会发生状态改变
// 返回值 [{status: fulfilled, value: 值}, {status: rejected, reason: ''}]

Promise.allsettled(arr = []) {
    return new Promise((resolve) => {
        if(arr.length == 0) {
            resolve([])
        }
        const res = [];
        let flag = 0;
        let size = arr.length;
        for(let i = 0; i < size; i++) {
            Promise.resolve(arr[i]).then(res => {
                if(flag == size) {
                    resolve(res);
                } else {
                    flag ++
                    res[i] = {
                        status: 'fufilled',
                        value: res
                    }
                }
            }).catch(err => {
                if(flag == size) {
                    resolve(res);
                } else {
                    flag ++
                    res[i] = {
                        status: 'rejected',
                        reason: err
                    }
                }
            })
        }
    }) 
}