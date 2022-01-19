/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 5,6,7,4,3,2,1
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};


function reverse(nums, left, right) {
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left ++;
        right --;
    }
}