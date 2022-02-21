// call 
function call(obj, ...params) {
    let context = obj || window;
    let fn = Symbol();
    context[fn] = this;
    let res = context.fn(this, ...params);
    delete context[fn];
    return res;
}

// apply

// bind

function bind(obj, ...args) {
    let _this = this;
    let args = args ? args : [];
    return function T() {
        if(this instanceof T) {
            return new _this(...args, ...arguments);
        } else {
            return _this.apply(obj, [...args,...arguments]);
        }
    }
}