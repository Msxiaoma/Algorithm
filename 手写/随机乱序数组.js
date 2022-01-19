// 随机乱序数组

const a = [2,3,4,5,6,7,8]

// 1. 随机排序， sort + Math.random 生成的随机数是 0，1之间，不包含 1
function random(a) {
    return a.sort(() => {
        Math.random() - 0.5
    })
}

// 2. 洗牌算法， 从最后一位开始，随机生成一个位置，进行替换
function random(a) {
   let sum = a.length - 1
   while (sum) {
       let index = Math.floor(Math.random() * sum);   // 一定要写分号！！！！
       [a[sum], a[index]] = [a[index], a[sum]]
       sum --
   }
   return a
}

