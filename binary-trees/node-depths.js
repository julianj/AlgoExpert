const chai = require('chai');
// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === null) {
                current.left = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.left);
            if (current.right === null) {
                current.right = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
    }
}


function nodeDepths2(root, level = 0, totalSumOfDepths = 0) {
    if ((root.left === null) && (root.right === null)) {
        totalSumOfDepths += level;
    } else {
        if (root.left != null) {
            totalSumOfDepths = 1 + nodeDepths(root.left, level+1, totalSumOfDepths);
        }

        if (root.right !== null) {
            totalSumOfDepths = 1 + nodeDepths(root.right, level+1, totalSumOfDepths)
        }
    }    
    return totalSumOfDepths;
}

function nodeDepths(root, level = 0) {
    if (root === null) {
        return 0;
    }
    return level + nodeDepths(root.left, level + 1) + nodeDepths(root.right, level + 1);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
const actual = nodeDepths(root);
chai.expect(actual).to.deep.equal(16);
// Do not edit the line below.
exports.nodeDepths = nodeDepths;