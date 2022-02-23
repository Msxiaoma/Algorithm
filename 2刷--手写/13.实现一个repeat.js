function repeat(fn, count, time) {
    return function(str) {
        for(let i = 0; i < count; i++) {
            setTimeout(() => {
                fn(str);
            }, i * time)
        }
    }
}

function myAlert(str) {
    console.log(str);
}
// 调用这个 repeatFunc ("hellworld")，会 alert 4次 helloworld，每次间隔3秒
const repeatFunc = repeat(myAlert, 4, 3000);
repeatFunc ("hellworld");