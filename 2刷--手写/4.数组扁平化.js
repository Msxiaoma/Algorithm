// array.flat() 默认打平一层，参数小于等于0 返回原数组

// 第一种: 利用 arr.reduce
function myFlat(arr, dep = 1) {
    if(dep < 1) {
        return arr.slice();
    }
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? myFlat(cur, dep - 1) : cur);
    }, [])
}

// 第二种： 利用 forEach

function flat(arr, dep = 1) {
    const res = [];
    function myFlat(arr, dep) {
        arr.forEach(item => {
            if(dep > 0 && Array.isArray(item)) {
                myFlat(arr, dep - 1);
            } else {
                res.push(item)
            }
        })
    })
    myFlat(arr, dep);
    return res;
}