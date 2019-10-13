import { Shift } from "./Utilities";

function InsertionSort<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    let smallestElementIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestElementIndex]) {
        smallestElementIndex = j;
      }
    }
    Shift(arr, smallestElementIndex, i);
  }
}

describe("InsertionSort", () => {
  test("#1", () => {
    const numberArray = [1, 4, 12, 67, 3, 98, 1001, 55, 34];
    InsertionSort(numberArray);
    expect(numberArray).toEqual([1, 3, 4, 12, 34, 55, 67, 98, 1001]);
  });
  test("#2", () => {
    const stringArray = ["ryo", "rei", "togashi", "ton", "apple", "banana"];
    InsertionSort(stringArray);
    expect(stringArray).toEqual([
      "apple",
      "banana",
      "rei",
      "ryo",
      "togashi",
      "ton"
    ]);
  });
});
