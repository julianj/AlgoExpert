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
    const listOneInt = convertToInt(linkedListOne);
    const listTwoInt = convertToInt(linkedListTwo);

    const sum = listOneInt + listTwoInt;

    const sumArray = sum.toString().split('');
    let outputList = new LinkedList(parseInt(sumArray[sumArray.length - 1]));
    let ptr = outputList;
    for (let i = sumArray.length - 2; i >= 0; i--) {
        ptr.next = new LinkedList(parseInt(sumArray[i]));
        ptr = ptr.next;
    }
    
    return outputList;
}

let test = new LinkedList(2).addMany([4, 7, 1]);
let res = sumOfLinkedLists(test, test);
console.log(res);

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
