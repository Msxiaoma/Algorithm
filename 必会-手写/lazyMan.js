// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!
//  
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//  
// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
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

// 考察链式调用和事件队列
class LazyLife{
  constructor(name) {
      this.name = name;
      this.tasks = [];
      this.sayName();
      setTimeout(()=> { // 优先让所有的同步方法放入tasks中，然后在执行
        this.next();
      }, 0)
  }
  next() {
    let task = this.tasks.shift();
    task && task();
  }
  sayName() {
    this.tasks.push(()=> {
        console.log(`Hi! This is ${this.name}!`)
        this.next();
    })
    return this;
  }
  sleep(time) {
    this.tasks.push(()=> {
        setTimeout(() => {
           console.log(`Wake up after ${time}`);
            this.next();
        }, time)
    })
    return this;
  }
  eat(something) {
    this.tasks.push(()=> {
        console.log(`Eat ${something}~`);
        this.next();
    })
    return this; 
  }

  sleepFirst(time) {
    this.tasks.unshift(()=> {
        setTimeout(() => {
            console.log(`Wake up after ${time}`);
            this.next();
        }, time)
    })
    return this;
  }
}

function LazyMan(name) {
    return new LazyLife(name);
}

// LazyMan("Hank").sleep(5).eat("dinner");
 LazyMan("Hank").eat("dinner").eat("supper");
// LazyMan("Hank").sleepFirst(5).eat("supper");