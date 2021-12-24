//  只有土地才会进行深度优先搜索，走过的岛屿需要进行标记
var maxAreaOfIsland = function(grid) {
    let area = 0;
    for(let r = 0; r < grid.length; r++) {
      for(let c = 0; c < grid[0].length; c++) {
        area = Math.max(area, dps(grid, r, c, area))
      }  
    }
    return area;
};
function dps(grid, r, c) {
    if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] == 0) {
        return 0
    }
    grid[r][c] = 0;
    let area = 1;
    area += dps(grid, r+1, c);
    area += dps(grid, r-1, c);
    area += dps(grid, r, c+1);
    area += dps(grid, r, c-1);
    return area;
}
let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
console.log(maxAreaOfIsland(grid))