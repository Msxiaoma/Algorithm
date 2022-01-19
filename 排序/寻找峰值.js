// 输入：nums = [1,2,3,1]
// 输出：2

var findPeakElement = function(nums) {
    if(nums.length == 1) {
        return 0;
    }
    let start = 0, end = nums.length - 1;
    while (start < end) {
        let mid = start + Math.floor((end - start)/ 2);
        if(nums[mid] < nums[mid + 1]) {
            start = mid + 1
        } else {
            end = mid 
        }
    }
    return start;
};

console.log(findPeakElement([1,2]))