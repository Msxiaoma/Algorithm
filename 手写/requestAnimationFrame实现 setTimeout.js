function mySetTimeout(fn, seconds) {
    let startTime = Date.now(), endTime = Date.now();
    let loop = () => {

    }
}


function promiseAllSettled(arr) {
    const result = [];
    let flag = 0;
    return new Promise((resolve) => {
         for(let i = 0; i < arr.length; i++) {
        Promise.resolve(arr[i]).then(res => {
            if(flag == arr.length) {
                resolve(res)
            } else {
                flag ++
                result[i] = res;
            }
        }).catch(err => {
            if(flag == arr.length) {
                resolve(res)
            } else {
                flag ++
                result[i] = err;
            }
        })
       
        }
    })
}


Promise.protoType.finally  = function() {
    return g
}

let promiseFinally = function() {
    return 
}

promiseAllSettled()