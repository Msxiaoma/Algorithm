// sleep(sayHi, 1000);
// 1. 回调
function sleep(fn, time) {
    setTimeout(fn, time);
}

// preomise
const sleep = (time) => {
  return new Promise((resovle, rej) => {
    setTimeout(() => {
      resovle();
    }, time * 1000);
  });
};

sleep(3000).then(() => {
    test('E1e'); // 3000ms后输出：'E1e'
});



