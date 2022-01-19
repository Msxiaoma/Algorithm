// 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 输出：11
// 解释：如下面简图所示：
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

// 给定一个三角形 triangle ，找出自顶向下的最小路径和。

// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

// 动态规划，根据所给的条件，从底层像上进行比较，dp[0][0] 为最小值
var minimumTotal = function(triangle) {
    let dep = new Array(triangle.length)
    for(let i = 0; i < triangle.length; i++){
        dep[i] = new Array(triangle[i].length);  // 生成一个和 triangle 一样的树形结构
    }
    // 从triangle的底层进行比较计算最小路径
    for(let i = triangle.length - 1; i > -1; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            if(i == triangle.length - 1) { // 先生成最底下的一行叶子
                dep[i][j] = triangle[i][j]
            } else {   //   开始比较大小生成节点
                dep[i][j] = Math.min(dep[i+1][j], dep[i+1][j+1]) + triangle[i][j];
            }
        }
    }
    return dep[0][0];
};


