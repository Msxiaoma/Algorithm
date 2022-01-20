/**
 * @param {string} s
 * @return {number}
 */

// 输入：s = "33+2*22+14"
// 输出：7

var calculate = function(s) {
    s = s.trim();
    const stack = [];
    let preSign = '+';
    let num = 0;
    for(let i = 0; i < s.length; i++) {
        // 数字
        if(s[i] !== ' ' && !isNaN(Number(s[i]))) {
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt()
        }
        // num = 3 , s[i] = 3, i
        if(isNaN(Number(s[i])) || i === s.length - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num)
                    break;
                case '+':
                    stack.push(-num)
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
                    break;
            }
            preSign = s[i];
            num = 0;
        }
    }
    console.log(stack)
    let sum = 0;
    while (stack.length) {
        sum += stack.pop()
    }
    return sum;
};

console.log(calculate("3+2*22+14"))