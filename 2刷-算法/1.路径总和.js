// https://leetcode-cn.com/problems/path-sum/

var hasPathSum = function(root, targetSum) {
    if(root == null) {
        return false;
    }
    if(root.left == null && root.right == null) {
        return targetSum === root.val;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};