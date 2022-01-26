// 找属性的叫做原型链
// 找变量的叫做作用域链
// 第一种继承，原型继承

// 1. 原型链继承： 缺点：1. 每个实例对引用类型的属性的修改都会影响其他实例； 2. 无法像父类传参
// function Parent() {
//     this.name = ['parent']
//     this.age = '12'
// }
// Parent.prototype.getName = function() {
//     console.log('name', name);
//     return this.name;
// }
// function Son() {}
// Son.prototype = new Parent();

// let son1 = new Son();
// let son2 = new Son();

// console.log('son1.name', son1.name);
// son1.name.push('hhh')
// console.log('son2', son2.name);


// 2. 构造函数继承： 无法复用父类的方法，每一次实例化子类都要执行一次父类的方法

// function Parent(name) {
//     this.name = name;
// }
// function Son(name) {
//     Parent.call(this, name);
// }

// let son3 = new Son('son3');
// let son4 = new Son('son4');
// console.log('son3', son3);
// console.log('son4', son4)

// 3. 组合继承（原型链继承+构造函数继承）: 缺点：需要执行两次父类的构造函数
function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
}

function Son(name, age){
    Parent.call(this, name);
    this.age = age;
}

Son.prototype = new Parent();
let son5 = new Son('son5', 5)
console.log(son5.getName())
let son6 = new Son('son6', 6)

// 4. 原型式继承
function createObj(o) {
    function F(){};
    F.prototype = o;
    return new F;
}
let person = {
    name : 'arzh',
    body : ['foot','hand']
}

let son7 = createObj(person);
let son8 = createObj(person);

// 5. 寄生式继承
function createEnhanceObj(o) {
    //代替原型式继承的createObj
    var clone = Object.create(o)
    clone.getName = function () {
        console.log('arzh')
    }
    return clone;
}


// 设计模式和继承这些有什么关系？

// 可以通过实例的constructor 拿到它的构造函数
// 原型对象其实就是构造函数的 prototype

// constructor 就是实例指向构造函数的指针，可以通过它找到构造函数
// prototype 就是存放同一类实例公共属性和方法的对象，每个函数都有自己的prototype


// 实例对象的._proto_ = 构造函数的 prototype
// 实例对象的._proto_.constructor = 构造函数



// 实例相当于一个化妆师通过一些手段，把你画成了一个新的样子，构造函数其实相当于这个化妆师，原型对象相当于你本来的样子