
const a = [2,3,4,5,6,7,8]

// 第一种， Math.random()  sort + Math.random 生成的随机数是 0，1之间，不包含 1
// 不随机的原因，两个元素之间没有 50% 的概率进行交换
function random(arr) {
    arr.sort(() => {
        return Math.random() - 0.5;
    })
    return arr;
}

// console.log(random(a));

// 第二种，洗牌算法, 随机生成最后一位之前的索引，开始替换
// Math.random
function random2(arr) {
    let sum = arr.length - 1;
    while(sum) {
        let index = Math.floor(Math.random() * sum);
        [arr[sum], arr[index]] = [arr[index], arr[sum]];
        sum --;
    }
    return arr;
}
console.log(random2(a));

