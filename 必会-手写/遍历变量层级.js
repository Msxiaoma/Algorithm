
// 1, "depth", true, null, {}, [] => 1
// [1,2,3, [2], [1, 2]] => 3
// {"test": {a: 3}} => 2

function maxDeep(params) {
   if(params instanceof Object || params instanceof Array) {
        let depth = 1
        return getDep(params, depth)
   } else {
       return 1
   }
}
function getDep(obj, depth) {
    let maxDep = depth;
    if(!Object.keys(obj).length) {
        return maxDep
    }
    Object.keys(obj).forEach(key => {
       maxDep = Math.max(getDep(obj[key], depth + 1), depth)
    });
    return maxDep
}
console.log(maxDeep([1,2,3, [1,2], [1,[4]]] ))