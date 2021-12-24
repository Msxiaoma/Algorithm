//  [[1,1,1],[1,1,0],[1,0,1]]

 // 深度优先遍历——回溯
var floodFill = function(image, sr, sc, newColor) {
    dps(image, sr, sc, image[sr][sc], newColor);
    return image
};

function dps(image, sr, sc, oldColor, newColor) {
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != oldColor || oldColor == newColor) {
        return
    }
    image[sr][sc] = newColor;
    dps(image, sr, sc + 1, oldColor, newColor);
    dps(image, sr, sc - 1, oldColor, newColor);
    dps(image, sr + 1, sc, oldColor, newColor);
    dps(image, sr - 1, sc, oldColor, newColor);
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))