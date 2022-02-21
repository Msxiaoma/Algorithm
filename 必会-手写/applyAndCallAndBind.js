// apply、call 、bind 三者的区别
//1. apply 两个参数(this， '数组')，call 多个参数（this, '参数1', '参数2', ...）、bind 多个参数(this, '参数1', '参数2', ...）
//2. apply 和 call 会立即执行，bind 返回一个函数，bind 返回的函数可以做构造函数，支持函数柯里化形式传参


// apply 改变函数的this指向，返回函数的执行结果，参数为this绑定的对象和一个数组
// apply 的本质其实就是，给传入的对象新增了一个调用 apply 方法的同名方法，调用完成之后，在删除该属性
function apply(obj, params) {
    let context = obj || window;
    let fn = Symbol();
    context[fn] = this;
    let res = context.fn(params);
    delete context[fn];
    return res;
}

function call(obj, ...param) {
    let context = obj || window;
    let fn = Symbol();
    context[fn] = this;
    let res = content.fn(...param);
    delete context[fn];
    return res;
}

function bind(obj) {
    let _this = this;
    let args = [...arguments].slice(1);
    return function T() {
        if(this instanceof T) {
            return new _this(...args, ...arguments);
        } else {
            return _this.apply(obj, args.concat(...arguments))
        }
    }
}