// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    addMany(values) {
        let current = this;
        while (current.next !== null) {
            current = current.next;
        }
        for (const value of values) {
            current.next = new LinkedList(value);
            current = current.next;
        }
        return this;
    }

    getNodesInArray() {
        const nodes = [];
        let current = this;
        while (current !== null) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }
}

function convertToInt(linkedList) {

    let ptr = linkedList;
    let int = 0;
    let multiplier = 1;
    while (ptr != null) {
        int = int + (multiplier * ptr.value);
        multiplier *= 10;
        ptr = ptr.next
    }

    return int;
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.

    let sum = 0;
    let carry = 0;
    let elem1 = 0;
    let elem2 = 0;
    let outputList = null;
    let ptr = outputList;
    while ((linkedListOne != null) || (linkedListTwo != null)) {

        elem1 = 0;
        if (linkedListOne != null) {
            elem1 = linkedListOne.value;
            linkedListOne = linkedListOne.next;
        }

        elem2 = 0;
        if (linkedListTwo != null) {
            elem2 = linkedListTwo.value;
            linkedListTwo = linkedListTwo.next;
        }

        sum = elem1 + elem2 + carry;
        carry = 0;
        if (sum >= 10) {
            sum = sum % 10;
            carry = 1
        }

        if (outputList == null) {
            outputList = new LinkedList(sum);
            ptr = outputList;
        } else {
            ptr.next = new LinkedList(sum);
            ptr = ptr.next;
        }                
    }
    if (carry) {
        ptr.next = new LinkedList(carry);
    }

    return outputList;
}

let test1 = new LinkedList(2).addMany([]);
let test2 = new LinkedList(9).addMany([]);
let res = sumOfLinkedLists(test1, test2);
console.log(res);

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
