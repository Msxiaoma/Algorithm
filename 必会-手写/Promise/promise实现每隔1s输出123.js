// let i = 1;
// while(i < 4) {
//     (function(i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 1000 * i);
//     })(i++)
// }

let arr = [1, 2, 3]

arr.reduce((pre, cur) => {
    return pre.then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(console.log(cur))
            }, 1000);
        })
    })
}, Promise.resolve()); //默认第一个参数
