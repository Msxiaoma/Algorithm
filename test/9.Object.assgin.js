Object.assgin = function (target, ...source) {
    let res = Object(target);
    source.forEach(obj => {
        if(obj !== null || obj !== undefined) {
            for(let key in obj) {
                if(obj.hasOwnProperty(key)) { // 指示对象自身属性中是否具有指定的属性
                    res[key] = obj[key];
                }
            }
        }
    });
    return ret;
}