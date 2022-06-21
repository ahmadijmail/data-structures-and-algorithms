const stack = require("../stack");

describe("Linked List", () => {
  test("Can successfully push onto a stack", () => {
    let newstack = new stack();
    newstack.push(2);
    expect(newstack.top.value).toBe(2);
  });

  test("Can successfully push multiple values onto a stack", () => {
    let newstack = new stack();
    newstack.push(1);
    newstack.push(2);
    newstack.push(3);
    newstack.push(4);
    expect(newstack.top.value).toBe(4);
    expect(newstack.top.next.value).toBe(3);
    expect(newstack.top.next.next.value).toBe(2);
    expect(newstack.top.next.next.next.value).toBe(1);
  });

  test("Can successfully pop off the stack", () => {
    let newstack = new stack();
    newstack.push(1);
    newstack.push(2);
    newstack.pop();
    expect(newstack.peek()).toBe(1);
  });

  test("Can successfully pop off the stack", () => {
    let newstack = new stack();
    newstack.push(1);
    newstack.push(2);
    newstack.pop();
    newstack.pop();
    expect(newstack.isEmpty()).toBe(true);
  });
  test("Can successfully peek the next item on the stack", () => {
    let newstack = new stack();
    newstack.push(1);
    newstack.push(2);
    expect(newstack.peek()).toBe(2);
  });

  test("Can successfully instantiate an empty stack", () => {
    let newstack = new stack();

    expect(newstack.isEmpty()).toBe(true);
  });

  test("Calling pop or peek on empty stack raises exception", () => {
    let newstack = new stack();

    expect(newstack.peek()).toBe("no nodes in the stack");
  });
});
