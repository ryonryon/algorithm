function BalancedTrees(num: number): number {
  const memo = new Map<number, number>();

  function _helper(n: number): number {
    memo.set(1, 1);

    for (let i = 2; i <= n; i++) {
      let val = 0;
      for (let j = i; 1 < j; j--) {
        // sqrt
        val = val + memo.get(Math.floor(i / j))!;
      }
      memo.set(i, val);
    }

    return memo.get(n)!;
  }
  return _helper(num);
}

describe("BalancedTrees", () => {
  test("#1", () => {
    expect(BalancedTrees(10)).toBe(13);
  });
  test("#2", () => {
    expect(BalancedTrees(1000)).toBe(33962);
  });
});
