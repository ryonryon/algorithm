function MergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = MergeSort([...arr.slice(0, middle)]);
  const right = MergeSort([...arr.slice(middle)]);

  return sortMerge(left, right);
}

function sortMerge<T>(left: T[], right: T[]): T[] {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }

  if (i === left.length) {
    mergedArr.push(...right.slice(j));
  } else {
    mergedArr.push(...left.slice(i));
  }

  return mergedArr;
}

describe("MergeSort", () => {
  test("#1", () => {
    const numberArray = [1, 4, 12, 67, 3, 98, 1001, 55, 34];
    expect(MergeSort(numberArray)).toEqual([1, 3, 4, 12, 34, 55, 67, 98, 1001]);
  });
  test("#2", () => {
    const stringArray = ["ryo", "rei", "togashi", "ton", "apple", "banana"];
    expect(MergeSort(stringArray)).toEqual([
      "apple",
      "banana",
      "rei",
      "ryo",
      "togashi",
      "ton"
    ]);
  });
});
