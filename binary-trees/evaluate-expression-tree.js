// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function evaluateExpressionTree(tree) {
    // Write your code here.
      if ((tree.left == null) && (tree.right == null)) {
          return tree.value;
      }

      if (tree.value == -1) {
          return evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right);
      }
      
      if (tree.value == -2) {
          return evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right);
      }

      if (tree.value == -3) {
          return Math.trunc(evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right));
      }

      if (tree.value == -4) {
          return evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right);
      }

      return -1

  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.evaluateExpressionTree = evaluateExpressionTree;
  