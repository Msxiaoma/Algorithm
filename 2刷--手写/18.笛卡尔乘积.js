// 实现：fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

function fn(arr) {
   return arr.reduce((pre, cur) => {
       const res = [];
       pre.forEach(a => {
            cur.forEach(b => {
                res.push(`${a}${b}`)
            })
       })
       return res;
   })
}

console.log(fn([['a', 'b'], ['n', 'm'], ['0', '1']]))