import TreeNode from "../util/TreeNode";
import Queue from "../util/Queue";

function serializeTree<T>(root: TreeNode<T>): T[] {
  const arr = [];
  const queue = new Queue<TreeNode<T>>();
  queue.enqueue(root);

  while (0 < queue.size()) {
    const node: TreeNode<T> | undefined = queue.dequeue();
    arr.push(node!.value);
    if (node!.left) queue.enqueue(node!.left);
    if (node!.right) queue.enqueue(node!.right);
  }

  return arr;
}

describe("serializeTree", () => {
  test("#1", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(8);
    root.right = new TreeNode(12);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(6);
    root.right.left = new TreeNode(9);
    root.right.right = new TreeNode(2);
    root.left.left.left = new TreeNode(16);
    root.left.left.right = new TreeNode(5);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(10);
    root.right.left.left = new TreeNode(19);
    root.right.left.right = new TreeNode(20);
    root.right.right.left = new TreeNode(11);
    root.right.right.right = new TreeNode(4);

    expect(serializeTree(root)).toEqual([
      3,
      8,
      12,
      1,
      6,
      9,
      2,
      16,
      5,
      7,
      10,
      19,
      20,
      11,
      4
    ]);
  });
});
