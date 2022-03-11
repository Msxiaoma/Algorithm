// promisefy 是  node util 中的一个函数，它的作用是将函数最后一个参数是回调函数的转为 promise函数

// 使用前
fs.readFile('./index.js', (err, data) => {
   if(!err) {
       console.log(data.toString())
   }
   console.log(err)
})

// 使用promisify后
const readFile = promisify(fs.readFile)

readFile('./index.js').then(data => {
    console.log(data.toString());
}).catch(err => {
    console.log('error:', err)
})


function promisify(fn) {
  return function(...params) {
      return new Promise((reslove, reject) => {
          fn(...params, (err, data) => {
              if(err) {
                  reject(err);
              } 
              reslove(data);
          })
      })
  }
}