const stack = require("./stack");

class Mxstack {
  constructor() {
    this.stacks = new stack();
    this.MaxSt = new stack();
  }
  isEmpty() {
    if (this.top === null) {
      return true;
    } return false
  }
  pushS(value) {
    let max = value;
    if (!this.MaxSt.isEmpty() && max < this.MaxSt.peek()) {
      max = this.MaxSt.peek();
    }
    this.stacks.push(value);
    this.MaxSt.push(max);
  }

  GetMax() {
    return this.MaxSt.peek();
  }
}
let newss = new Mxstack();

newss.pushS(1);
newss.pushS(2);
newss.pushS(4);
newss.pushS(3);

newss.popS(3);
console.log(newss.GetMax(3));

//newss.GetMax(3)
