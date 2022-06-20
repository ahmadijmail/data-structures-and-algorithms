const LinkedList= require("./LinkedList")



function ziplists(list1,list2) {
    
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
       if(n2){s
        newList.insert(n2.value);
        n2=n2.next
      }
    
    }

    return newList.toString()
    }
    
  }

module.exports=ziplists
let ll= new LinkedList();
let ll2= new LinkedList();
let testlist= new LinkedList();

ll.append('1')
ll.append('2')
ll.append('3')
ll2.append('6')
ll2.append('7')
ll2.append('9')
//ll.append(200)

console.log(testlist.ziplists(ll,ll2));