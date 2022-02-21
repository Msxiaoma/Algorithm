let A = (function A(){
    let index = 1;
    function f(){
        if(index % 2 == 1){
            console.log(1);
        }else{
            console.log(2);
        }
        index++;
     }
     return f
})()

A()
A()
A()