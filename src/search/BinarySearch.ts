function BinarySearch(target: number, arr: number[]): number {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    let middle = Math.floor((upper + lower) / 2);
    if (target === arr[middle]) {
      return middle;
    } else if (arr[middle] < target) {
      lower = middle + 1;
    } else {
      upper = middle - 1;
    }
  }

  return -1;
}

describe("BinarySearch", () => {
  test("#1", () => {
    const numberArray = [1, 3, 5, 7, 9, 11, 13, 14, 15, 17, 18, 20];
    expect(BinarySearch(13, numberArray)).toBe(6);
  });
  test("#2", () => {
    const numberArray = [1, 3];
    expect(BinarySearch(1, numberArray)).toBe(0);
  });
  test("#3", () => {
    const numberArray = [1, 3, 5, 7, 9, 11, 13, 14, 15, 17, 18, 20];
    expect(BinarySearch(20, numberArray)).toBe(11);
  });
});
