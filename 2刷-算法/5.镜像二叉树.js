// 判断对称二叉树
var isSymmetric = function(root) {
    if(root == null) {
        return false
    }
    return check(root, root);
}

function check(root1, root2) {
    if(root1 === null && root2 === null) {
        return true;
    }
    if(root1 === null || root2 === null) {
        return false;
    }
    return root1.val == root2.val && check(root1.left, root2.right) &&  check(root1.right, root2.left)
}