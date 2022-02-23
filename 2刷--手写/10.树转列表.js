let tree = [{"id":1,"parentId":0,"children":[{"id":3,"parentId":1,"children":[{"id":7,"parentId":3}]},{"id":5,"parentId":1,"children":[{"id":6,"parentId":5}]}]},{"id":2,"parentId":0,"children":[{"id":4,"parentId":2}]}];
// 转成
// [
//   { id: 3, parentId: 1},
//   { id: 4, parentId: 2},
//   { id: 5, parentId: 1},
//   { id: 6, parentId: 5},
//   { id: 7, parentId: 3},
//   { id: 1, parentId: 0},
//   { id: 2, parentId: 0},
// ]

function treeToList(tree)  {
    const res = [];
    let dfs = function(tree) {
        tree.forEach(item => {
            if(item.children) {
                dfs(item.children);
                delete item.children;
            }
            res.push(item);
        })
    }
    dfs(tree);
    return res;
}

console.log(treeToList(tree));