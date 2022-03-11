let tree = {"id":1,"parentId":0,"children":[{"id":2,"parentId":1,"children":[{"id":4,"parentId":2,"children":[{"id":5,"parentId":4,"children":[{"id":6,"parentId":5}]}]}]},{"id":3,"parentId":1,"children":[{"id":7,"parentId":3}]}]}

function treeToList(tree) {
    const res = [];
    let dfs = function(tree) {
        if(tree.children) {
            tree.children.forEach(item => {
                dfs(item);
                delete item.children;
            })
            delete tree.children;  // 第一层
        }
        res.push(tree);
    }
    dfs(tree);
    return res;
}

console.log(treeToList(tree));