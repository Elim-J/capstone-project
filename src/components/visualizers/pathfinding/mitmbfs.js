export function mitmbfs(grid) {
  //grid must be a rectangle
  let rows = grid.length;
  let cols = grid[0].length;
  let foundStartingPos = false;
  let startPos;
  let queue = [];
  let visitedNodes = [];
  let blockNodes = [];
  let endNodes = [];

  try {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (foundStartingPos && grid[i][j].isStart) {
          throw "Multiple starting positions";
        } else if (grid[i][j].isStart) {
          foundStartingPos = true;
          startPos = { row: i, column: j, prevNode: null };
          grid[i][j].prevNode = null;
        } else if (grid[i][j].isEnd) {
          endNodes.push({ row: i, column: j, prevNode: null });
          grid[i][j].prevNode = null;
        }
      }
    }
    if (!foundStartingPos) {
      throw "No starting position";
    }
  } catch (E) {
    return E;
  }
  let vid = [
    generateFrame(
      grid,
      rows,
      cols,
      null,
      "Starting meet-in-the-middle bfs algorithm...",
      []
    ),
  ];
  grid[startPos.row][startPos.column].isDiscovered = true;
  grid[startPos.row][startPos.column].fromStart = true;
  queue.push(startPos);
  endNodes.forEach((endNode) => {
    grid[endNode.row][endNode.column].isDiscovered = true;
    grid[endNode.row][endNode.column].fromEnd = true;
    queue.push(endNode);
  });
  let numberOfNodes = 1;
  while (queue.length > 0) {
    ++numberOfNodes;
    const searchNode = queue.shift();
    grid[searchNode.row][searchNode.column].isExplored = true;
    vid.push(
      generateFrame(grid, rows, cols, null, "Removed node from queue", [])
    );
    let path = findPath(grid, searchNode, rows, cols);
    if (path) {
      console.log(path);
      for (let i = 1; i < path.length; i++) {
        let currentPath = path.slice(0, i);
        vid.push(
          generateFrame(grid, rows, cols, currentPath, "Returning path", [])
        );
      }
      return vid;
    }
    if (
      //Search Up
      searchNode.row - 1 >= 0 &&
      !grid[searchNode.row - 1][searchNode.column].isBlocked &&
      !grid[searchNode.row - 1][searchNode.column].isDiscovered
    ) {
      grid[searchNode.row - 1][searchNode.column].isDiscovered = true;
      grid[searchNode.row - 1][searchNode.column].prevNode =
        grid[searchNode.row][searchNode.column];
      if (grid[searchNode.row][searchNode.column].fromStart) {
        grid[searchNode.row - 1][searchNode.column].fromStart = true;
      } else {
        grid[searchNode.row - 1][searchNode.column].fromEnd = true;
      }
      queue.push({
        row: searchNode.row - 1,
        column: searchNode.column,
        prevNode: searchNode,
      });
      vid.push(
        generateFrame(grid, rows, cols, null, "Visiting node above", [])
      );
    }
    if (
      //Search Left
      searchNode.column - 1 >= 0 &&
      !grid[searchNode.row][searchNode.column - 1].isBlocked &&
      !grid[searchNode.row][searchNode.column - 1].isDiscovered
    ) {
      grid[searchNode.row][searchNode.column - 1].isDiscovered = true;
      grid[searchNode.row][searchNode.column - 1].prevNode =
        grid[searchNode.row][searchNode.column];
      if (grid[searchNode.row][searchNode.column].fromStart) {
        grid[searchNode.row][searchNode.column - 1].fromStart = true;
      } else {
        grid[searchNode.row][searchNode.column - 1].fromEnd = true;
      }
      queue.push({
        row: searchNode.row,
        column: searchNode.column - 1,
        prevNode: searchNode,
      });
      vid.push(
        generateFrame(grid, rows, cols, null, "Visiting node to the left", [])
      );
    }
    if (
      //Search Down
      searchNode.row + 1 < rows &&
      !grid[searchNode.row + 1][searchNode.column].isBlocked &&
      !grid[searchNode.row + 1][searchNode.column].isDiscovered
    ) {
      grid[searchNode.row + 1][searchNode.column].isDiscovered = true;
      grid[searchNode.row + 1][searchNode.column].prevNode =
        grid[searchNode.row][searchNode.column];
      if (grid[searchNode.row][searchNode.column].fromStart) {
        grid[searchNode.row + 1][searchNode.column].fromStart = true;
      } else {
        grid[searchNode.row + 1][searchNode.column].fromEnd = true;
      }

      queue.push({
        row: searchNode.row + 1,
        column: searchNode.column,
        prevNode: searchNode,
      });
      vid.push(
        generateFrame(grid, rows, cols, null, "Visiting node below", [])
      );
    }
    if (
      //Search Right
      searchNode.column + 1 < cols &&
      !grid[searchNode.row][searchNode.column + 1].isBlocked &&
      !grid[searchNode.row][searchNode.column + 1].isDiscovered
    ) {
      grid[searchNode.row][searchNode.column + 1].isDiscovered = true;
      grid[searchNode.row][searchNode.column + 1].prevNode =
        grid[searchNode.row][searchNode.column];
      if (grid[searchNode.row][searchNode.column].fromStart) {
        grid[searchNode.row][searchNode.column + 1].fromStart = true;
      } else {
        grid[searchNode.row][searchNode.column + 1].fromEnd = true;
      }
      queue.push({
        row: searchNode.row,
        column: searchNode.column + 1,
        prevNode: searchNode,
      });
      vid.push(
        generateFrame(grid, rows, cols, null, "Visiting node to the right", [])
      );
    }
  }
  console.log("Finished after searching " + numberOfNodes);
  return vid;
}

function findPath(grid, searchNode, rows, cols) {
  let path = null;
  //Search Up Path Connect???
  if (
    searchNode.row - 1 >= 0 &&
    ((grid[searchNode.row][searchNode.column].fromStart &&
      grid[searchNode.row - 1][searchNode.column].fromEnd) ||
      (grid[searchNode.row][searchNode.column].fromEnd &&
        grid[searchNode.row - 1][searchNode.column].fromStart))
  ) {
    path = calcPath(
      grid[searchNode.row][searchNode.column],
      grid[searchNode.row - 1][searchNode.column]
    );
  }

  //Search Down Path Connect???
  else if (
    searchNode.row + 1 < rows &&
    ((grid[searchNode.row][searchNode.column].fromStart &&
      grid[searchNode.row + 1][searchNode.column].fromEnd) ||
      (grid[searchNode.row][searchNode.column].fromEnd &&
        grid[searchNode.row + 1][searchNode.column].fromStart))
  ) {
    path = calcPath(
      grid[searchNode.row][searchNode.column],
      grid[searchNode.row + 1][searchNode.column]
    );
    return path;
  }

  //Search Left Path Connect???
  else if (
    searchNode.column - 1 >= 0 &&
    ((grid[searchNode.row][searchNode.column].fromStart &&
      grid[searchNode.row][searchNode.column - 1].fromEnd) ||
      (grid[searchNode.row][searchNode.column].fromEnd &&
        grid[searchNode.row][searchNode.column - 1].fromStart))
  ) {
    path = calcPath(
      grid[searchNode.row][searchNode.column],
      grid[searchNode.row][searchNode.column - 1]
    );
    return path;
  }

  //Search Right Path Connect???
  else if (
    searchNode.column + 1 < cols &&
    ((grid[searchNode.row][searchNode.column].fromStart &&
      grid[searchNode.row][searchNode.column + 1].fromEnd) ||
      (grid[searchNode.row][searchNode.column].fromEnd &&
        grid[searchNode.row][searchNode.column + 1].fromStart))
  ) {
    path = calcPath(
      grid[searchNode.row][searchNode.column],
      grid[searchNode.row][searchNode.column + 1]
    );
    return path;
  } else return null;
}

function calcPath(node1, node2) {
  let startPath = [];
  let endPath = [];
  let currentStartNode;
  let currentEndNode;
  if(node1.fromStart)
  {
    currentStartNode = node1;
    currentEndNode = node2;
  }
  else
  {
    currentStartNode = node2;
    currentEndNode = node1;
  }

  console.log(currentStartNode);
  console.log(currentEndNode);
  while (currentStartNode) {
    startPath.push(currentStartNode);
    currentStartNode = currentStartNode.prevNode;
  }
  startPath.reverse();
  while (currentEndNode) {
    endPath.push(currentEndNode);
    currentEndNode = currentEndNode.prevNode;
  }
  endPath.forEach((thisNode) => {
    startPath.push(thisNode);
  });

  startPath = startPath.map((thisNode) => {
    return ({ row: thisNode.row, column: thisNode.col })
  })
  return startPath;
}

function generateFrame(grid, rows, cols, path, message, highlightCode) {
  let frame = {
    info: {
      rows: rows,
      cols: cols,
      message: message,
      highlightCode: highlightCode,
    },
    grid: [],
  };
  for (let i = 0; i < rows; i++) {
    let thisRow = [];
    for (let j = 0; j < cols; j++) {
      let isOnPath = false;
      if (path) {
        path.forEach((node) => {
          if (node.row == i && node.column == j) {
            isOnPath = true;
          }
        });
      }
      thisRow.push({
        row: i,
        col: j,
        isStart: grid[i][j].isStart,
        isEnd: grid[i][j].isEnd,
        isBlocked: grid[i][j].isBlocked,
        isDiscovered: grid[i][j].isDiscovered,
        isExplored: grid[i][j].isExplored,
        isPath: isOnPath,
      });
    }
    frame.grid.push(thisRow);
  }
  return frame;
}

function printFrame(frame) {
  for (let i = 1; i < frame.length; i++) {
    for (let j = 0; j < frame[i].length; j++) {
      if (frame[i][j].isStart) {
        process.stdout.write("S ");
      } else if (frame[i][j].isEnd) {
        process.stdout.write("E ");
      } else if (frame[i][j].isBlocked) {
        process.stdout.write("X ");
      } else if (frame[i][j].isExplored) {
        process.stdout.write("s ");
      } else {
        process.stdout.write("O ");
      }
    }
    console.log();
  }
}

function printVid(vid) {
  for (let i = 0; i < vid.length; i++) {
    printFrame(vid[i]);
    console.log();
  }
}

function generateRandomGrid(rows, cols, numberOfBlocks) {
  let rndGrid = [];
  for (let i = 0; i < rows; i++) {
    let rndRow = [];
    for (let j = 0; j < cols; j++) {
      rndRow.push({
        isStart: false,
        isEnd: false,
        isBlocked: false,
        isExplored: false,
      });
    }
    rndGrid.push(rndRow);
  }
  let thisRow = Math.floor(Math.random() * rows);
  let thisCol = Math.floor(Math.random() * cols);
  rndGrid[thisRow][thisCol].isStart = true;
  let setEnd = false;
  do {
    thisRow = Math.floor(Math.random() * rows);
    thisCol = Math.floor(Math.random() * cols);
    if (!rndGrid[thisRow][thisCol].isStart) {
      rndGrid[thisRow][thisCol].isEnd = true;
      setEnd = true;
    }
  } while (!setEnd);
  let placedBlocks = 0;
  while (placedBlocks < numberOfBlocks) {
    thisRow = Math.floor(Math.random() * rows);
    thisCol = Math.floor(Math.random() * cols);
    if (
      !rndGrid[thisRow][thisCol].isStart &&
      !rndGrid[thisRow][thisCol].isEnd &&
      !rndGrid[thisRow][thisCol].isBlocked
    ) {
      rndGrid[thisRow][thisCol].isBlocked = true;
      ++placedBlocks;
    }
  }
  //printFrame(generateFrame(rndGrid, rows, cols))
  return rndGrid;
}
// for (let i = 0; i < 1000; i++) {
//   console.log("i: " + i);
//   let blocks;
//   let rows = Math.floor(Math.random() * 50) + 3;
//   let cols = Math.floor(Math.random() * 50) + 3;

//   do {
//     blocks = Math.floor(Math.random() * 50);
//   } while (blocks > rows * cols - 2);

//   let grid = generateRandomGrid(rows, cols, blocks);
//   console.log(
//     "Rows: " +
//       rows +
//       ", cols:" +
//       cols +
//       " \nTotal nodes in grid: \n" +
//       rows * cols
//   );
//   let vid = mitmbfs(grid);
// }

//for (let i = 0; i < 10000; i++){
// let grid = [
//   [
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: true, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//   ],
//   [
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//   ],
//   [
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: true, isBlocked: false, isExplored: false },
//   ],
// ];
// printFrame(generateFrame(grid, 3, 3));
// let vid = mitmbfs(grid);

// let grid = [[{ isStart: true, isEnd: false, isBlocked: false, isExplored: false }],[{ isStart: false, isEnd: true, isBlocked: false, isExplored: false }]]

// console.log(mitmbfs(grid)[2][0].path);
