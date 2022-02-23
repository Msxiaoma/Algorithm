function deepClone(target, map = new WeakMap()) {
    if(typeof target === 'object') {
        let cloneObj = Array.isArray(target) ? [] : {};
        if(map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneObj);
        for(let key in target) {
            cloneObj[key] = deepClone(target[key], map);
        }
        return cloneObj;
    } else {
        return target;
    }
}

// 为什么使用 WeakMap 不使用Map?

//  WeakMap 是一堆键/值对的集合，他的键只能是对象，并且健是弱引用的。会被垃圾回收机制自动回收
//  map 的话对象之间存在强引用的关系，虽然可以手动释放，但是map 和 target 依然存在强引用的关系。
//  如果克隆的对象比较庞大时，Weakmap 不会对内存造成非常大的额外消耗

