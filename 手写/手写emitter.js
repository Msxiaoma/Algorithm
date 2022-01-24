// 创建一个 EventEmitter 类
// 在该类上创建一个事件中心（Map）
// on 方法用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）
// emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）
// off 方法可以根据 event 值取消订阅（取消订阅）
// once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
// 注册一个 newListener 用于监听新的事件订阅

class Emmiter{
    constructor() {
        this.events = {};  // 事件中心
    }
    /**
        * 触发事件
        * 原理：将该事件增加到该事件类型的队列中
        * 状态：未执行
        * @param event 事件名称
        * @param cb 回调函数
    */
    on(event, fn) {
        const queue = this.events[event] || []  // 一个事件可以绑定个函数
        queue.push(fn);
        this.events[event] = queue;
        return this;
    }
    /**
        * 触发事件
        * 原理：执行该事件类型的所有事件，按照队列顺序执行
        * 状态：准备执行 | 执行中
        * 使用方式：xx.emit(eventName, args)
        * @param args
    */
    emit(event, ...args) {
        const listeners = this.event[event] || [];
        callbacks.forEach(cb => cb(...args));
    }
     /**
        * 取消事件
        * 原理：将所有该事件类型的事件从队列中删除
        * 状态：取消执行
        * @param event 事件名称
        * @param cb 回调函数
     */
    off(event, cb) {
        this.events[event] && this.events[event].filter(item => {
            return item != fn;
        })
        return this;
    }
}

let emiter = new Emmiter();
emiter.on('click', function() {
    console.log('hhhh')
})

emiter.emit('click')