// flat, 数组原型的一个方法，可以按照指定的深度拍平数组，dep 默认为 1
// dep = Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
// dep <=0 时，不拉平，返回数组
// arr 有空位时，默认跳过

function flatDeep(arr, d = 1) {
    if(d <= 0) {
        return arr.slice(); 
    }
    let result = arr.reduce((sum, cur) => {
        return sum.concat(Array.isArray(cur) ? flatDeep(cur, d - 1) : cur);
    }, []) // 此处的 [] 是reduce 执行 callback函数的初始值，如果没有初始值，默认为第一个参数
    return result;
};


console.log(flatDeep([1,2,3,[1,2,3,4, [2,3,4]]], Infinity))
