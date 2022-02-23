function PromiseAll(arr) {
    return new Promise((resolve, reject) => {
        if(arr.length == 0) {
            return resolve([]);
        }
        const result = [];
        let flag = 0;
        for(let i = 0; i < arr.length; i++) {
            Promise.resolve(a[i]).then(res => {
                if(arr.length == flag) {
                  resolve(result);
                }
                flag ++;
                result[i] = res;
            }, err => {
                reject(err);
            })
        }
    })
}