
class EventEmitter{
    constructor() {
        this.event = {};
    }
    on(type, fn) {
        let listeners = this.event[type] || [];
        listeners.push(fn);
        this.event[type] = fn;
    }
    emit(type, ...params) {
        if(this.event[type]) {
            this.event[type].forEach(callback => {
                callback(...params);
            })
        }
    }
    // 删除订阅
    off(type, callback) {
        if(!this.event[type]) {
            return;
        }
        this.event[type] = this.event[type].filter(fn => {
            return fn != callback;
        })
    }
    // 只执行一次订阅事件
    once(type, callback) {
        function fn() {
            callback();
            this.off(type, callback);
        }
        this.on(type, fn);
    }
}