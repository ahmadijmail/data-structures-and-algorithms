const queue = require("../stack-and-queue/queue");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
    this.cat = new queue();
    this.dog = new queue();
  }
  isEmpty() {
    if (this.front === null || this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  enqueue2(animal) {
    //const newNode = new Node(animal);
    if (animal == "dog") {
      this.dog.enqueue(animal);
    } else if (animal == "cat") {
      this.cat.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref == "cat") {
      if (this.cat.isEmpty()) {
        return "No cats";
      } else if (!this.cat.isEmpty()) {
        this.cat.dequeue();
        return pref;
      }
    } else if (pref == "dog") {
      if (this.dog.isEmpty()) {
        return "No Dogs";
      } else if (!this.dog.isEmpty()) {
        this.dog.dequeue();
        return pref;
      }
    } else {
      return null;
    }
  }
}

let newq = new AnimalShelter();
//newq.enqueue2("cat");
//newq.enqueue2("cat");
//newq.enqueue("dog");
//newq.enqueue("dog");
//newq.enqueue("myaoo")
//console.log(newq);
newq.enqueue2("dog");
newq.enqueue2("dog");
//console.log(newq.dequeue("cat"));

// console.log(newq.dequeue("dfds"));