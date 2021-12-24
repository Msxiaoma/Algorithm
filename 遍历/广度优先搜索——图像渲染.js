
// 队列
var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];
    if(oldColor == newColor) {
        return image;
    }
    const queue = [[sr, sc]];
    while(queue.length) {
        const [r, c] = queue.shift();
        image[r, c] = newColor;
        if(r -1 > -1 && image[r-1][c] == oldColor) {
            queue.push([r -1, c]);
        }
        if(r + 1 < image.length && image[r+1][c] == oldColor) {
            queue.push([r+1, c]);
        }
        if(c -1 > -1 && image[r][c-1] == oldColor) {
            queue.push([r, c-1]);
        }
        if(c + 1 < image[0].length && image[r][c+1] == oldColor) {
            queue.push([r, c+1]);
        }
    }
    return image;
};


console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))