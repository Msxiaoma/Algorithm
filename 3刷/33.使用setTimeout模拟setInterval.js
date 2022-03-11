// 综上所述，setInterval 有两个缺点：

// 使用 setInterval 时，某些间隔会被跳过；
// 可能多个定时器会连续执行；

// 可以这么理解：每个 setTimeout 产生的任务会直接 push 到任务队列中；而 setInterval 在每次把任务 push 到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。
// 因而我们一般用 setTimeout 模拟 setInterval，来规避掉上面的缺点。

function mySetInterval(fn, time) {
    let time =  null;
    function interval() {
        fn();
        time = setTimeout(interval, time);
    }
    interval();
    return {
        cancel: () => {
            clearTimeout(time);
        }
    }
}