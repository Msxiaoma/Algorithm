// 直观想法
// 直接按问题描述进行。对于数组中的每个元素，我们找出下雨后水能达到的最高位置，等于两边最大高度的较小值减去当前高度的值。
var trap = function(height) {
    let count = 0;
    for(let i = 0; i < height.length; i++) {
        let left = 0, right = 0;
        for(let j = i; j > -1; j--){
            left = Math.max(height[j], left);
        }
        for(let k = i; k < height.length; k++){
            right = Math.max(height[k], right);
        }
        count += Math.min(left, right) - height[i]
    }
    return count;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))