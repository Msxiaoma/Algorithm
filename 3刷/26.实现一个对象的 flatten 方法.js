const obj = {
 a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
 b: [1, 3, {a: 2, b: 3}],
 c: 3
}

// flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }

function flatten(target) {
    if(typeof target !== 'object') {
        return target;
    }
    let res = {};
    function dsf(obj, path) {
        if(typeof obj === 'object') {
            if(Array.isArray(obj)) {
                obj.forEach((item, index) => {
                    dsf(item, `${path}[${index}]`);
                })
            } else {
                Object.keys(obj).forEach(key => {
                    dsf(obj[key], path ? `${path}.${key}` : key);
                })
            }
        } else {
            res[path] = obj;
        }
    }
    dsf(target, '')
    return res;
}

console.log(flatten(obj))
