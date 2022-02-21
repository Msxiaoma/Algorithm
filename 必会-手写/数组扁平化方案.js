// 实现arr.flat()
// 默认deep = 1，打平1层，小于1 返回

function flat(arr, deep = 1) {
    if(deep < 1) {
        return arr.slice();
    }
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur, deep - 1) : cur);
    }, [])
}


function flat(arr, deep = 1) {
    const res = [];
    function myFlat(arr, deep) {
        arr.forEach(item => {
            if(Array.isArray(item) && deep > 0)  {
                myFlat(item, deep - 1);
            } else {
                res.push(item);
            }
        })
    }
    myFlat(arr, deep);
    return res;
}

//3. 堆栈
function forFlat(arr) {
    const stack = []
    const result = []
    while (arr.length) {
        let top = arr.pop()
        if(Array.isArray(top)) {
            arr.push(...top)
        } else {
            result.push(top)
        }
    }
    return result.reverse()
}


console.log(flat([1,2,3,[1,2,3,4, [2,3,4]]]))

// console.log([1,2,3,[1,2,3,4, [2,3,4]]].flat())

