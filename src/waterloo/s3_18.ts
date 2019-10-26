function RoboThieves(rows: number, cols: number, board: string[][]): number[] {
  function _resolveCamera(r: number, c: number) {
    for (let i = r + 1;; i++) {
      const val = board[i][c];
      if (val === ".") board[i][c] = "c";
      else if (val === "S") return true;
      else if (val === "C" || val === "W") break;
    }
    for (let i = r - 1;; i--) {
      const val = board[i][c];
      if (val === ".") board[i][c] = "c";
      else if (val === "S") return true;
      else if (val === "C" || val === "W") break;
    }
    for (let i = c + 1;; i++) {
      const val = board[r][i];
      if (val === ".") board[r][i] = "c";
      else if (val === "S") return true;
      else if (val === "C" || val === "W") break;
    }
    for (let i = c - 1;; i--) {
      const val = board[r][i];
      if (val === ".") board[r][i] = "c";
      else if (val === "S") return true;
      else if (val === "C" || val === "W") break;
    }

    return false;
  }

  const MOVES: [number, number][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const exitSteps = [];
  let [startRows, startCols] = [0, 0];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const val = board[i][j];
      if (val === "C") {
        if (_resolveCamera(i, j)) {
          for (let k = 0; k < rows; k++) {
            for (let l = 0; l < cols; l++) {
              if (board[k][l] === "c" || board[k][l] === ".") {
                exitSteps.push(-1);
              }
            }
          }
          return exitSteps;
        }
      } else if (val === "S") {
        startRows = i;
        startCols = j;
      }
    }
  }

  const queue: [number, number, number][] = [[startRows, startCols, 0]];
  const dists: number[][] = Array.from(new Array(rows), () =>
    new Array(cols).fill(0)
  );

  while (0 < queue.length) {
    const [_rows, _cols, steps] = queue.shift()!;
    if (board[_rows][_cols] === "." || board[_rows][_cols] === "S") {
      MOVES.forEach(move => {
        const [i, j] = move;
        let nr = _rows + i;
        let nc = _cols + j;

        while (true) {
          if (dists[nr][nc] !== 0) break;
          if (
            board[nr][nc] === "W" ||
            board[nr][nc] === "C" ||
            board[nr][nc] === "c"
          ) {
            break;
          } else if (board[nr][nc] === "U") {
            dists[nr][nc] = -1;
            nr--;
          } else if (board[nr][nc] === "D") {
            dists[nr][nc] = -1;
            nr++;
          } else if (board[nr][nc] === "L") {
            dists[nr][nc] = -1;
            nc--;
          } else if (board[nr][nc] === "R") {
            dists[nr][nc] = -1;
            nc++;
          } else {
            dists[nr][nc] = steps + 1;
            queue.push([nr, nc, steps + 1]);
            break;
          }
        }
      });
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "c" || board[i][j] === ".") {
        if (dists[i][j] !== 0) {
          exitSteps.push(dists[i][j]);
        } else {
          exitSteps.push(-1);
        }
      }
    }
  }

  return exitSteps;
}

describe("RoboThieves", () => {
  test("#1", () => {
    const ans = RoboThieves(4, 5, [
      ["W", "W", "W", "W", "W"],
      ["W", ".", "W", ".", "W"],
      ["W", "W", "S", ".", "W"],
      ["W", "W", "W", "W", "W"]
    ]);

    expect(ans.sort((a, b) => a - b)).toEqual([-1, 1, 2]);
  });
  test("#2", () => {
    const ans = RoboThieves(5, 7, [
      ["W", "W", "W", "W", "W", "W", "W"],
      ["W", "D", ".", "L", ".", "R", "W"],
      ["W", ".", "W", "C", "U", ".", "W"],
      ["W", "W", "W", ".", "S", ".", "W"],
      ["W", "W", "W", "W", "W", "W", "W"]
    ]);
    expect(ans.sort((a, b) => a - b)).toEqual([-1, -1, 1, 1, 2, 3]);
  });
});
