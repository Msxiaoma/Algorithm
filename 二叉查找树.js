//二叉查找树（二叉顺序树、二叉搜素树）

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
