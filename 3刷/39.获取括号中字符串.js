// 函数的作用是输出字符串中所有被"()"包裹的字符串，
// getIncludeStrings('(a+b)*c+(c*(d-e)+f)') // 输出 ['a+b', 'd-e', 'c*(d-e)+f']​

function getIncludeStrings(str) {
    const res = [];
    const stack = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] == '(') {
            let obj = {
                value: '(', 
                index: i
            }
            stack.push(obj);
        } 
        if(str[i] == ')') {
           let temp = stack.pop();
           res.push(str.slice(temp.index + 1, i))
        }
    }
    return res;
}

console.log(getIncludeStrings('(a+b)*c+(c*(d-e)+f)') )