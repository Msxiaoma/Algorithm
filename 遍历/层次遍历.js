// Definition for a Node.
function Node(val, left, right, next) {
   this.val = val === undefined ? null : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
   this.next = next === undefined ? null : next;
};


// 层次遍历，取出一层中所有的元素进行拓展
// 广度遍历，取出一个元素进行拓展
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    const queue = [root];
    while(queue.length > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if(i < size - 1) {  // 重点
                node.next = queue[0];
            }
            if(node.left != null) {
                queue.push(node.left)
            }
            if(node.right != null) {
                queue.push(node.right)
            }
        }
    }
    return root;
};

connect([1,2,3,4,5,6,7])

// [1,#,2,3,#,4,5,6,7,#]