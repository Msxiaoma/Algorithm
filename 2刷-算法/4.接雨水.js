// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

var trap = function(height) {
    let ares = 0;
    let left = new Array(height.length).fill(0);
    let right = new Array(height.length).fill(0);
    left[0] = height[0];
    for(let i = 0; i < height.length; i++) {
        left[i] = Math.max(height[i], left[i - 1]);
    }
    right[height.length - 1] = height[height.length - 1];
    for(let i = height.length - 2; i > -1; i++) {
        right[i] = Math.max(height[i], right[i + 1]);
    }
    for(let i = 0; i < height.length; i++) {
       ares += Math.min(left[i], right[i]) - height[i];
    }
    return ares;
};