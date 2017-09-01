let arr = [2, 1, 5, 3, 7, 0, 9, 8]
quickSort(arr, 0, arr.length)
console.log(arr)
function quickSort(arr, low, height) {
  if (low < height) {
    let pivotpos = partition(low, height)
    quickSort(arr, low, pivotpos - 1)  //快排左序列
    quickSort(arr, pivotpos + 1,arr.length)
  }
}

function partition(left, right) {
  var pivot = arr[left]   //第一个元素为基准元素
  var pivotpos = left     //基准元素的位置为第一个元素索引
  for (var i = left + 1; i <= right; i++) {
    if (arr[i] < pivot) {
      pivotpos++
      if (i != pivotpos) {
        var temp
        temp = arr[i]
        arr[i] = arr[pivotpos]
        arr[pivotpos] = temp
      }
    }
  }
  arr[left] = arr[pivotpos]
  arr[pivotpos] = pivot
  return pivotpos
}
