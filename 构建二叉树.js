let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function Node() { //创建结点(使用构造函数模式创建对象,优点：指定对象的类型)
  this.val = ''
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
root.val = arr[0]

function reCreateBinaryTree(node, i) {
  let leftIndex = 2 * i + 1 ;//左孩子结点索引
  let rightIndex = 2 * i + 2 //右孩子结点索引
  if (leftIndex < arr.length) {
    let childNode = new Node();
    childNode.val = arr[leftIndex]; //给当前孩子结点赋值
    node.left = childNode;
    reCreateBinaryTree(childNode, leftIndex);
  }
  if (rightIndex < arr.length) {
    let childNode = new Node();
    childNode.val = arr[rightIndex]; //给当前孩子结点赋值
    node.right = childNode;
    reCreateBinaryTree(childNode, rightIndex);
  }
}



/*
* 非递归创建二叉树
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

/*递归遍历二叉树*/

/*先序遍历二叉树（根左右）*/
function preOrderTree(t) {
  if (t == null) {
    return;
  } else {
    console.log(t.data);
    preOrderTree(t.left);
    preOrderTree(t.right)

  }
}
/*中序遍历二叉树（左根右）*/
function inOrderTree(t) {
  if (t == null) {
    return;
  } else {
    inOrderTree(t.left);
    console.log(t.data);
    inOrderTree(t.right)

  }
}
/*后序遍历二叉树（左右根）*/
function postOrderTree(t) {
  if (t == null) {
    return;
  } else {
    postOrderTree(t.left);
    postOrderTree(t.right)
    console.log(t.data);
  }
}

reCreateBinaryTree(root, 0) //构建二叉树
// preOrderTree(root)
// inOrderTree(root)
// postOrderTree(root)

/*非递归遍历二叉树
* 1. 用数组实现一个栈push()和 pop()
* 2. 如果该结点的右结点不为空，则将其右结点放入栈中，左结点不为空，则继续向左结点遍历
* 3. 回退时从栈中取出右结点数据
*/
/*先序遍历二叉树（根左右）*/
function nonRpreOrderTree(t) {
  let stack = new Array()
  while (t) {
    console.log(t.data)      //根节点
    if (t.right) {
      stack.push(t.right)
    } else if (t.right) {
      t = t.left  //如果该结点的左结点不为空继续向左子树遍历
    } else {
      stack.pop()
    }
  }
}
// nonRpreOrderTree(root)


//先序和中序重构二叉树
function treeNode(data) {
  this.data = data
  this.left = null
  this.right = null
}

function reConstructBinaryTree(pre, vin) {
  if (pre.length == 0 || vin.length == 0){
    return null
  }
  let preLeft = [],preRight = [], vinLeft = [],vinRight = []
  let binaryNode = new treeNode(pre[0])    //根据先序构建根节点
  let index = vin.indexOf(pre[0])         //返回根结点在中序序列中所在的位置
  preLeft = pre.slice(1,index + 1)       //根据根结点在中序序列中的位置划分先序序列
  preRight = pre.slice(index+1)
  vinLeft =  vin.slice(0,index)
  vinRight = vin.slice(index+1)
  binaryNode.left = reConstructBinaryTree(preLeft,vinLeft)
  binaryNode.right = reConstructBinaryTree(preRight,vinRight)
  return binaryNode
}

let pre = [1, 2, 4, 7, 3, 5, 6, 8]
let vin = [4, 7, 2, 1, 5, 3, 8, 6]
reConstructBinaryTree(pre, vin)
