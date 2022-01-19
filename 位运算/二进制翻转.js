var reverseBits = function(n) {
    let  res = 0；
    for(let i = 0; i < 32; i++){
        res = (res << 1) + (n & 1); //(n & 1) 取 n 的最后一位， res 向左移1位
        n = n >> 1; // n 向右移动一位
    }
    return res>>>0 // 必须要无符号右移 
};


console.log(reverseBits(1011))