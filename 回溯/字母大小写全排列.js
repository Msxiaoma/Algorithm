var letterCasePermutation = function(s) {
    const res = [];
    let backtracking = function(i, temp) {
        if(i == s.length) {
            res.push(temp);
            return
        }
        if(isNaN(s[i])) {
            backtracking(i+1, temp + s[i].toLocaleLowerCase())
            backtracking(i+1, temp + s[i].toLocaleUpperCase()) 
        } else {
            backtracking(i+1, temp + s[i]) 
        }
    }
    backtracking(0,'')
    return res
};