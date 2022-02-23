
// 算法题，fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

  
// u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')，实现这个u

class U {
 constructor() {
     this.promise = Promise.resolve();
 }
 
 console(val) {
     this.promise = this.promise.then(() => {
        console.log(val);
     });
     return this;
 }
 
 setTimeout(wait) {
     this.promise = this.promise.then(() => {
         return new Promise(resolve => {
             setTimeout(() => {
                 resolve()
             }, wait);
         });
     })
     return this;
 }
}
const u = new U()
u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')


// 看代码，说结果

var length = 10;
function fn() {
 return this.length + 1;
}
var obj1 = {
 length: 5,
   test1: function() {
     return fn()
 }
}
obj1.test2 = fn;
obj1.test1.call()
obj1.test1()
obj1.test2.call()
obj1.test2()


// 输出题

function Foo () {
    getName = function () {
        console.log(1)
    }
    return this
}
Foo.getName = function () {
    console.log(2)
}
Foo.prototype.getName = function () {
    console.log(3)
}
var getName = function () {
    console.log(4)
}
function getName () {
    console.log(5)
}
Foo.getName()
getName() 
Foo().getName()
getName()
new Foo.getName()
new Foo().getName()
new new Foo().getName()

// 输出题

var length = 10
function fn(){
    return this.length+1
}
var obj1={
    length:5, 
    f1:fn, 
    f2: function(){
     	console.log(this) // obj1
     	return fn() // 11
    	}, 
    f3:()=>{
    	console.log(this) // obj1
    	return fn() // 6
    }
}
// 以下执行结果
obj1.f1() // 6
obj1.f2() // 11
obj1.f3() //


// 输出题

const myObject={
    foo:"bar",
    func: function() {
        const self = this
        console.log("1=>", this.foo)
        console.log("2=>", self.foo)
        (function(){
        	console.log("3=>", this.foo)
        	console.log("4=>", self.foo)
        })()
    }
}
myObject.func()
const func = myObject.func
func()
// 进阶
const myObject={
    foo:"bar",
    func: function() {
        const self = this
        console.log("1=>", this.foo)
        console.log("2=>", self.foo)
        (()=>{
        	console.log("3=>", this.foo)
        	console.log("4=>", self.foo)        
        })()
    }
}
myObject.func()
const func = myObject.func
func()