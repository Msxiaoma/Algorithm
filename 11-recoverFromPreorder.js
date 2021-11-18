// 先序遍历还原二叉树


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}


// "1-2--3--4-5--6--7"
 // 先序遍历，根左右
  // 原理：栈，利用dep 和栈的长度比较，相同为左节点，不同为右节点
function recoverFromPreorder(traversal) {
    const stack = []
    for(let i = 0; i < traversal.length;) {
       let dep = 0
       while(i < traversal.length && traversal[i] == '-') {  // 计算每个节点的深度
           dep ++
           i++
       }
       let start = i
       while(i < traversal.length && traversal[i] != '-') {  // 获取每个节点
           i++
       }
       let val = traversal.slice(start, i)
       let currentNode = new TreeNode(val)
       if(stack.length == 0) {
            stack.push(currentNode)
            continue;
       }
       while(stack.length > dep) {
           stack.pop()
       }

       if(stack[stack.length-1].left) {
           stack[stack.length-1].right = currentNode
       } else {
            stack[stack.length-1].left = currentNode
       }
       stack.push(currentNode)
    }
    return stack[0]
};



