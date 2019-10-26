class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(
    value: T,
    left: TreeNode<T> | null = null,
    right: TreeNode<T> | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe("treenode", () => {
  test("#1", () => {
    const treeNode = new TreeNode<string>("test");

    expect(treeNode.value).toBe("test");
    expect(treeNode.left).toBeNull;

    expect(treeNode.right).toBeNull;
  });
});

export default TreeNode;
