function newFun(construct, params) {
    let obj = Object.create(construct.prototype); // 将 obj 的 _proto_ 指向 construct.prototype
    let res = construct.apply(obj, ...params);
    return res instanceof Object ? res : obj;
}

// 函数对象都有一个 prototype 属性
// 实例对象有一个 _proto 属性，指向构造函数的 prototype


//  new 的过程
// 1. 创建一个空对象，让空对象的_proto_指向构造函数的 prototype
// 2. 将构造函数的this指向该对象
// 3. 构造函数有返回值返回返回值否则返回该对象
