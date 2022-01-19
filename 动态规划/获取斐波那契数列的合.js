function sum(n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    let temp = 0;
    for(let i = 1; i <=n; i++) {
        dp[i+1] = dp[i] + dp[i-1];
        temp += dp[i+1];
    }
    return temp;
}

console.log(sum(2))

// 1, 1, 2, 3, 5, 8
