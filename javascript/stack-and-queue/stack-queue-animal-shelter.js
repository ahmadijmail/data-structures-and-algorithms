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
  }
  isEmpty() {
    if (this.front === null || this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(animal) {
    const newNode = new Node(animal);
    if (animal == "dog" || animal == "cat") {
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
        this.length += 1;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
        this.length += 1;
      }
    }
  }

  dequeue(pref) {

      
     if (this.isEmpty()) {
      return "the queue is empty";
    } 
    
    else if (this.front.value == pref) {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length -= 1;
      return temp.value;
    }
    else  {
      return "this shelter is for cats and dogs only";
    }
  
  }
  
}

let newq = new AnimalShelter();
newq.enqueue("cat");
// newq.enqueue("dog");
// newq.enqueue("dog");
//newq.enqueue("myaoo")
console.log(newq);

console.log(newq.dequeue("cat"));
