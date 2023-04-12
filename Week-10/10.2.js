// check binary search tree or not
// Input: root = [5,1,4,null,null,3,6]
// Output: false

// create binary tree node
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// push data to node
let root = new BinaryTreeNode(
  5,
  new BinaryTreeNode(1),
  new BinaryTreeNode(6, new BinaryTreeNode(5), new BinaryTreeNode(7))
);

// check or validate
function checkBinarySearchTree(root) {
  if (!root) {
    return true;
  }

  if (root.left && root.left.val >= root.val) {
    return false;
  }

  if (root.right && root.right.val <= root.val) {
    return false;
  }

  return checkBinarySearchTree(root.left) && checkBinarySearchTree(root.right);
}

// output
console.log(checkBinarySearchTree(root));
