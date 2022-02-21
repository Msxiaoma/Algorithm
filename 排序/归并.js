// 归并排序——思路：分治法，分组比较，最后合并分组，组成一个有序数列

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle); // arr.slice 根据索引返回一个新数组，不包含 end 元素，不会修改元素组
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const res = [];
    while(left.length > 0 && right.length) {
        if(left[0] < right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    return res.concat(left, right);
}

console.log(mergeSort([32,12,56,78,76,45,36]));