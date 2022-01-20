/* 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。

表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
示例 1:

输入: "3+2*2"
输出: 7
示例 2:

输入: " 3/2 "
输出: 1
示例 3:

输入: " 3+5 / 2 "
输出: 5 
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim();
    const stack = [];
    let preSign = '+'; // 上一个符号；
    let num = 0; // 计算出每个数字的值,防止多位数的值
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ' ' && !isNaN(Number(s[i]))) {
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if(isNaN(Number(s[i])) || i == s.length - 1) {
           switch (preSign) {
               case '+':
                   stack.push(num);
                   break;
               case '-':
                   stack.push(-num);
                   break;
               case '*':
                   stack.push(stack.pop() * num);
                   break;
               default:
                   stack.push(Math.trunc(stack.pop() / num));
                   break;
           }
           preSign = s[i];
           num = 0;
        }
    }
    let sum = 0;
    stack.forEach(item => {
        sum += item
    });
   return sum;
};

console.log(calculate("14-3/2"))
