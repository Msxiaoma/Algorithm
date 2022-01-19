// apply、call 、bind 三者的区别
1. apply 两个参数(this， '数组')，call 多个参数（this, '参数1', '参数2', ...）、bind 多个参数(this, '参数1', '参数2', ...）
2. apply 和 call 会立即执行，bind 返回一个函数，bind 返回的函数可以做构造函数，支持函数柯里化形式传参


// apply 改变函数的this指向，返回函数的执行结果，参数为this绑定的对象和一个数组
// apply 的本质其实就是，给传入的对象新增了一个调用 apply 方法的同名方法，调用完成之后，在删除该属性
function applyFunc(context, args) {
    if(typeof this == 'function') { // 此处的 this 值的是调用 apply 的方法
        throw new TypeError('error')
    }
    context = context || window;
    let fn = Symbol(); // 给当前的对象，添加一个调用 apply 方法的方法
    context[fn] = this;
    const res = content.fn(...args);
    delete context[fn];
    return res;
}



function callFunc(context, ...args) {
    if(typeof this == 'function') {
        throw new TypeError('error');
    }
    context = context || window;
    let fn = Symbol();
    context[fn] = this
    const res = content.fn(...args);
    delete context[fn];
    return res;
}

// 返回一个函数
function myBind(obj, ...args) {
    if(typeof this === 'function'){
        throw new TypeError('error')
    }
   const _this = this;
   return function T() {
       if(obj instanceof T) {   // 1. 返回的函数被用作了构建函数
           return new _this(...args)
       } else {  //  2. 返回函数被用作普通函数
           _this.myApply(ctx, ...args)
       }
   }
}

