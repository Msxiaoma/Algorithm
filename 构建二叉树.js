let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i']

function Node() { //创建结点(使用构造函数模式创建对象,优点：指定对象的类型)
  this.data = ''
  this.left = null
  this.right = null
}
/*
* 递归创建二叉树
* 1.创建结点对象
* 2.创建根节点
* 3.递归创建左结点
* 4.递归创建右结点
*/
let root = new Node() //创建根结点
root.data = arr[0]

function reCreateBinaryTree(node, i) {
  let leftIndex = 2 * i + 1 //左孩子结点索引
  let rightIndex = 2 * i + 2 //右孩子结点索引
  if (leftIndex < arr.length) {
    let childNode = new Node()
    childNode.data = arr[leftIndex] //给当前孩子结点赋值
    node.left = childNode
    createBinaryTree(childNode, leftIndex)
  }
  if (rightIndex < arr.length) {
    let childNode = new Node()
    childNode.data = arr[rightIndex] //给当前孩子结点赋值
    node.right = childNode
    createBinaryTree(childNode, rightIndex)
  }
}



/*
* 递归创建二叉树
* 1.创建结点对象
* 2.创建放结点的数组
* 3.循环将结点放入结点数组
* 4.循环建立每个结点的引用
*/

function nonReCreateBinaryTree() {
  let nodeArr = new Array()
  let index = 0
  for (let i = 0; i < arr.length; i++) {     //将结点放到结点数组中
    let node = new Node()
    node.data = arr[i]
    nodeArr.push(node)
  }
  while (index < arr.length) {
    nodeArr[index].left = nodeArr[2 * index + 1]
    nodeArr[index].right = nodeArr[2 * index + 2]
    index++
  }
}
/*打印二叉树*/
function printTree(t) {
  if (t == null) {
    return;
  } else {
    printTree(t.left);
    console.log(t.data);
    printTree(t.right)
  }
}

