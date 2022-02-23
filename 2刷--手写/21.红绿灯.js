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

function light(fn, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            fn();
            resolve()
        }, time * 1000);
    })
}

function run() {
    Promise.resolve().then(()=> {
        return light(red, 3);
    }).then(()=> {
       return light(yellow, 2);
    }).then(() => {
        return light(green, 1);
    }).then(() => {
        return run();
    })
}

run()