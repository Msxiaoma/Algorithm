
function repeat(fn, num, time) {
    let index = 0;
    return function(str) {
        while(index < num) {
            setTimeout(() => {
                fn(str);
            }, time * index)
            index ++;
        }
    }
}


// 调用这个 repeatFunc ("hellworld")，会 alert 4次 helloworld，每次间隔3秒
function myAlert(str) {
    console.log(str)
}
const repeatFunc = repeat(myAlert, 4, 3000);
repeatFunc ("hellworld");