// object instanceof constructor

// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
// null 表示一个空引用的特殊值，不是以Object 为原型创建的，本质是 null 和 object 并不是一个数据类型

function myInstance(obj, constructor){
    let left = obj.__proto__;
    let right = constructor.prototype;
    while (true) {
        if(left === null) {
            return false;
        }
        if(left === right) {
            return true
        }
        left = left.__proto__;
    }
}

//所有的实力对象 都有 _proto_属性
/// 只有函数对象才有 prototype
// 实例对象的__proto__指向的是函数的protoype

// protoype对象默认有两个属性：constructor 和 proto。
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    let leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
            return false;	
        }
        if (leftVaule === rightProto) {
            return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}