function repeat(func, times, wait) {
  // TODO
    return function(str) {
        for(let i = 0; i < times; i++) {
            setTimeout(() => {
                func(str);
            }, i * wait);
        }
    }
}


// 调用这个 repeatFunc ("hellworld")，会 alert 4次 helloworld，每次间隔3秒
const repeatFunc = repeat(alert, 4, 3000);
repeatFunc ("hellworld");