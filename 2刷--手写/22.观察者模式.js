// 观察者更新函数
// 被观察者通知函数
class Observer{
    constructor(name) {
        this.name = name;
    }
    update(state) {
        console.log(this.name + '收到通知，修改' + state)
    }
}

class Observerd{
    constructor() {
        this.quene = [];
        this.stat = ''
    }
    add(obj) {
        this.quene.push(obj) 
    }
    notice() {
        this.stat = '消息'
        this.quene.forEach(item => {
            item.update( this.stat);
        })
    }
}
