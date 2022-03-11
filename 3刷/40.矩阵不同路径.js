// 题目描述
// 有个 m * n 的矩形，每次只能向下或向右移动一格，问从左上角到右下角有几种方式​
function getCount() {
    const dp = new Array(m);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n);
    }
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
}


getCount(1, 3) // 输出 1​
getCount(4, 3) // 输出 10