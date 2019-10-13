function LinearSearch<T>(target: T, arr: T[]): number {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return i;
  }

  return -1;
}

describe("LinearSearch", () => {
  test("#1", () => {
    const stringArray = ["ryo", "rei", "togashi", "ton", "apple", "banana"];
    expect(LinearSearch("ryo", stringArray)).toBe(0);
  });
  test("#2", () => {
    const numberArray = [1, 4, 12, 67, 3, 98, 1001, 55, 34];
    expect(LinearSearch(34, numberArray)).toBe(8);
  });
});
