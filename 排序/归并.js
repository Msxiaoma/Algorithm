// 归并排序——思路：分治法，分组比较，最后合并分组，组成一个有序数列

function merge(left, right) {
    let res = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            res.push(left.shift())
        } else (
            res.push(right.shift())
        )
    }
    return res.concat(left, right)
}

function mergeSort(arr) {
    if(arr.length < 2) return arr
    let middle = Math.floor(arr.length / 2); // Math.floor 向下取整，Math.ceil 向上取整
    let left = arr.slice(0, middle); // arr.slice 根据索引返回一个新数组，不包含 end 元素，不会修改元素组
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

// [32,12,56,78,76,45,36]
