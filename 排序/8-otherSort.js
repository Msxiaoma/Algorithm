
// 算法原理比较

// 1. 冒泡：相邻的两个元素两两比较，每次都把最大的冒泡到最后，排序时应该去除最后的元素
// 2. 选择排序：拿到元素挨个比较，进行排序
// 3. 插入排序：拿到元素在已经排好序的序列中，插入元素（类似打牌）
// 4. 希尔排序：递减增量排序算法，插入排序的高效算法
// 5. 归并排序：分治法，完整序列分成小序列，小序列排好之后合并成完整的有序序列
// 6. 快速排序：分治法，取基数分成两个大于基数的序列和小于基数的序列，然后在找技术分序列递归排序
// 冒泡排序：相邻两个元素两两比较，每次可以把最大的都冒泡到最末尾

function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

// 选择排序：(保存位置) 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕
function selectSort(arr) {
    let minIndex = 0
    for(let i = 0; i < arr.length - 1; i++) {
        minIndex = i
        for(let j = i + 1; j < arr.length; j ++) {
            if( arr[j] < arr[minIndex]) {
               minIndex = j
            }
        }
        [arr[i], arr[minIndex]] =  [arr[minIndex], arr[i]]
    }
    return arr
}

function insertSort(arr) {
    for(let i = 1; i < arr.length ; i++) { // 一个元素时，无需比较 ， i 表示正在排序的数组的指针
        let j = i - 1 // j 代表已经排好序的数组
        let temp = arr[i];
        while(j >= 0 &&  arr[j] > temp) {
            arr[j + 1] = arr[j]
            j --
        }
        arr[j + 1] =  arr[i]
    }
    return arr;
}

// 希尔排序
懒得写




