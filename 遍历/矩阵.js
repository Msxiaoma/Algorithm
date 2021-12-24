
// 最短距离——广度优先——队列
//输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
//输出：[[0,0,0],[0,1,0],[1,2,1]]
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const queue = [];
    let deps = 0;
    for(let r = 0; r < mat.length; r++) {
        for(let c = 0; c < mat[0].length; c ++){
            if(mat[r][c] == 0) {
                queue.push([r, c])
            } else {
                mat[r][c] = -1
            }
        }
    }
    while(queue.length) {
        const size = queue.length;
        deps ++
        for(let i = 0; i < size; i++) {
            const [r, c] = queue.shift();
            if(r + 1 < mat.length && mat[r+1][c] == -1) {
                mat[r+1][c] = deps
                queue.push([r+1, c])
            }
            if(r - 1 > -1 && mat[r-1][c] == -1) {
                mat[r-1][c] = deps
                queue.push([r-1, c])
            }
            if(c + 1 < mat[0].length && mat[r][c+1] == -1) {
                mat[r][c+1] = deps
                queue.push([r, c+1])
            }
            if(c - 1 > -1 && mat[r][c-1] == -1) {
                mat[r][c-1] = deps
                queue.push([r, c-1])
            }
        }
    }
    return mat
};

console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]))

