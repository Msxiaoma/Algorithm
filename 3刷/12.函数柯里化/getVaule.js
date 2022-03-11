
// var f2 = foo(1)(2,3);
// console.log(f2.getValue()); // 6
// var f3 = foo(1)(2)(3)(4);
// console.log(f3.getValue()); // 10


// 实现 foo 函数
function foo() {
    let args = [...arguments]
    let fn = function() {
        args = args.concat(...arguments);
        return fn;
    }
    fn.getValue = function() {
        return args.reduce((pre, cur) => {
            console.log('pre', pre)
            return pre + cur
        });
    }
    return fn;
}
var f1 = foo(1,2,3);
console.log(f1.getValue()); // 6 输出是参数的和