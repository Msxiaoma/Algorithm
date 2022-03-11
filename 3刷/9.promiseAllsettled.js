Promise.allSettled = function(arr = []) {
    return new Promise((reslove, reject) => {
        if(arr.length === 0) {
            reslove([]);
        }
        const result = [];
        let flag = 0;
        for(let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then(res => {
                if(flag == arr.length) {
                   reslove(result);
                } else {
                    flag ++;
                    result[i] = {
                        status: 'fufilled',
                        value: res
                    }
                }
            }).catch(err => {
                 if(flag == arr.length) {
                   reslove(result);
                } else {
                    flag ++;
                    result[i] = {
                        status: 'rejeted',
                        value: err
                    }
                }
            })
        }
    })
}