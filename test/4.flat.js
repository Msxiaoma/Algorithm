åfunction flat(arr, dep = 1) {
    if(dep < 1) {
        return arr.slice();
    }
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur, dep - 1) : cur );
    }, [])
}

function flat(arr, dep = 1) {
    const res = [];
    if(dep > 0)
        arr.forEach(item => {
            if(Array.isArray(item)) {
                res = res.concat(flat(item, dep - 1));
            } else {
                res.push(item);
            }
        })
    } else {
        res = arr.slice();
    }
    return res;
}

// 普通递归
function flat(arr, dep = 1) {
    const res = [];
    if(dep > 0) {
        for(let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                res = res.concat(flat(arr[i], dep - 1));
            } else {
                res.push(arr[i])
            }
        }
    }
    return res;
}
