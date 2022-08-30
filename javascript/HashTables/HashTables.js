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

  hashKeys(hash, value) {
    let arr = [];

    let key = Object.keys(this.map[hash])[0];
    arr.push(key);

    let value1 = Object.values(this.map[hash])[0];

    for (let i = 0; i < value1.length; i++) {
      arr.push(value1[i]);
    }
    if (value) {
      let value2 = Object.values(value)[0];
      
      for (let i = 0; i < value2.length; i++) {
        arr.push(value2[i]);
      }
    } else {


      arr.push(null);
    }
    this.map[hash] = arr;
  }

  leftJoin(hash1, hash2) {


    if (hash1.map.length >= 2) {
      
      for (let i = 0; i < hash2.map.length; i++) {
        if (hash1.map[i]) {

          hash1.hashKeys(i, hash2.map[i]);
        //  console.log(hash1);
        }
      }
    }

    return hash1;
  }


}

function findRepeated(string){
  //console.log("before",string );
  let lowerCase=string.toLowerCase()
 // console.log("after",lowerCase );
 let stringSplit=lowerCase.split(" ")
  let HashMap= new Hashmap(1000)

  for (let i=0; i<stringSplit.length;i++){
 
//console.log(stringSplit);
     if(HashMap.contains(stringSplit[i])){
return {"Repeated Word is:": stringSplit[i]}


}
else  HashMap.set(stringSplit[i], Math.random())

  }return  "No Repeated Words"

} 

//const myhashmap = new Hashmap(100);

let case1= "Hey my name is ahmad My, my name is khaled" 
let case2= "Hey my name is ahmad My, no repeated word" 
console.log(findRepeated(case1));
console.log(findRepeated(case2));
// myhashmap.hash("shihab", "401d15 student");
// myhashmap.contains("324", "uhiiuh");
// myhashmap.set("324", "uhiiuh");
// console.log(myhashmap);
