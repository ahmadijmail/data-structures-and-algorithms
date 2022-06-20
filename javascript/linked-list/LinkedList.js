"use strict";


class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
  
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size=0;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
      return this;
    }
  }

  // reversedlist(list){
  //   const newLL= new LinkedList()
  //   const nextNode= null
  //   const currentNode=null
  //   const prevNode=null
  //   if (!list.head) {
  //     return currentNode;  
  //   }
  //   else {

    
  //   while (currentNode.next){
  //   currentNode=newLL.head
  //   const nextNode=newLL.head.next

  //   }
     
  //   }


  // }
  includes(value) {
    let currNode = this.head;
    while (!this.head) {
      if (currNode.value == value) return true;
      currNode = currNode.next;
    }
    return false;
  }

  toString() {
    let result = "";
    let currNode = this.head;
    while (currNode) {
      result = (`${result}${currNode.value} -->`);
      if (currNode.next === null) {
        result += ' NULL';
      }
      currNode = currNode.next;
    }
    //console.log(`${result} NULL`);
    return result;
  }

  

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      
      return this;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (curr.value === value) {
        if (prev === null) {
          this.head = newNode;
          newNode.next = curr;
        } else {
          prev.next = newNode;
          newNode.next = curr;
        }
        this.length++;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        newNode.next = curr.next;
        curr.next = newNode;
        this.length++;
        return;
      }
      curr = curr.next;
    }
  }
  kthFromEnd(k) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      count++;
      curr = curr.next;
    }
    if (k > count) {
      return 'Exception';
    }
    if (k < 1) {
      return 'Exception';
    }
    curr = this.head;
    for (let i = 0; i < count - k; i++) {
      curr = curr.next;
    }
    return curr.value;
  }

  ziplists(list1,list2) {
    let n1= list1.head
    let n2=list2.head
    let newList = new LinkedList(); //empty list
    if (n1 == null & n1 == null ) {
      return "Nothing to be ziped man";
    } else {
      while (n1 || n2 ){
        if(n1){
        newList.insert(n1.value);
        n1=n1.next
      }
      if(n2){
        newList.insert(n2.value);
        n2=n2.next
      }
    
    }

    return newList.toString()
    }
    
  }

}
let ll= new LinkedList();
let ll2= new LinkedList();
let testlist= new LinkedList();

// ll.append('1')
// ll.append('2')
// ll.append('3')
// ll2.append('6')
// ll2.append('7')
// ll2.append('9')
// //ll.append(200)

// console.log(testlist.ziplists(ll,ll2));
//console.log(ll);
module.exports = LinkedList;
