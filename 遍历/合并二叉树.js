let arr1 = [1,3,2,5]
let arr2 = [2,1,3,null,4,null,7]

function TreeNode(val, left, right) { //创建结点(使用构造函数模式创建对象,优点：指定对象的类型)
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function createBinaryTree(arr) {
  let nodeArr = [];
  for(let j = 0; j < arr.length; j++) {
    nodeArr.push(new TreeNode(arr[j]))
  }
  let i = 0
  while (i < nodeArr.length) {
      nodeArr[i].left = nodeArr[2 * i + 1]; //左孩子
      nodeArr[i].right = nodeArr[2 * i + 2]; // 右孩子
      i++
  }
  return nodeArr[0]
}
let root1 = createBinaryTree(arr1)
let root2 = createBinaryTree(arr2)

var mergeTrees = function(root1, root2) {
    if(root1 == null) {
        return root2
    }
    if(root2 == null) {
        return root1
    }
    let newNode = new TreeNode(root1.val + root2.val);
    newNode.left = mergeTrees(root1.left, root2.left);
    newNode.right = mergeTrees(root1.right, root2.right);
    return newNode;
};

console.log('root1', root1)
console.log('root2', root2)

// console.log(mergeTrees(root1, root2))
