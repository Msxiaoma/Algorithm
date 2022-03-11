function bind(context) {
    let _this = this;
    let args = [...arguments].slice(1);
    return function T() {
        if(this instanceof T) { // 作为构造函数
            return new _this(...arguments, ...args)
        } else {
            return _this.apply(context, args.concat([...arguments]));
        }
    }
}