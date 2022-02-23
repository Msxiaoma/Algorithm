let A = (function () {
    let index = 1;
    function fn() {
        if(index % 2 == 0) {
            console.log(2);
        } else {
            console.log(1);
        }
        index++;
    }
    return fn;
})()

A()
A()
A()
A()