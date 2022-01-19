
// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true

var searchMatrix = function(matrix, target) {
    let index = 0;
    for(let i = 0; i < matrix.length; i++) {
        if(target > matrix[i][0]) {
           index = i 
        }
        if(target == matrix[i][0]) {
           return true 
        }
    }
    console.log('index', index)
    let left = 0, right = matrix[index].length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);   // 右移一位相当于除以2
        console.log('minf', mid)
        if(matrix[index][mid] == target) {
            return true;
        }
        if(matrix[index][mid] < target) {
            left = mid + 1;
        }
        if(matrix[index][mid] > target) {
            right = mid;
        }
    }
    return false;
};

console.log(searchMatrix([[1,3, 5]], 4))