let Singleton = function(name) {
    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function() {
    console.log(this.name);
}

Singleton.getInstance = function(name) {
    if (this.instance) {
        return this.instance;
    }
    return this.instance = new Singleton(name);
}

let Winner = Singleton.getInstance('Winner');
let Looser = Singleton.getInstance('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'