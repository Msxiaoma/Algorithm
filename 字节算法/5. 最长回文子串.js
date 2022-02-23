// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 可能是奇数也可能是偶数, 从中间向两边扩散
var longestPalindrome = function(s) {
    function getStr(s, l, r) {
        while(l > -1 && r < s.length && s[l] == s[r]) {
            l--;
            r++;
        }
        // substr 返回从开始的索引，到指定字符长度的字符串
        // 返回以s[l]和s[r]为中心的最长回文串
        return s.substr(l + 1, r - l - 1);
    }
    let res = '';
    for(let i = 0; i < s.length; i++) {
        let str1 = getStr(s, i, i);
        let str2 = getStr(s, i, i + 1);
        res = res.length > str1.length ? res : str1;
        res = res.length > str2.length ? res : str2;
    }
    return res;
};