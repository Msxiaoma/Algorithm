// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan('Hank')输出:
// Hi! This is Hank!
//  
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//  
// LazyMan('Hank').eat('dinner').eat('supper')输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//  
// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
//  
// 以此类推。

class LazyLife{
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.sayName(); // 先调用 sayName 为了返回 this，进行链式调用
        setTimeout(() => {  // 因为是链式调用，优先将链式调用的同步任务放入 task 中，在执行setTimeout 宏任务
            this.run();
        }, 0)
    }
    run() {
        let task = this.tasks.shift();
        task && task();
    }
    sayName() {
        this.tasks.push(() => {
            console.log(`Hi This is ${this.name}!`)
            this.run();
        } )
        return this;
    }
    sleep(time) {
        this.tasks.push(() => {
            setTimeout(() => {
                console.log(`Wake up after ${time}!`)
                this.run();
            }, time)
        })
        return this;
    }
    eat(sth) {
        this.tasks.push(() => {
            console.log(`Eat ${sth}!`)
            this.run();
        })
        return this;
    }
    sleepFirst(time) {
        this.tasks.unshift(() => {
           setTimeout(() => {
                console.log(`Wake up after ${time}!`)
                this.run();
            }, time)
        })
        return this;
    }
}

function LazyMan(name) {
    return new LazyLife(name);
}

// LazyMan('Hank');
// LazyMan("Hank").sleep(10).eat("dinner")
// LazyMan('Hank').eat('dinner').eat('supper');
LazyMan('Hank').sleepFirst(5).eat('supper');