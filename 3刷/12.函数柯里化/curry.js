// TODO: 实现函数柯里化: 使用多个参数的一个函数转换成一系列使用一个参数的函数

// curry 需要知道原来的函数，有几个参数

function add(a, b, c, d) {
    return a + b + c + d;
}

let acc = curry(add);
// console.log(acc(1)(2)(3)(4))
console.log(acc(1, 2, 3)(4))

function curry(fn, params) {
    let length = fn.length; // 拿到的是形参个数
    let args = params || [];
    return function() {
        args = args.concat([...arguments]);
        if(length > args.length) {
            return curry.call(this, fn, args)
        } else {
            return fn.apply(this, args);
        }
    }
}