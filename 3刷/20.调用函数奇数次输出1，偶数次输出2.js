let A = (function() {
    let index = 1;
    return function() {
        if(index % 2 === 0) {
            console.log(2)
        } else {
            console.log(1)
        }
        index ++
    }
})()

A()
A()
A()
A()
