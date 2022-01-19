/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const used = new Array(nums.length).fill(false);
    
    let helper = function (path) {
        if(path.length == nums.length) {
            res.push(path.slice())
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i] == true) {
                continue;
            }
            used[i] = true;
            path.push(nums[i]);
            helper(path);
            used[i] = false;
            path.pop();
        }
    }

    helper([])
    return res;
};

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
