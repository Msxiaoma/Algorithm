// Arrary.flat()打平数组，小于0返回原数组，默认打平一层

// reduce
function myFlat(arr, dep = 1) {
    if(dep < 1) {
        return arr;
    }
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? myFlat(cur, dep - 1) : cur);
    }, [])
}

// 自执行函数
function myFlat(arr, dep = 1) {
    const res = [];
    (function flat(arr, dep) {
        arr.forEach(item => {
            if(Array.isArray(item) && dep > 0) {
                flat(item, dep - 1);
            } else {
                res.push(item);
            }
        })
    })(arr, dep);
    return res;
}

// 利用栈
function myFlat(arr, dep = 1) {
    const res = [];
    while(arr.length) {
        let top = arr.pop();
        if(Array.isArray(top) && dep > 0) {
            dep = dep - 1;
            arr.push(...top)
        } else {
            res.unshift(top);
        }
    }
    return res;
}

const arr = [1,2,3,4,5,[3,2,[1,0, [9]]]]

console.log(myFlat(arr, Infinity))