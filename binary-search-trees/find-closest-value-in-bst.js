const chai = require('chai');

function findClosestValueInBst(tree, target, closest = Number.MAX_SAFE_INTEGER) {

    if (tree == null) {
        return closest;
    }
    
    let diff = Math.abs(tree.value - target);
    if (diff === 0) {
        return tree.value;
    } 
    if (diff < Math.abs(closest - target)) {
        closest = tree.value;
    }
    if (target < tree.value) {
        return findClosestValueInBst(tree.left, target, closest);
    }
    return findClosestValueInBst(tree.right, target, closest);

}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

function test6() {
    const root = new BST(1);
    root.left = new BST(-51);
    root.left.left = new BST(-403);
    root.right = new BST(1);
    root.right.right = new BST(1);
    root.right.right.right = new BST(1);
    const expected = -51;
    const actual = findClosestValueInBst(root, -70);
    console.log(actual, expected);
    chai.expect(actual).to.deep.equal(expected);
}

function test3() {
    const root = new BST(502);
    root.left = new BST(204);
    root.left.left = new BST(203);
    root.left.right = new BST(205);
    root.left.right.right = new BST(207);
    root.left.right.right.left = new BST(206);
    root.left.right.right.right = new BST(208);


    const expected = 208;
    const actual = findClosestValueInBst(root, 208);
    console.log(actual, expected);
    chai.expect(actual).to.deep.equal(expected);
}

test3();
test6();