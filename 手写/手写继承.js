// 找属性的叫做原型链
// 找变量的叫做作用域链
// 第一种继承，原型继承

function Parent() {
    this.name = 'parent'
    this.age = '12'
}

Parent.prototype.getName = function() {
    console.log('name', name);
    return this.name;
}

function Son() {}

Son.prototype = new Parent();
Son

let son1 = new Son();
let son2 = new Son();

console.log('son1', son1);
console.log('son2', son2);

// 设计模式和继承这些有什么关系？

// 可以通过实例的constructor 拿到它的构造函数
// 原型对象其实就是构造函数的 prototype

// constructor 就是实例指向构造函数的指针，可以通过它找到构造函数
// prototype 就是存放同一类实例公共属性和方法的对象，每个函数都有自己的prototype


// 实例对象的._proto_ = 构造函数的 prototype
// 实例对象的._proto_.constructor = 构造函数



// 实例相当于一个化妆师通过一些手段，把你画成了一个新的样子，构造函数其实相当于这个化妆师，原型对象相当于你本来的样子