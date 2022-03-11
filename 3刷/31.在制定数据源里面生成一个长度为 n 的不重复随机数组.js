
// 标记法：时间复杂度 O(n)
function getTenNum(arr, n) {
    const map = {};
    const res = [];
    while(n) {
        let index = Math.floor(Math.random() * arr.length);
        if(!map[index]) {
            map[index] = true;
            res.push(arr[index]);
            n--
        }
    }
    return res;
}


const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10);
console.log('resArr', resArr)