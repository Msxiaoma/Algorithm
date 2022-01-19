// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// 输出：true

// 从左下角开始比较，看作是一颗排序二叉树，左上的值都小，右上的值都大
var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1, col = 0;
    while(row > -1 && col < matrix[0].length) {
        if(matrix[row][col] > target) {
            row--
        }else if(matrix[row][col] < target) {
            col++
        }else if(matrix[row][col] == target) {
            return true
        }
    }
    return false;
};

// let matrix = [[-5]];

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], -5));