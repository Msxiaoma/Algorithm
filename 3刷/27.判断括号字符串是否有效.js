// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

// 示例 1：

// 输入：s = "()"
// 输出：true

// 示例 2：

// 输入：s = "()[]{}"
// 输出：true

// 示例 3：

// 输入：s = "(]"
// 输出：false


function isCheck(str) {
    if(!str.length % 2) {
        return false;
    }
    const map = {
        '(' : ')',
        '{': '}',
        '[': ']'
    }
    const stack = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i]);
        } else {
            let top = stack.pop();
            if(map[top] !==  str[i]) { // 左右括号相等
                return false
            }
        }
    }
    return !stack.length ? true : false;
}

console.log(isCheck("()"))