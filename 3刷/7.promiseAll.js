function promiseAll(arr = []) {
    return new Promise((reslove, reject) => {
        if(arr.length == 0) {
            reslove([]);
        }
        const result = [];
        let flag = 0;
        for(let i = 0; i < arr.length; i++) {
            Promise.reslove(arr[i]).then(res => {
                if(flag === arr.length) {
                    reslove(result);
                }
                flag ++
                result[i] = res;
            }).catch(err => {
                reject(err);
            })
        }
    })
}

var promise1 = Promise.resolve(3);
var promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});
var promise3 = 42;

console.log(promiseAll([promise1, promise2]))