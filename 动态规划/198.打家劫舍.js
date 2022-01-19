// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

var rob = function(nums) {
    if(nums.length == 1) {
        return nums[0]
    }
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    // dp[i] 放的是偷到的最大值
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max((nums[i] + dp[i-2]), dp[i-1]);   // 偷 nums[i]，只能偷  nums[i] + nums[i+2]；不偷 nums[i]，只能偷 nums[i-1]
    }
    return  dp[nums.length -1];
};

console.log(rob([1, 2]))