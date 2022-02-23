

// 有多个任务，每个任务耗时天数不同，有些任务依赖有前置任务（即必须等前置任务完成才能进行当前任务），
// 写个方法计算最多耗时多少钱能完成全部任务
var findOrder = function(task, prerequisites) {
  let numTask = task.length;
  let inDegree = new Array(numTask).fill(0); // 初始化入度数组

  let map = {};
  prerequisites.map(item => {
      inDegree[item[0]]++;
      map[item[1]] = (map[item[1]] || []).concat(item[0]);
  })

  let quene = [], order = [];

  inDegree.map((item, index) => {
      item == 0 && quene.push(index);
  })

  while(quene.length) {
      let selected = quene.shift();
      order.push(selected);
      let toQuene = map[selected];
      if (toQuene && toQuene.length) {
          toQuene.map(to => {
              inDegree[to]--;
              if(inDegree[to] == 0) {
                  quene.push(to)
              }
          })
      }
  }
  if (order.length != numTask) return false;
  return  task.reduce((val,item) => {
    return val + item;
  },0)
};

let res = findOrder([1,2], [1,0]);
console.log(res);
