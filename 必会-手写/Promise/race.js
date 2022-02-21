Promise.race = function(arr) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < arr.length; i++ ){
            Promise.resolve(arr[i]).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        }
    })
}