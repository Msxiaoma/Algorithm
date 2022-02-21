// Object.create()   将传入的对象作为新创建的空对象的原型，并返回这个空对象；

function ObjectCreate(obj) {
    // 新声明一个函数
    function C() {};
    // 函数原型指向 obj
    C.prototype = obj;
    // 返回这个函数的实例化对象
    return new C();
}