// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    // Write your code here.
      let f = linkedList;
      let s = linkedList;
      let fPos = 0;
      let sPos = 0;

      while (f.next != null) {
          f = f.next;
          fPos++;
          if (sPos < Math.round(fPos / 2)) {
              s = s.next;
              sPos++;
          }          
      }

      return s;

  }
  
  // Do not edit the line below.
  exports.middleNode = middleNode;
  