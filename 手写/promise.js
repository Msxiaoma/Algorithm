// promise
// Promise.resolve().then(() => {
//     Promise.resolve().then(() => {
//         console.log(3);
//     })
//     console.log(1)
// }).then(()=> {
//     console.log(10)
// })

// console.log(0);

// Promise.resolve().then(() => {
//     console.log(11)
// }).then(()=> {
//     console.log(12)
// })


// 第一题

// let a = [1,2,3]
// let d = {}
// function b(c, d) {
//     c = []
//     d.b = 2;
//     d = {}
// }

// b(a, d);
// console.log(a)
// console.log(d)

// 第二题
// var a = function(){};
// var b = [a];
// var c = {a}

// console.log(JSON.stringify(a));
// console.log(JSON.stringify(b));
// console.log(JSON.stringify(c));

// 第三题
// Promise.reject(7).then(()=> {
//     console.log(1),
//     undefined
// }).then(() => {
//     console.log(2)
// }, err => {
//     console.log(3)
// })

// 算法
//0，1，2，3，4，5 是一个圈，每次删掉第3个，最后输出3
