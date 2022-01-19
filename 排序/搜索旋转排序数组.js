// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// [5,1,3] 5
// 0
var search = function(nums, target) {
    if(nums.length == 0) {
        return -1;
    }
    if(nums.length == 1) {
        return nums[0] == target ? 0 : -1
    }
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        let middle = start + ((end - start) >> 1);
        if(nums[middle] == target) {
            return middle;
        }
        if( nums[middle] >= nums[start]) {
           if(nums[start] <= target && nums[middle] > target) {
               end = middle - 1;
           } else {
               start = middle + 1;
           }
        } else {  // nums[0] > nums[middle]
           if(nums[end] >= target && nums[middle] < target) {
               start = middle + 1;
           } else {
               end = middle - 1;
           }
        }
    } 
    return -1;
};

console.log(search([5,1,3], 5))