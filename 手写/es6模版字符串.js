// 1. str 的 replace 有2个参数，第一个参数可以是字符串或者正则表达式，第二个参数可以是字符串也可以是function
// 2. 当第一个参数是字符串时,只有匹配到的第一个字符串被替换掉
// 3. 当第二个参数为 function 时，function 有四个参数
function variableReplace(str) {
   return = str.replace(/\$\{(.+?)\}/g, (match, key) => {
           return eval(key);
    })
}
