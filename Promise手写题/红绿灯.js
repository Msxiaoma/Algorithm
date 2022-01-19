// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

function light(timer, fn) {
    return new Promise((resolve) => {
       setTimeout(() => {
            fn()
            resolve()
       }, timer)
    })
}

function run() {
    Promise.resolve().then(() => {
        return light(1000, red)
    }).then(()=>{
        return light(2000, green)
    }).then(() => {
        return light(3000, yellow)
    }).then(() => {
        return run()
    })
}


run()