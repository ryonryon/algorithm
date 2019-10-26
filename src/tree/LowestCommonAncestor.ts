import TreeNode from "../util/TreeNode";

function lowestCommonAncestor<T>(
  root: TreeNode<T> | null,
  p: TreeNode<T>,
  q: TreeNode<T>
): TreeNode<T> | null {
  if (root == null) return null;

  function _helper(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node == null) return null;
    if (p == node || q == node) return node;

    const left = _helper(node.left);
    const right = _helper(node.right);

    if (!left) return right;
    if (!right) return left;

    return node;
  }

  return _helper(root);
}

describe("lowestCommonAncestor", () => {
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

  const node = new TreeNode(3);
  node.left = new TreeNode(5);
  node.right = new TreeNode(1);
  node.left.left = new TreeNode(6);
  node.left.right = new TreeNode(2);
  node.right.left = new TreeNode(0);
  node.right.right = new TreeNode(8);
  node.left.left.left = null;
  node.left.left.right = null;
  node.left.right.left = new TreeNode(7);
  node.left.right.right = new TreeNode(4);

  test("#1", () => {
    expect(
      lowestCommonAncestor(
        root,
        root.left!.left!.right!,
        root.left!.right!.left!
      )
    ).toBe(root.left);
  });
  test("#2", () => {
    expect(lowestCommonAncestor(root, root, root!.right!.right!.right!)).toBe(
      root
    );
  });
  test("#3", () => {
    expect(
      lowestCommonAncestor(root, root.right!.left!.left!, root.right!.right!)
    ).toBe(root.right);
  });
  test("#4", () => {
    expect(
      lowestCommonAncestor(node, node.left!, node.left!.right!.right!)
    ).toBe(node.left);
  });
});
