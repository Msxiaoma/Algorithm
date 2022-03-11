function Single(name) {
    this.name = name;
    this.instance = null;
}

Single.prototype.getName = function() {
    return this.name;
}

Single.getInstance = function(name) {
    if(this.instance) {
        return this.instance;
    }
    return this.instance = new Single(name);
}


let Winner = Single.getInstance('Winner');
let Looser = Single.getInstance('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'