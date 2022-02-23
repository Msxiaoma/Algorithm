// 1, "depth", true, null, {}, [] => 1
// [1,2,3, [2], [1, 2]] => 3
// {"test": {a: 3}} => 2

function maxDeep(params) {
    let dep = 1;
    if(params instanceof Object || params instanceof Array) {
        return getDep(params, dep);
    } 
    return dep;
}

function getDep(params, dep) {
    let maxDep = dep;
    if(Object.keys(params).length === 0) {
        return maxDep;
    }
    Object.keys(params).forEach(key => {
        maxDep = Math.max(getDep(params[key], dep + 1), dep);
    })
    return maxDep;
}



console.log(maxDeep({"test": {a: 3}}))