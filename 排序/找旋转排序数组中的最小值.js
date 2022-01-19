
// 输入：nums = [3,4,5,1,2]
// 输出：1
// 解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

var findMin = function(nums) {
   let left = 0, right = nums.length - 1;
   while (left < right) {
       let mid = left + Math.floor((right - left) / 2);
       if(nums[mid] < nums[right]) {
           right = mid;
       } else {
           left = mid + 1;
       }
   }
   return nums[left];
};

console.log(findMin([2, 1]))
