//  <div id="root">
//     <p>p1</p>
//     <span>
//         <span>span2 </span>
//     </span>
//     <p>p2 </p>
// </div>
traverse(document.getElementById('root'));

// =>
// ["DIV"]
// ["DIV", "P"]
// ["DIV", "SPAN"]
// ["DIV", "SPAN", "SPAN"]
// ["DIV", "P"]


function traverse(root) {
    const res = [];
    function dfs(root, queue) {
        if(!root.chidNode) {
            queue.push(root)
            res.push(queue)
            return 
        } 
        const children = root.chidNode;
        for(let child in children) {
            dfs(child, queue);
        }
    }
    dfs(root, queue)
    return res;
}