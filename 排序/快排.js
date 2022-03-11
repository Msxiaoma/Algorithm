// 快排，找一个基准元素，比基准元素大的在基准元素的右边，小的放到基准元素的左边，然后对已经有顺序的两个分区进行排序

function quickSort(arr, start, end) {
    if(start > end) {
        return 
    }
    let baseIndex = getBaseIndex(arr, start, end);
    quickSort(arr, start, baseIndex - 1);
    quickSort(arr, baseIndex + 1, end);
    return arr;
}

function getBaseIndex(arr, start, end) {
    let baseValue = arr[end];
    let baseIndex = start;
   for(let i = start; i < end; i++) {
       if(arr[i] < baseValue) {
           [arr[i], arr[baseIndex]] = [arr[baseIndex],arr[i]]
           baseIndex ++;
       }
   }
   // 摆放基准值的位置s
   [arr[baseIndex], arr[end]] = [arr[end], arr[baseIndex]];
   return baseIndex;
}

console.log(quickSort([5, 0, 1, 9, 5, 3, 7, 6, 1], 0, 8))


// 0, 5 => i = 2, baseIndex = 1;


