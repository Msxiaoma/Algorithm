// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

function findCommonPrefix(str){
    let res = '';
    for(let i = 0; i < str[0].length; i++) {
        for(let j = 1; j < str.length; j++) {
            if(str[0][i] != str[j][i]) {
                return res;
            }
        }
        res += str[0][i];
    }
   return res;
}

console.log(findCommonPrefix(["dog","racecar","car"]))
