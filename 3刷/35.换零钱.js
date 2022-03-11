// 示例1：
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1

// 示例2：
// 输入: coins = [2], amount = 3
// 输出: -1


var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        for(let coin of coins) {
            if(i - coin > 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    // dp[i] 表示总数为 i 的最少硬币数
    return dp[amount] === Infinity ? -1 : dp[amount];
}