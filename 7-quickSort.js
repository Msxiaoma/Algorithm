// 快速排序 —— 思路：取一个基准元素（数组的第一个元素或者是最后一个元素），将大于基准元素的元素排到右边，小于基准元素的排到左边

function quickSort(arr, start, end) {
    if(start >= end)   return 
    let baseIndex = partition(arr, start, end);
    quickSort(arr, start, baseIndex - 1);
    quickSort(arr, baseIndex + 1, end);
}

function partition(arr, start, end) { // 核心，i 和 baseIndex首次时指向同一个元素的，i 是一直移动，baseIndex 只有 a[i] < baseValue 时才移动
    let baseValue = arr[end];
    let baseIndex = start;
    for(let i = start; i < end; i++) {
        if(arr[i] < baseValue) {
            if( i != baseIndex) {
                [arr[i], arr[baseIndex]] = [arr[baseIndex], arr[i]]
            }
            baseIndex ++
        }
    }
    // 摆放基准值的位置
    [arr[baseIndex], arr[end]] =  [arr[end], arr[baseIndex]]
    return baseIndex
}



// [32,12,56,78,76,45,36]
