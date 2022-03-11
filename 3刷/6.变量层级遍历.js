// 1, "depth", true, null, {}, [] => 1
// [1,2,3, [2], [1, 2]] => 3
// {"test": {a: 3}} => 2

function maxDeep(params) {
    let dep = 1;
    if(!params instanceof Object) {
        return dep;
    } else {
        return getDep(params, dep);
    }
}

function getDep(params, dep) {
    if(!Object.keys(params).length) {
        return 1;
    }
    Object.keys(params).forEach(key => {
        if(params[key] instanceof Object) {
            dep = getDep(params[key], dep + 1);
        }
    })
    return dep;
}
console.log(maxDeep([1,2,3, [2], [1, 2], [4]]))