'use strict'
const LinkedList = require('../LinkedList');
const ziplists = require('../zip');

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




});
