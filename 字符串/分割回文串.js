
// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
function isPali(s, l, r) {
    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

var partition = function(s) {
    const res = []; 

    function dfs(temp, start) { 
        if (start == s.length) {
            res.push(temp.slice());
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (isPali(s, start, i)) {
                temp.push(s.substring(start, i + 1));
                dfs(temp, i + 1);
                temp.pop();
            }
        }
    }
    dfs([], 0); 	
    return res;
};

// console.log(partition("aab"))