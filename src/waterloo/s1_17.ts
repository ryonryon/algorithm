function SumGame(
  numberOfDays: number,
  swiftsKs: number[],
  semaphoresKs: number[]
): number {
  let kthDay = 0;
  let swiftsSum = 0;
  let semaphoresSum = 0;

  for (let i = 0; i < numberOfDays; i++) {
    swiftsSum = swiftsSum + swiftsKs[i];
    semaphoresSum = semaphoresSum + semaphoresKs[i];

    if (swiftsSum === semaphoresSum) {
      kthDay = i + 1;
    }
  }

  return kthDay;
}

describe("SumGame", () => {
  test("#1", () => {
    expect(SumGame(3, [1, 3, 3], [2, 2, 6])).toBe(2);
  });
});
