var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.')
  
    for (let i = 0; i < v1.length || i < v2.length; i++) {
        let x = parseInt(v1[i]), y = parseInt(v2[i])
        if((x && !y) || (x > y)) {  // 说明 v1 没有访问完, v2 已经访问完
            return 1
        }
        if((!x && y) || (x < y)) {
            return -1
        }
    }
    return 0
};