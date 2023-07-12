class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        // set node as head
        return this.insertBefore(this.head, node);
    }

    setTail(node) {
        // set node as tail
        return this.insertAfter(this.tail, node)
    }

    insertBefore(node, nodeToInsert) {
        if (!node) {
            // we have an empty list
            this.head = nodeToInsert;
            this.tail = nodeToInsert;
            return;
        }
        if (node == nodeToInsert) {
            // Trying to insert itself before itself. no-op
            return;
        }
        if (nodeToInsert.next != null || nodeToInsert.prev != null) {
            // node already exist. remove it first.
            this.remove(nodeToInsert);
        }
        // then insert it in it's new location
        nodeToInsert.next = node;
        nodeToInsert.prev = node.prev;
        if (node == this.head) {
            // we want to insert before the head. set new head
            this.head = nodeToInsert
        } else {
            // inserting before somewhere except the head
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeToInsert) {
        if (!node) {
            // we have an empty list
            this.head = nodeToInsert;
            this.tail = nodeToInsert;
            return;
        }
        if (node == nodeToInsert) {
            // Trying to insert itself after itself. no-op
            return;
        }
        if (nodeToInsert.next != null || nodeToInsert.prev != null) {
            // node already exist. remove it first.
            this.remove(nodeToInsert);
        }
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;
        if (node == this.tail) {
            // we want to insert after the tail. set new tail
            this.tail = nodeToInsert
        } else {
            // inserting after somewhere except the tail
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    insertAtPosition(position, nodeToInsert) {
        if (this.head == null && position == 1) {
            this.insertBefore(null, nodeToInsert);
        }
        let node = this.head;
        let counter = 1;
        while (node) {
            if (position == counter) {
                this.insertBefore(node, nodeToInsert);
            }
            node = node.next;
            counter++;
        }
    }

    removeNodesWithValue(value) {
        let node = this.head;
        let tmp;
        while (node) {
            if (node.value == value) {
                tmp = node.next;
                this.remove(node);
                node = tmp;
            } else {
                node = node.next;
            }
        }
    }

    remove(node) {
        if ((this.head == node) && (this.tail == node)) {
            this.head = null;
            this.tail = null;
        }else if (this.head == node) {
            this.head = node.next;
            this.head.prev = null;
        } else if (this.tail == node) {
            this.tail = node.prev;
            this.tail.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }

    containsNodeWithValue(value) {
        let node = this.head;
        while (node) {
            if (node.value == value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    print(msg) {
        let node = this.head;
        let str = '';
        while (node) {
            str += node.value + ' <-> ';
            node = node.next;
        }
        console.log(msg, ':', str);
    }
}



dL2 = new DoublyLinkedList();
node1 = new Node(1);
dL2.setHead(node1);
dL2.print("setting node1 as head");
dL2.remove(node1);
dL2.print("removing node1");
return;
dL = new DoublyLinkedList();
node5 = new Node(5);
dL.setHead(node5);
dL.print("node5 as head");
node4 = new Node(4)
dL.setHead(node4);
dL.print("node4 as head");
node3 = new Node(3)
dL.setHead(node3);
dL.print("node3 as head");
node2 = new Node(2)
dL.setHead(node2);
dL.print("node2 as head");
node1 = new Node(1)
dL.setHead(node1);
dL.print("node1 as head");
dL.setHead(node4);
dL.print("member node node4 as head");
node6 = new Node(6);
dL.setTail(node6);
dL.print("node6 as tail");
dL.insertBefore(node6, node3)
dL.print("inserting node3 before node6");
node3_2 = new Node(3);
dL.insertAfter(node6, node3_2);
dL.print("inserting node3_2 after node6");
node3_3 = new Node(3);
dL.insertAtPosition(1, node3_3);
dL.print("inserting node3_3 at position 1");
dL.removeNodesWithValue(3);
dL.print("removing nodes with value 3");
dL.remove(node2);
dL.print("removing node2");
dL.containsNodeWithValue(5) ? console.log("Yes! it contains nodes with value 5") : console.log("No! it does NOT contain nodes with value 5");
