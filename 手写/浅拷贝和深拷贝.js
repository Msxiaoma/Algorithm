// 浅拷贝：基础类型拷贝的是值，引用类型拷贝的是引用，修改引用类型的值，两个对象都会发生变化
// 深拷贝：基础类型拷贝的是值，引用类型会开辟新的空间放新对象，新对象的改变不会影响老对象

// 第一种：简陋版

let targetObj = JSON.parse(JSON.stringfiy(obj));

// 存在的问题：undefined、function、循环引用

// 第二种：递归 + map(map用来保存新老对象的引用关系)

function deepClone(obj, map = new Map()) {
    if(obj instanceof Object) {
        let targetObj =  Array.isArray(obj) ? [] : {};
        if(map.get(obj)) {  // 解决循环引用
            return map.get(obj);
        }
        map.set(obj, targetObj);
        for(let key in obj) {
            targetObj[key] = deepClone(obj[key], map);
        }
    } else { 
        return obj;
    }
}

//  性能问题，—— 使用 WeakMap 代替 Map 弱引用，方便垃圾回收

// https://juejin.cn/post/6844903929705136141#heading-5