let obj = {
    a: 1,
    b: ['1', 2, 4],
    c: {
        f: 1
    }
}

obj.d = obj;

// console.log(JSON.stringify(obj));

function deepClone(target, map = new WeakMap()) {
    if(typeof target === 'object') {
        let cloneObj = Array.isArray(target) ? [] : {};
        if(map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneObj);
        Object.keys(target).forEach(key => {
            cloneObj[key] = deepClone(target[key], map);
        })
        return cloneObj;
    }
    return target;
}

const newObj = deepClone(obj)

console.log(newObj)