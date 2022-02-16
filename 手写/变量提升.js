var b = 10 ;
(function b()
{ 
    b = 20; 
    console.log(b); 
})(); 

console.log(b); 

// 输出： function b， 10
// 原因：非匿名自执行函数不存在变量提升，因为有自己的作用域，所有输出10，并且函数名不可以被修改，所以输出 function b