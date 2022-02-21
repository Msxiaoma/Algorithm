/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

function levelOrder(root) {
    if(!root) {
        return [];
    }
    const res = [];
    const queue = [root];
    while(queue.length) {
        let size = queue.length;
        let curLevel = [];
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            if(node.left) {
               queue.push(node.left)
            }
            if(node.right) {
               queue.push(node.right)
            }
        }
        res.push(curLevel);
    }
    return res;
}