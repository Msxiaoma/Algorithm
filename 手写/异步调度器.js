/**
 * 标题：JS实现一个带并发限制的异步调度器
描述信息
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
 */

class Scheduler {
	constructor(count) {
		this.count = count
        // 所有的任务
		this.queue = []
        // 正在运行的任务
		this.tasks = []
	}

	add(task) {
        return new Promise(resolve => {
            task.resolve = resolve;  // 保存当前 promise 的状态
            if(this.tasks.length < this.count) {  // 保证并发数量
                this.run(task);
            } else {
                this.queue.push(task);
            }
        })
	}

    run(task) {
        this.tasks.push(task);
        task().then(() => {
            task.resolve();
            this.tasks.splice(this.tasks.indexOf(task), 1);
            if (this.queue.length > 0) {
                this.run(this.queue.shift());
            }
        })
    }
}


// const timeout = (time) => new Promise(resolve => {
// 	setTimeout(resolve, time);
// })

// const scheduler = new Scheduler(2);

// const addTask = (time, order) => {
// 	scheduler.add(() => timeout(time)).then(() => console.log(order));
// }

// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4