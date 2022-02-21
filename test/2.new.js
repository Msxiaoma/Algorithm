function myNew(obj, ...params) {
    let newObj = Object.create(obj.prototype);
    let res = newObj.apply(obj, params);
    return res instanceof Object ? res : newObj;
}