let obj = {
    a: 1234
}

obj.sayName = function () {
    console.log(obj.a)
}

obj.sayName();

module.exports = obj;