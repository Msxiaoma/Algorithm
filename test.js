let p = [];

(function(){
    setTimeout(() => {
        console.log('setTimeout') 
    }, 0);
    let i = 0
    for(; i < 3; i++) {
        p[i] = function() {
            return new Promise(resolve => {
                console.log(`Promise ${i}`);
                resolve(`${i * i}`);
            })
        }
    }
})()

async function b () {
    console.log(`async b`)
}

function a () {
    console.log(`async ${p.length}`);
    return async function() {
        console.log(`async11 ${p.length}`);
        await b();
    }
}

p[1]().then(console.log);
p.push(a());
p[3]()