const linkedlist = require("../linked-list/LinkedList");

class Hashmap {
  constructor(size) {
    this.size = size;
    this.table  = new Array(size);
  }

  set(key, value) {
    let SetIndex = this.hash(key);

    if (!this.table[SetIndex]) {
      this.table[SetIndex] = new linkedlist();
    }

    this.table[SetIndex].append({ [key]: value });
  }

  get(key) {
    const target = this.hash(key);
    return this.table[target];
  }

  contains(key) {
    const target = this.hash(key);

    if (this.table[target]) {
      return true;
    }
    return false;
  }

  keys() {
    let arr = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        arr.push(this.table[i]);
      }
    }
    return arr;
  }
  hash(key) {
    const asciicodeSum = key.split("").reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = asciicodeSum * 599;
    const theIndex = multiPrime % this.size;

    return theIndex;
  }
}

//const myhashmap = new Hashmap(100);

// myhashmap.hash("shihab", "401d15 student");
// myhashmap.contains("324", "uhiiuh");
// myhashmap.set("324", "uhiiuh");
// console.log(myhashmap);
