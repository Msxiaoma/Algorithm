// 浅拷贝：Object.assgin()

// 深拷贝：JSON.stringfiy()， 存在问题，function 和  undefined 无法拷贝，存在循环引用

// 进阶版

function deepClone(target, map = WeakMap()) {
    if(target instanceof Object) {
        let cloneObj = Array.isArray(target) ? [] : {};
       if(map.get(target)) {
           return map.get(target);
       }
       map.set(target, cloneObj);
       Object.keys(target).forEach(key => {
           cloneObj[key] = deepClone(target[key], map);
       })
       return cloneObj;
    } else {
        return target;
    }
}

