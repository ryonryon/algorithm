import QuickSort from "../sorting/QuickSort";

function RoboThieves(row: number, col: number, board: string[][]): number[] {
  function _getNextPaths(y: number, x: number, step: number): number[][] {
    const paths = [];
    if (0 < y && went[y - 1][x] === false) paths.push([y - 1, x, step + 1]);
    if (0 < x && went[y][x - 1] === false) paths.push([y, x - 1, step + 1]);
    if (y < row - 1 && went[y + 1][x] === false)
      paths.push([y + 1, x, step + 1]);
    if (x < col - 1 && went[y][x + 1] === false)
      paths.push([y, x + 1, step + 1]);
    return paths;
  }

  function _scanFloor(): [boolean[][], number[][]] {
    const floorMap: boolean[][] = [];
    let start: number[] = [];

    for (let i = 0; i < row; i++) {
      floorMap.push([]);
      for (let j = 0; j < col; j++) {
        if (board[i][j] === "W") {
          floorMap[i][j] = true;
        } else if (board[i][j] === "C") {
          floorMap[i][j] = true;
          // TODO Camera line should be true
        } else if (board[i][j] === "L") {
          // TODO Define conveyor
        } else if (board[i][j] === "S") {
          start = [i, j, 0];
          floorMap[i][j] = false;
        } else {
          floorMap[i][j] = false;
        }
      }
    }

    return [floorMap, [start]];
  }

  const exitSteps = [];
  const [went, queue] = _scanFloor();

  while (0 < queue.length) {
    const position: number[] = queue.shift()!;
    went[position[0]][position[1]] = true;
    if (board[position[0]][position[1]] === ".") exitSteps.push(position[2]);
    const nextPaths = _getNextPaths(position[0], position[1], position[2]);
    nextPaths.forEach(element => {
      queue.push(element);
    });
  }

  went.forEach(row => {
    row.forEach(col => {
      if (col === false) exitSteps.push(-1);
    });
  });

  return exitSteps;
}

describe("RoboThieves", () => {
  test("#1", () => {
    const ans = RoboThieves(4, 4, [
      ["W", "W", "W", "W", "W"],
      ["W", ".", "W", ".", "W"],
      ["W", "W", "S", ".", "W"],
      ["W", "W", "W", "W", "W"]
    ]);
    const sortedAns = QuickSort(ans);
    expect(sortedAns).toEqual([-1, 1, 2]);
  });
  test("#2", () => {
    const ans = RoboThieves(5, 7, [
      ["W", "W", "W", "W", "W", "W", "W"],
      ["W", "D", ".", "L", ".", "R", "W"],
      ["W", ".", "W", "C", "U", ".", "W"],
      ["W", "W", "W", ".", "S", ".", "W"],
      ["W", "W", "W", "W", "W", "W", "W"]
    ]);
    const sortedAns = QuickSort(ans);
    expect(sortedAns).toEqual([-1, -1, 1, 1, 2, 3]);
  });
});

// const emptyCells = new Map();

// for (let y = 1; y < rowLength - 1; ++y) {
//   for (let x = 1; x < colLength - 1; ++x) {
//     if (board[y][x] === ".") {
//       emptyCells.set(y * colLength + x, -1);
//     }
//   }
// }

// for (let y = 1; y < rowLength - 1; ++y) {
//   for (let x = 1; x < colLength - 1; ++x) {
//     if (board[y][x] === "C") {
//       for (let _x = x + 1; _x < colLength - 1; ++_x) {
//         if (board[y][_x] === "W") break;
//         if (board[y][_x] !== ".") continue;

//         board[y][_x] = "W";
//       }

//       for (let _x = x - 1; _x > 0; --_x) {
//         if (board[y][_x] === "W") break;
//         if (board[y][_x] !== ".") continue;

//         board[y][_x] = "W";
//       }

//       for (let _y = y + 1; _y < rowLength - 1; ++_y) {
//         if (board[_y][x] === "W") break;
//         if (board[_y][x] !== ".") continue;

//         board[_y][x] = "W";
//       }

//       for (let _y = y - 1; _y > 0; --_y) {
//         if (board[_y][x] === "W") break;
//         if (board[_y][x] !== ".") continue;

//         board[_y][x] = "W";
//       }
//     }
//   }
// }

// function heightOfTree(node) {
//   if (node === null) return 0;

//   return Math.min(heightOfTree(node.left), heightOfTree(node.right)) + 1;
// }
