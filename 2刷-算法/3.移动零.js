// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

function moveZero(arr) {
    let left = 0, right = 0;
    while(right < arr.length) {
        if(arr[right]) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
        right ++;
    }
    return arr;
}
console.log(moveZero([0,1,0,3,12]))