//['aaafsd', 'aawwewer', 'aaddfff'] => 'aa'

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。
// substr： 截取指定字符串
// substring/slice: 指定截取位置；slice参数可以为负数，substring 不可以为负数

function longestCommonPrefix(strs) {
    let str = ''
    if(!strs.length) {
        return str;
    }
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] != strs[j][i] ) {
                return str;
            }
        }
        str += strs[0][i];
    }
    return str;
}

console.log(longestCommonPrefix(['aa/bb/sd', 'aa/bb/wwewer', 'aa/bb/ddfff']))