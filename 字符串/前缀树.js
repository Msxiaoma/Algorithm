var Trie = function() {
    this.children = {};
};

Trie.prototype.insert = function(word) {
  let node = this.children;
  for(const ch of word) {
      if(!node[ch]){
        node[ch] = {};
      }
      node = node[ch];
  }
  node.isEnd = true;
};

Trie.prototype.searchPrefix = function(prefix) {
    let node = this.children;
    for(const ch of prefix) {
        if(!node[ch]) {
            return false;
        }
        node = node[ch];
    }
    return node;
}

Trie.prototype.search = function(word) {
    const node = this.searchPrefix(word);
    return node != undefined && node.isEnd == true;
};

Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix);
};


var trie = new Trie();
console.log('trie', trie)
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");