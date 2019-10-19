function numIslands(grid: string[][]): number {
  const seen: boolean[][] = new Array<Array<boolean>>(grid.length).fill(
    new Array<boolean>(grid[0].length).fill(false)
  );

  function _helper(_grid: string[][]): number {
    let numOfIslands = 0;
    for (let i = 0; i < _grid.length; i++) {
      for (let j = 0; j < _grid[i].length; j++) {
        if (seen[i][j] === true) continue;
        if (_grid[i][j] === "0") continue;

        numOfIslands++;
        _markIsland_BFS(i, j);
      }
    }

    function _markIsland_BFS(row: number, col: number): void {
      const queue: number[][] = [[row, col]];

      while (0 < queue.length) {
        const field: number[] = queue.shift()!;
        seen[field[0]][field[1]] = true;
        const neighbors = _getNeighbors(field[0], field[1]);
        neighbors.forEach(element => queue.push(element));
      }
    }

    function _getNeighbors(row: number, col: number): number[][] {
      const neighbors: number[][] = [];
      if (0 < row) {
        if (grid[row - 1][col] === "1" && seen[row - 1][col] === false) {
          neighbors.push([row - 1, col]);
        }
      }
      if (0 < col) {
        if (grid[row][col - 1] === "1" && seen[row][col - 1] === false) {
          neighbors.push([row, col - 1]);
        }
      }
      if (row < grid.length - 1) {
        if (grid[row + 1][col] === "1" && seen[row + 1][col] === false) {
          neighbors.push([row + 1, col]);
        }
      }
      if (col < grid[0].length - 1) {
        if (grid[row][col + 1] === "1" && seen[row][col + 1] === false) {
          neighbors.push([row, col + 1]);
        }
      }
      return neighbors;
    }

    return numOfIslands;
  }

  return _helper(grid);
}

describe("numIslands", () => {
  test("#1", () => {
    expect(
      numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
      ])
    ).toBe(3);
  });
  test("#2", () => {
    expect(
      numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
      ])
    ).toBe(1);
  });
});
