// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Linked list is SORTED
function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let prev = linkedList;
    let head = linkedList;
    let current = head.next;
    while (current != null) {
        if (current.value === prev.value) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    } 
    return head;
}

let linkedList = new LinkedList(1);
let head = linkedList;
linkedList.next = new LinkedList(3);    
linkedList = linkedList.next;
linkedList.next = new LinkedList(4);    
linkedList = linkedList.next;
linkedList.next = new LinkedList(4);    
linkedList = linkedList.next;
linkedList.next = new LinkedList(4);    
linkedList = linkedList.next;
linkedList.next = new LinkedList(5);   
linkedList = linkedList.next;
linkedList.next = new LinkedList(6);    
linkedList = linkedList.next;
linkedList.next = new LinkedList(6);   


console.log(removeDuplicatesFromLinkedList(head));

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
