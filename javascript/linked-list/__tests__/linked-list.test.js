'use strict';

// Require our linked list implementation
const LinkedList = require('../LinkedList');

describe('Linked List', () => {
 test("Can successfully instantiate an empty linked list", ()=>{
   let list= new LinkedList();
   expect(list.head).toBeNull();
 }

 
 )

 test("Can properly insert into the linked list", ()=>{
  let list= new LinkedList();
  list.insert('one')
  expect(list.head.value).toEqual('one');
})

test("The head property will properly point to the first node in the linked list", ()=>{
  let list= new LinkedList();
  list.insert('one')
  expect(list.head.value).toEqual('one');
  list.insert('two')
  expect(list.head.value).toEqual('one');
})

test ("Can properly insert multiple nodes into the linked list", () =>{
  let list= new LinkedList();
  list.insert('one')
  list.insert('two')
  expect(list.head.value).toEqual('one')
  expect(list.head.next.value).toEqual('two')

})

test ("Will return true when finding a value within the linked list that exists", () =>{
 
  let list= new LinkedList();
  list.insert('one')
 expect(list.head.value.includes('one')).toBeTruthy()

})



test ("Will return false when searching for a value in the linked list that does not exist", () =>{
  let list= new LinkedList();
 list.insert('one')
 expect(list.head.value.includes('Two')).toBeFalsy()

})  
test("Can properly return a collection of all the values that exist in the linked list",()=>{
  let list= new LinkedList();
  let consolSpy=jest.spyOn(console, 'log');
  list.insert('one')
  list.toString()
  expect(consolSpy).toHaveBeenCalledWith("one --> NULL")
})


});
