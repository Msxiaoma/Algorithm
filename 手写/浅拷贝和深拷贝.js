// 浅拷贝：基础类型拷贝的是值，引用类型拷贝的是引用，修改引用类型的值，两个对象都会发生变化
// 深拷贝：基础类型拷贝的是值，引用类型会开辟新的空间放新对象，新对象的改变不会影响老对象

// 浅拷贝
Object.assgin()

// 深拷贝

// 第一种：简陋版
let targetObj = JSON.parse(JSON.stringfiy(obj));

// 存在的问题：undefined、function 都无法被拷贝；拷贝循环引用会报错

// 第二种：递归 + map(map用来保存新老对象的引用关系)
function deepClone(target, map = new WeakMap()) {
    if(typeof target == 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if(map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for(let key in target) {
            cloneTarget[key] = deepClone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
}

// 为什么使用 WeakMap 不使用Map?

 WeakMap 是一堆键/值对的集合，他的键只能是对象，并且健是弱引用的。会被垃圾回收机制自动回收
 map 的话对象之间存在强引用的关系，虽然可以手动释放，但是map 和 target 依然存在强引用的关系。
 如果克隆的对象比较庞大时，Weakmap 不会对内存造成非常大的额外消耗



//  性能问题，—— 使用 WeakMap 代替 Map 弱引用，方便垃圾回收

// https://juejin.cn/post/6844903929705136141#heading-5