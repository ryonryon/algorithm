function QuickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[choosePivot(arr.length)];
  const smaller: T[] = [];
  const bigger: T[] = [];

  arr.forEach(element => {
    if (element <= pivot) {
      smaller.push(element);
    } else {
      bigger.push(element);
    }
  });

  return [...QuickSort(smaller), ...QuickSort(bigger)];
}

function choosePivot(num: number): number {
  return Math.round(Math.random() * num);
}

describe("QuickSort", () => {
  test("#1", () => {
    const numberArray = [1, 4, 12, 67, 3, 98, 1001, 55, 34];
    expect(QuickSort(numberArray)).toEqual([1, 3, 4, 12, 34, 55, 67, 98, 1001]);
  });
  test("#2", () => {
    const stringArray = ["ryo", "rei", "togashi", "ton", "apple", "banana"];
    expect(QuickSort(stringArray)).toEqual([
      "apple",
      "banana",
      "rei",
      "ryo",
      "togashi",
      "ton"
    ]);
  });
});
