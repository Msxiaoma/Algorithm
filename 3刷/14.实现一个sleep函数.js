function test(str) {
    console.log(str);
}


function sleep(time) {
    return new Promise(reslove => {
        setTimeout(reslove, time);
    })
}


sleep(3000).then(() => {
    test('E1e'); // 3000ms后输出：'E1e'
});


'students[1]'.includes('[') && 'students[1]'.replaceAll(/[\[?0-9\]$]/gi, '')