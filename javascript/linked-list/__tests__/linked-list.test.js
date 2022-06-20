'use strict';

// Require our linked list implementation
const LinkedList = require('../LinkedList');

describe('Linked List', () => {

  test("do a zip if empty", ()=>{
    let ll= new LinkedList();
    let ll2= new LinkedList();
    let testlist= new LinkedList();
    
    expect(testlist.ziplists(ll,ll2)).toBe('Nothing to be ziped man');
  
   } )


 test("do a zip for 2 LL with same Size", ()=>{
  let ll= new LinkedList();
  let ll2= new LinkedList();
  let testlist= new LinkedList();
  ll.append(1)
  ll.append(2)
  ll.append(3)
  ll2.append(6)
  ll2.append(7)
  ll2.append(9)

  expect(testlist.ziplists(ll,ll2)).toBe('1 -->6 -->2 -->7 -->3 -->9 --> NULL');

 } )

 test("do a zip for 2 LL with deferent Size", ()=>{
  let ll= new LinkedList();
  let ll2= new LinkedList();
  let testlist= new LinkedList();
  ll.append(1)
  ll.append(2)
  ll.append(3)
  ll.append(200)
  ll2.append(6)
  ll2.append(7)
  ll2.append(9)
  expect(testlist.ziplists(ll,ll2)).toBe('1 -->6 -->2 -->7 -->3 -->9 -->200 --> NULL');

 } )

 test("do a zip for if one LL is empty ", ()=>{
  let ll= new LinkedList();
  let ll2= new LinkedList();
  let testlist= new LinkedList();
  ll.append(1)
  ll.append(2)
  ll.append(3)
  expect(testlist.ziplists(ll,ll2)).toBe('1 -->2 -->3 --> NULL');

 } )

//  test("Can properly insert into the linked list", ()=>{
//   let list= new LinkedList();
//   list.insert('one')
//   expect(list.head.value).toEqual('one');
// })

// test("The head property will properly point to the first node in the linked list", ()=>{
//   let list= new LinkedList();
//   list.insert('one')
//   expect(list.head.value).toEqual('one');
//   list.insert('two')
//   expect(list.head.value).toEqual('one');
// })

// test ("Can properly insert multiple nodes into the linked list", () =>{
//   let list= new LinkedList();
//   list.insert('one')
//   list.insert('two')
//   expect(list.head.value).toEqual('one')
//   expect(list.head.next.value).toEqual('two')

// })

// test ("Will return true when finding a value within the linked list that exists", () =>{
 
//   let list= new LinkedList();
//   list.insert('one')
//  expect(list.head.value.includes('one')).toBeTruthy()

// })



// test ("Will return false when searching for a value in the linked list that does not exist", () =>{
//   let list= new LinkedList();
//  list.insert('one')
//  expect(list.head.value.includes('Two')).toBeFalsy()

// })  
// test("Can properly return a collection of all the values that exist in the linked list",()=>{
//   let list= new LinkedList();
//   let consolSpy=jest.spyOn(console, 'log');
// //   list.insert('one')
// //   list.toString()
// //   expect(consolSpy).toHaveBeenCalledWith("one --> NULL")
// //})

// test('Can successfully add a node to the end of the linked list', () => {
//   let list = new LinkedList();
//   list.append('a');
  
//   expect(list.head.next).toBeNull();
// });

// test('Can successfully add multiple nodes to the end of a linked list', () => {
//   const list = new LinkedList();
//   list.append('10');
//   list.append('20');
//   expect(list.head.next.value).toEqual('20');
//   expect(list.head.next.next).toBeNull();
// });

// test('Can successfully insert a node before a node located in the middle of a linked list', () => {

//   const list = new LinkedList();
//   list.append('1');
//   list.append('2');
//   list.append('3');
//   list.insertBefore('2', 'a');
//   expect(list.head.next.value).toEqual('a');
//   expect(list.head.next.next.value).toEqual('2');
  
// });

// test('Can successfully insert a node before the first node of a linked list', () => {
//   const list = new LinkedList();
//   list.insert('1');
//   list.insert('2');
//   list.insertBefore('1', 'a');
//   console.log(list.toString());
//   expect(list.head.value).toEqual('a');

  
// });

// test('Can successfully insert after a node in the middle of the linked list', () => {
//   const list = new LinkedList();
//   list.append('1');
//   list.append('2');
//   list.append('3');
//   list.insertBefore('3', 'a');
//    expect(list.head.next.next.value).toEqual('a');
//    expect(list.head.next.next.next.value).toEqual('3');


// });

// test('Can successfully insert a node after the last node of the linked list', () => {
//   const list = new LinkedList();
//   list.append('1');
//   list.append('2');
//   list.append('3');
//   list.insertAfter('3', 'a');
//   expect(list.head.next.next.next.value).toEqual('a');
//   expect(list.head.next.next.next.next).toBeNull();

// });

// test('Where k is greater than the length of the linked list', () => {
//   let list = new LinkedList();
//   list.append('1');
//   list.append('2');
//   list.append('3');
//   expect(list.kthFromEnd(5)).toBe('Exception');
// });
// test('Where k and the length of the list are the same', () => {
//   let list = new LinkedList();
//   list.append('1');
//   list.append('2');
//   list.append('3');
//   expect(list.kthFromEnd(3)).toBe('1');
// });
// test('Where k is not a positive integer', () => {
//   let list = new LinkedList();
//   list.append('a');
//   list.append('b');
//   list.append('c');
//   expect(list.kthFromEnd(-1)).toBe('Exception');
// });
// test('Where the linked list is of a size 1', () => {
//   let list = new LinkedList();
//   list.append('1');
//   expect(list.kthFromEnd(1)).toBe('1');
// });
// test('where k is not at the end, but somewhere in the middle of the linked list', () => {
//   let list = new LinkedList();
//   list.append('1');
//   list.append('2');
//   list.append('3');
//   expect(list.kthFromEnd(2)).toBe('2');
// });


});
