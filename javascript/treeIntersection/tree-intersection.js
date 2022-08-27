const Hashmap= require('../HashTables/HashTables')


function TreeInterSection(Tree1, Tree2) {
    const hashmap = new Hashmap();
  
    let found = [];
    for (let i = 0; i < Tree2.length; i++) {
        hashmap.set(Tree1[i], Tree1[i]);
    }
    for (let i = 0; i < Tree1.length; i++) {
      if (hashmap.contains(Tree2[i]) === true) {
        found.push(Tree2[i]);
      }
    }
    return found;
  }
  
  module.exports = TreeInterSection