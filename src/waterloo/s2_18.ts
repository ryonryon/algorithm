function Sunflowers(num: number, sunflowers: number[][]): number[][] {
  function _rotateNinetyDigree(currentArrangement: number[][]): number[][] {
    const rotatedSunflowers = Array.from(new Array(num), () =>
      new Array(num).fill(0)
    );
    for (let i = 0; i < num; i++) {
      let l = num - 1;
      for (let j = 0; j < num; j++) {
        rotatedSunflowers[l][i] = currentArrangement[i][j];
        l--;
      }
    }
    return rotatedSunflowers;
  }
  function _isOriginalArrangement(currentArrangement: number[][]): boolean {
    for (let i = 0; i < num - 1; i++) {
      for (let j = 0; j < num - 1; j++) {
        if (currentArrangement[i + 1][j + 1] < currentArrangement[i][j])
          return false;
        if (currentArrangement[j + 1][i + 1] < currentArrangement[j][i])
          return false;
      }
    }
    return true;
  }

  while (true) {
    if (_isOriginalArrangement(sunflowers)) return sunflowers;
    sunflowers = _rotateNinetyDigree(sunflowers);
  }
}

describe("Sunflowers", () => {
  test("#1", () => {
    expect(Sunflowers(2, [[1, 3], [2, 9]])).toEqual([[1, 3], [2, 9]]);
  });
  test("#2", () => {
    expect(Sunflowers(3, [[4, 3, 1], [6, 5, 2], [9, 7, 3]])).toEqual([
      [1, 2, 3],
      [3, 5, 7],
      [4, 6, 9]
    ]);
  });
});
