// 快速排序 —— 思路：取一个基准元素（数组的第一个元素或者是最后一个元素），将大于基准元素的元素排到右边，小于基准元素的排到左边

function quickSort(arr, start, end) {
    if(start >= end)   return 
    let baseIndex = partition(arr, start, end);
    quickSort(arr, start, baseIndex - 1);
    quickSort(arr, baseIndex + 1, end);
    return arr
}


function partition(arr, start, end) { // 核心，i 和 baseIndex首次时指向同一个元素的，i 是一直移动，baseIndex 只有 a[i] < baseValue 时才移动
    let baseValue = arr[end];
    let baseIndex = start;
    for(let i = start; i < end; i++) {
        if(arr[i] < baseValue) {
            [arr[i], arr[baseIndex]] = [arr[baseIndex], arr[i]]
            baseIndex ++
        }
    }
    // 摆放基准值的位置
    [arr[baseIndex], arr[end]] =  [arr[end], arr[baseIndex]]
    return baseIndex
}

console.log(quickSort([32,12,56,78,76,45,36], 0, 6))


// [32,12,56,78,76,45,36]

// 找一个基准元素

function quickSort(arr, start, end) {
    if(start > end) {
        return 
    }
    let baseIndex = getStandardIndex(arr, start, end);
    quickSort(arr, start, baseIndex - 1);
    quickSort(arr, baseIndex + 1, end);
}

function getStandardIndex(arr, start, end){
    let baseIndex = start;
    let baseValue = arr[end];
    for(let i = 0; i < end; i++ ){
        if(a[i] < baseValue) {
            [arr[i], arr[baseIndex]] = [arr[baseIndex], arr[i]];
            baseIndex++;
        }
    }
    [arr[baseIndex], arr[end]] =  [arr[end], arr[baseIndex]]
    return baseIndex;
}