function BubbleSort(arr) {
    if(arr == null || arr.length <= 0){
        return []; 
    }
    var len = arr.length;
    for(var end = len - 1; end > 0; end--){
        for(var i = 0; i < end; i++) {
            if(arr[i] > arr[i + 1]){
                swap(arr, i, i + 1);
            } 
        }
    }
    return arr; 
}
function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
}

console.log(BubbleSort([2,3,1,6,0,5]))