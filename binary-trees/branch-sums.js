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

function branchSums(root, sum = 0, sums = []) {

    if ((root.left === null) && (root.right === null)) {
        console.log(sum + root.value);
        sums.push(sum + root.value);
    } else {
        if (root.left !== null) {
            branchSums(root.left, sum + root.value, sums);
        }
        if (root.right !== null) {
            branchSums(root.right, sum + root.value, sums);
        }
    }
    return sums;
    // Write your code here.
}

const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(branchSums(tree));

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
