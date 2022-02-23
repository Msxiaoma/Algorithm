Promise.all = function(arr = []) {
    return new Promise((resolve, reject) => {
        if(arr.length == 0) {
            resolve([])
        }
        const res = [];
        let flag = 0;
        let size =  arr.length;
        for(let i = 0; i < size; i++) {
            Promise.resolve(arr[i]).then(res => {
                if(flag == size) {
                    resolve(res);
                } else {
                    res[i] = res;
                    flag ++;
                }
            }, err => {
                reject(err)
            })
        }
    })
}