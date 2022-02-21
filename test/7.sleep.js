// sleep(sayHi, 1000);

function sleep(fn, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn());
        }, time)
    })
}

function sayHi() {
    console.log('sayHi');
}
sleep(sayHi, 1000);