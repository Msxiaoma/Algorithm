function newFun(construct, params) {
    let obj = Object.create(construct.prototype); // 将 obj 的 _proto_ 指向 construct.prototype
    let res = construct.apply(obj, ...params);
    return res instanceof Object || obj;
}

// 函数对象都有一个 prototype 属性
// 实例对象有一个 _proto 属性，指向构造函数的 prototype