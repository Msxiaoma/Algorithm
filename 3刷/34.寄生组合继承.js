// 题目描述:实现一个你认为不错的 js 继承方式

function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
}

function Son(name, age) {
    Parent.call(this, name);
    this.age = age;
}


Son.prototype = Object.create(Parent.prototype);
Son.prototype.constructor = Son;


// 这个例子的高效率体现在它只调用了一次 Parent 构造函数，
// 并且因此避免了在 Son.prototype 上创建不必要的、多余的属性。
// 于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf()

