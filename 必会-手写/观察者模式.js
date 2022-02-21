class Observer {
    update(ob) {
        console.log('检测对象发生变化');
    }
}

class Observerd {
    constructor(){
        this.observers = []
    }
    add(obj) {
        this.observers.push(obj);
    }
    notify() {
        this.observers.forEach(item => {
            item.update(this)
        });
    }
}

let observer1 = new Observer();
let observer2 = new Observer();

let a = new Observerd();

a.add(observer1);
a.add(observer2);

console.log('a', a.observers)
// a.notify()