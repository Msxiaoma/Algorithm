let a = add(1)(2)(3)(4, 5) * 1;
console.log(a); // 15

// 实现如上函数

function add() {
    let args = [...arguments];
    let fn = function() {
        args = args.concat([...arguments]);  // ！！！concat 需要重新赋值
        return fn;
    }
    fn.toString = function() {
        return args.reduce((pre, cur) => {
            return pre + cur;
        })
    }
    return fn;
}