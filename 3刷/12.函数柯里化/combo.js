// 完成 combo 函数。它接受任意多个单参函数（只接受一个参数的函数）作为参数，并且返回一个函数。
// 它的作为用：使得类似 f(g(h(a))) 这样的函数调用可以简写为 combo(f, g, h)(a)

function combo(...args) {
    args.length && args.reverse();
    return function (params) {
        return args.reduce((pre, cur) => {
            return cur(pre);
        }, params)
    }
}



/* 以下为测试代码 */
const addOne = (a) => a + 1
const multiTwo = (a) => a * 2
const divThree = (a) => a / 3
const toString = (a) => a + ''
const split = (a) => a.split('')

split(toString(addOne(multiTwo(divThree(666)))))
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree)
console.log(testForCombo(666))

// => ["4", "4", "5"]




// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1));  // 1+4+3+2+1=11


function compose(...args) {
    args.length && args.reverse();
    return function(param) {
        return args.reduce((pre, cur) => {
            return cur(pre);
        }, param)
    }
}
