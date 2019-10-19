function TandemBicycle(
  question: string,
  population: number,
  speedOfD: number[],
  speedOfP: number[]
): number {
  let n = 0;
  const sortedD = speedOfD.sort((a, b) => a - b);
  const sortedP = speedOfP.sort((a, b) => a - b);

  if (question === "1") {
    for (let i = 0; i < population; i++) {
      if (sortedD[i] < sortedP[i]) {
        n = n + sortedP[i];
      } else {
        n = n + sortedD[i];
      }
    }
  } else {
    let j = sortedD.length - 1;
    let k = sortedP.length - 1;
    for (let i = 0; i < population; i++) {
      if (sortedD[j] < sortedP[k]) {
        n = n + sortedP[k];
        k--;
      } else {
        n = n + sortedD[j];
        j--;
      }
    }
  }

  return n;
}

describe("TandemBicycle", () => {
  test("#1", () => {
    expect(TandemBicycle("1", 3, [5, 1, 4], [6, 2, 4])).toBe(12);
  });
  test("#2", () => {
    expect(TandemBicycle("2", 3, [5, 1, 4], [6, 2, 4])).toBe(15);
  });
  test("#3", () => {
    expect(
      TandemBicycle("2", 5, [202, 177, 189, 589, 102], [17, 78, 1, 496, 540])
    ).toBe(2016);
  });
});
