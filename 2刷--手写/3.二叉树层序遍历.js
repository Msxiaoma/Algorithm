// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

function LevelOrder(root) {
    const res = [];
    if(root === null) {
        return res;
    }
    const queue = [root];
    while(queue.length) {
        let size = queue.length;
        let temp = [];
        for(let i = 0; i < size; i++) {
           let node = queue.shift();
           temp.push(node);
           if(node.left) {
              queue.push(node.left);
           }
           if(node.right) {
              queue.push(node.right);
           }
        }
        res.push(temp);
    }
    return res;
}