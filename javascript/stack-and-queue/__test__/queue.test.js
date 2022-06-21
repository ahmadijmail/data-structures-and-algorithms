const Queue = require("../queue");

describe("Linked List", () => {
  test("Can successfully push onto a stack", () => {
    let newQueue = new Queue();
    newQueue.enqueue(2);
    expect(newQueue.front.value).toBe(2);
  });
  test("Can successfully enqueue multiple values into a queue", () => {
    let newQueue = new Queue();
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    expect(newQueue.front.value).toBe(10);
    expect(newQueue.front.next.value).toBe(20);
  });

  test("Can successfully dequeue out of a queue the expected value", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);

    newQueue.dequeue(1);
    expect(newQueue.front.value).toBe(2);
  });

  test("Can successfully peek into a queue, seeing the expected value", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);

    expect(newQueue.peek()).toBe(1);
    //console.log(newQueue.peek());
    // expect(newQueue.front.peek()).toBe(2);
  });

  test("Can successfully empty a queue after multiple dequeues", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);

    newQueue.dequeue(1);
    newQueue.dequeue(2);
    expect(newQueue.isEmpty()).toBe(true);
  });

  test("Can successfully instantiate an empty queue", () => {
    let newQueue = new Queue();

    expect(newQueue.isEmpty()).toBe(true);
  });
  test("Calling dequeue or peek on empty queue raises exception", () => {
    let newQueue = new Queue();

    expect(newQueue.dequeue()).toBe("the queue is empty");
  });
});
