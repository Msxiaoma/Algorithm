/**
 * 标题：JS实现一个带并发限制的异步调度器
描述信息
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
 */

class Scheduler {
    constructor(num) {
        this.num = num;
        this.tasks = [];
        this.runTasks = [];
    }
    add(fn) {
        return new Promise((resolve) => {
            console.log('fn', fn)
            console.log('resolve', resolve)
            fn.resolve = resolve;
            if(this.runTasks.length < this.num) {
                this.run(fn)
            } else {
                this.tasks.push(fn)
            }
        })
    }
    run(fn) {
        this.runTasks.push(fn);  // 同步代码，放入同时运行的任务
        fn().then(() => {  // then 函数放入微任务队列，resolve之后才可以执行下一个then
            fn.resolve();
            this.runTasks.splice(this.runTasks.indexOf(fn), 1);
            if(this.tasks.length > 0) {
                this.run(this.tasks.shift());
            }
        })
    }
}


const timeout = (time) => new Promise(resolve => {
	setTimeout(resolve, time);
})

const scheduler = new Scheduler(4);

const addTask = (time, order) => {
    console.log('order', order);
	scheduler.add(() => timeout(time)).then(() => console.log(order));
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4