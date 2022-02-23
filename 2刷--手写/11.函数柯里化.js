// 第一题

function add() {
    let args = [...arguments]
    let fn = function() {
        args = args.concat([...arguments]);
        return fn;
    }
    fn.toString = function() {
       return args.reduce((pre, cur) => {
           return pre + cur;
       })
    }
    return fn;
}

// 当对象作为操作符旁边的一个操作对象时， 会默认调用toString
// valueOf() 返回最适合该对象类型的原始值；
// toString() 将该对象的原始值以字符串的形式返回；

// 在数值运算中会优先调用valueOf() ;
// 在字符串运算中优先调用toString() ;
// let a = add(1)(2)(3)(4, 5) * 1;
// console.log(a);


// 第二题
var foo = function(...args) {
 // 要求实现函数体
    let fn = function(...cur) {
        return foo(...args, ...cur);
    }
    fn.getValue = function() {
        return args.reduce((pre, cur) => {
            return pre + cur;
        }, 0);
    }
    return fn;
}

var f1 = foo(1,2,3);
console.log(f1.getValue()); // 6 输出是参数的和
var f2 = foo(1)(2,3);
console.log(f2.getValue()); // 6
var f3 = foo(1)(2)(3)(4);
console.log(f3.getValue()); // 10


// 第三题
// 完成 combo 函数。它接受任意多个单参函数（只接受一个参数的函数）作为参数，并且返回一个函数。它的作为用：使得类似 f(g(h(a))) 这样的函数调用可以简写为 combo(f, g, h)(a)

function combo(...args) {
    args.length && args.reverse();
    return function(params) {
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

// TODO: 实现函数柯里化: 使用多个参数的一个函数转换成一系列使用一个参数的函数
function curry (fn) {
  if (typeof fn !== 'function') throw TypeError('参数需要是个函数')
  let length = fn.length // 形参的个数
  let args = [].slice.call(arguments, 1)
  return function () {
    let allArgs = args.concat([].slice.call(arguments))
    if (allArgs.length < length) {
      // 注意
      return curry.call(this, fn, ...allArgs)
    } else {
      return fn.apply(this, allArgs)
    }
  }
}