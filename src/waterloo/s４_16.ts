function CombiningRiceballs(num: number, nums: number[]): number {
  let lastNums = Array.from(nums);
  while (true) {
    const empNums = [];
    let isChanged = false;
    for (let i = 0; i < lastNums.length; i++) {
      if (i + 1 < num && lastNums[i] === lastNums[i + 1]) {
        empNums.push(lastNums[i] + lastNums[i + 1]);
        i++;
        isChanged = true;
      } else if (i + 2 < num && lastNums[i] === lastNums[i + 2]) {
        empNums.push(lastNums[i] + lastNums[i + 1] + lastNums[i + 2]);
        i = i + 2;
        isChanged = true;
      } else {
        empNums.push(lastNums[i]);
      }
    }
    if (isChanged) {
      lastNums = Array.from(empNums);
    } else {
      let ans = 0;
      for (let i = 0; i < empNums.length; i++) {
        if (ans < empNums[i]) ans = empNums[i];
      }
      return ans;
    }
  }
}

describe("CombiningRiceballs", () => {
  test("#1", () => {
    expect(CombiningRiceballs(7, [47, 12, 12, 3, 9, 9, 3])).toBe(48);
  });
});
