// 观察者模式：观察者，被观察者

class Observer{
    constructor(name) {
        this.name = name;
    }
    update(state) {
        this.name = state;
      // 被观察者发生变化
    }
}

class Observerd{
    constructor() {
        this.observers = [];
        this.stat = '';
    }
    add(observer) {
        this.observers.push(observer);
    }
    notice() {
        this.observers.forEach(item => {
            item.update(this.stat);
        })
    }
}