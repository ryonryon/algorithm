import { Swap } from "./Utilities";

function BubbleSort<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        Swap(arr, j, j + 1);
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
}

describe("BubbleSort", () => {
  test("#1", () => {
    const numberArray = [1, 4, 12, 67, 3, 98, 1001, 55, 34];
    BubbleSort(numberArray);
    expect(numberArray).toEqual([1, 3, 4, 12, 34, 55, 67, 98, 1001]);
  });
  test("#2", () => {
    const stringArray = ["ryo", "rei", "togashi", "ton", "apple", "banana"];
    BubbleSort(stringArray);
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
