
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

var merge = function(nums1, m, nums2, n) {
    let p = m - 1;
    let q = n - 1;
    let tail = m + n - 1;
    let cur = 0;
    while(p > -1 || q > -1) {
        if(p == -1) {
            cur = nums2[q--];
        }else if(q == -1) {
            cur = nums1[p--];
        }else if(nums1[p] > nums2[q]) {
            cur = nums1[p--];
        } else {
            cur = nums2[q--];
        }
        nums1[tail--] = cur;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))