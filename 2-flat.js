// flat, 数组原型的一个方法，可以按照指定的深度拍平数组，dep 默认为 1
// dep = Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
// dep <=0 时，不拉平，返回数组
// arr 有空位时，默认跳过

//  concat + reduce
function flatDeep(arr, d = 1) {
    if(d <= 0) {
        return arr.slice(); 
    }
    return arr.reduce((sum, cur) => {
        return sum.concat(Array.isArray(cur) ? flatDeep(cur, d - 1) : cur);
    }, []) // 此处的 [] 是reduce 执行 callback函数的初始值，如果没有初始值，默认为第一个参数
};


// 2.  自执行函数 + forEach 
function forFlat(arr, deep) {
    let result = [];
    // forEach 会自动去除空元素
    (function flat(arr, deep) {
        arr.forEach(item => {
            if(Array.isArray(item) && deep > 1) {
                flat(item, deep - 1)
            } else {
                result.push(item)
            }
        })
    })(arr, deep)
    return result
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


console.log(flatDeep([1,2,3,[1,2,3,4, [2,3,4]]], Infinity))
