import QuickSort from "../sorting/QuickSort";

function HighTideLowTide(num: number, measurements: number[]) {
  const highLowTide: number[] = [];
  const sortedMeasurements = QuickSort<number>(measurements);

  let j = Math.floor(num / 2) - 1;
  for (let i = 0; i < num; i++) {
    const x = i % 2 === 0 ? j + -1 * i : j + i;
    highLowTide.push(sortedMeasurements[x]);
    j = x;
  }

  return highLowTide;
}

describe("HighTideLowTide", () => {
  test("#1", () => {
    expect(HighTideLowTide(8, [10, 50, 40, 7, 3, 110, 90, 2])).toEqual([
      10,
      40,
      7,
      50,
      3,
      90,
      2,
      110
    ]);
  });
});
