// 第一题
function add() {
  let args = [...arguments];
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

a = add(1)(2)(3)(4, 5) * 1;
console.log(a);


// 第二题
var foo = function(...args) {
 // 要求实现函数体
 let target = (...cur) => foo(...cur, ...args);
 target.getValue = () => args.reduce((p, q) => p + q, 0);
 return target;
}

var f1 = foo(1,2,3);
f1.getValue(); // 6 输出是参数的和
var f2 = foo(1)(2,3);
f2.getValue(); // 6
var f3 = foo(1)(2)(3)(4);
f3.getValue(); // 10

// 第三题
// 完成 combo 函数。它接受任意多个单参函数（只接受一个参数的函数）作为参数，并且返回一个函数。它的作为用：使得类似 f(g(h(a))) 这样的函数调用可以简写为 combo(f, g, h)(a)

function combo(...args) {
  args.length && args.reverse();
  return function(params) {
    return args.reduce((pre, cur) => {
        return cur(pre);
    }, params);
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
