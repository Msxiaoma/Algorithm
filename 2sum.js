var arr = [-1,0,1,2,-1,-4]
//var arr = [0, 0, 0, 0]
//var arr = [-1,0,1,0]
//var arr = [-2, 0, 1, 1, 2]
console.log(sum(arr))
//sum(arr)
//2sum
// function sum(arr, n) {
//   var newarr = []
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if ((arr[i] + arr[j]) === n) {
//         newarr.push(arr[i])
//         newarr.push(arr[j])
//         break;
//       }
//     }
//   }
//   return newarr
// }
function sum(nums) {
  var result = []
  nums.sort(sortNumber)
  for (var i = 0; i < nums.length; i++) {
    var m = i + 1
    var j = nums.length - 1
    while (m < j) {
      var sum = nums[i] + nums[m] + nums[j]
      if (sum > 0) {
        j--
      }
      if (sum === 0) {
        var temp = [nums[i], nums[m], nums[j]]
        result.push(JSON.stringify(temp))
        j--
      }
      if (sum < 0) {
        j = nums.length - 1
        m++
      }
    }
  }
  var tempArr = []
  var oSet = new Set(result)
  for(var x of oSet){
    tempArr.push(JSON.parse(x))
  }
   return tempArr;
}

function sortNumber(a, b) {
  return a - b
}


