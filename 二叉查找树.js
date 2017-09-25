//二叉查找树（二叉顺序树、二叉搜素树）
/**
(1) 查找给定值；
(2) 查找最小值；
(3) 查找最大值。
**/
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

// 向树中加入新节点
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}
//查找最小值
function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}
//查找最大值
function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}
//查找给定值
function find(data) {
  var current = this.root;
  while (current != null) {
    if (current.data == data) {
     return current;
    }else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
   }
  }
  return null;
}
