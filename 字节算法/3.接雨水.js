 // 对于数组中的每个元素，我们找出下雨后水能达到的最高位置，等于两边最大高度的较小值减去当前高度的值
// 雨水的数量取决于左右两边最小的柱子 - 当前高度

// 找出当前高度，左边和右边的较小的最大值
var trap = function(height) {
    let sum = 0;
    let n = height.length;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    left[0] = height[0];
    right[n - 1] = height[n - 1];
    for(let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    for(let i = n - 2; i > -1; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }
    for(let i = 0; i < height.length; i++) {
        sum += Math.min(left[i], right[i]) - height[i];
    }
    return sum;
};