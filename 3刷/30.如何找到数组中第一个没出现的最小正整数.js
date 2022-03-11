// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

// 示例 1：

// 输入：nums = [1,2,0]
// 输出：3

// 示例 2：

// 输入：nums = [3,4,-1,1]
// 输出：2

// 示例 3：

// 输入：nums = [7,8,9,11,12]
// 输出：1


// 从 1 在数组里面找，找不到，就是1；找到，2在数组里面找，时间复杂度O(n 平方)
const firstMissingPositive0 = (nums) => {
  let i = 0;
  let res = 1;
  while (i < nums.length) {
    if (nums[i] == res) {
      res++;
      i = 0;
    } else {
      i++;
    }
  }
  return res;
};

// O(n) 时间复杂度
const firstMissingPositive1 = (nums) => {
    const set = new Set();
    nums.forEach(item => {
        set.add(item);
    })
    for(let i = 1; i < nums.length + 1; i++ ) {
        if(!set.has(i)) {
            return i;
        }
    }
};


const firstMissingPositive = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        // 对 1到 nums.length 范围的内的元素进行安排
        while(nums[i] >= 1 && nums[i] <= nums.length &&  nums[nums[i] - 1] != nums[i]) {
            const temp = nums[nums[i] - 1]; // 交换
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    console.log('nums', nums)
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1; //  发现元素 1~nums.length 占满了数组，一个没缺
}

console.log(firstMissingPositive([3,4,-1,1]))
