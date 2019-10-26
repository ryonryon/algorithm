export function Swap<T>(arr: T[], a: number, b: number): void {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

export function Shift<T>(arr: T[], shiftIndex: number, to: number): void {
  let temp = arr[shiftIndex];
  for (let i = shiftIndex; to < i; i--) {
    arr[i] = arr[i - 1];
  }
  arr[to] = temp;
}

describe("Utilities", () => {
  test("Swap #1", () => {
    const testArr = [1, 2 , 3, 4];
    Swap(testArr, 0, 2);
    expect(testArr).toEqual([3, 2, 1, 4]);
  });
  test("Shift #2", () => {
    const testArr = [1, 2 , 3, 4];
    Swap(testArr, 3, 1);
    expect(testArr).toEqual([1, 4, 3, 2]);
  });
});