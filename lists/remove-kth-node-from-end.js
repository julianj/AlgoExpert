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

function removeKthNodeFromEnd(head, k) {

    let first = head;
    let second = head;
    let prev = null;
    let delta = 0;
    while (first.next != null) {
        if (delta >= (k - 1)) {
            prev = second;
            second = second.next;
        } else {
            delta++;
        }
        first = first.next;
    }
    if (prev == null) {
        head.value = head.next.value
        head.next = head.next.next;
    } else {
        prev.next = second.next;
    }
}

let test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
removeKthNodeFromEnd(test, 10);
console.log(test.getNodesInArray());

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
