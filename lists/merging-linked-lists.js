// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

exports.LinkedList = LinkedList;

function listLength(linkedList) {

    let ptr = linkedList;
    let i = 1;
    while (ptr.next != null) {
        ptr = ptr.next;
        i++;
    }
    return i;
}

function mergingLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    let sizeOne = listLength(linkedListOne);
    let sizeTwo = listLength(linkedListTwo);
    let longestList = null;
    let shortestList = null;
    let delta = 0;
    if (sizeOne >= sizeTwo) {
        longestList = linkedListOne;
        shortestList = linkedListTwo;
        delta = sizeOne - sizeTwo;
    } else {
        longestList = linkedListTwo;
        shortestList = linkedListOne;
        delta = sizeTwo - sizeOne;
    }

    let i = 0;
    while (longestList != null) {
        if (longestList == shortestList) {
            return longestList;
        }
        if (i >= delta) {
            shortestList = shortestList.next;
        }
        longestList = longestList.next;
        i++;
    }

    return null;
}

// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;
