// Input [3, 9, 20, null, null, 15, 7]
// Output 3

// create binary tree node
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// calculate max depth
function maxDepth(root) {
  if (root === null) {
    return 0;
  } else {
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    // console.log("leftDepth", leftDepth);
    // console.log("rightDepth", rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

let root = new BinaryTreeNode(
  3,
  new BinaryTreeNode(9),
  new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7))
);

console.log(maxDepth(root));
