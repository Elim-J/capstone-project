export function bfs(grid) {
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
        }
      }
    }
    if (!foundStartingPos) {
      throw "No starting position";
    }
  } catch (E) {
    return E;
  }
  let vid = [generateFrame(grid, rows, cols, null, 'Starting bfs algorithm...', [], [0, 1, 2, 3])];
  grid[startPos.row][startPos.column].isDiscovered = true;
  queue.push(startPos);
  while (queue.length > 0) {
    let searchNode;
    let endPos;
    queue.forEach((node, i) => {
      if (grid[node.row][node.column].isEnd){
        endPos = i;
      }
    })
    if (endPos){
      searchNode = queue.splice(endPos, 1);
      searchNode = searchNode[0];
    }
    else {
      searchNode = queue.shift();
    }
    grid[searchNode.row][searchNode.column].isExplored = true;
    vid.push(generateFrame(grid, rows, cols, null, 'Removed node from queue', [], [4]));
    if (grid[searchNode.row][searchNode.column].isEnd) {
      let path = [];
      let currentNode = searchNode;
      while (currentNode != null) {
        path.push({ row: currentNode.row, column: currentNode.column });
        currentNode = currentNode.prevNode;
      }
      path.reverse();
      for (let i = 1; i < path.length; i++){
        let currentPath = path.slice(0, i);
        vid.push(generateFrame(grid, rows, cols, currentPath, 'Returning path', [], [5, 6, 7, 8, 9, 10, 11, 12]));
      }
      return vid;
    } else {
      if (
        //Search Up
        searchNode.row - 1 >= 0 &&
        !grid[searchNode.row - 1][searchNode.column].isBlocked &&
        !grid[searchNode.row - 1][searchNode.column].isDiscovered
      ) {
        grid[searchNode.row - 1][searchNode.column].isDiscovered = true;
        queue.push({
          row: searchNode.row - 1,
          column: searchNode.column,
          prevNode: searchNode,
        });
        vid.push(generateFrame(grid, rows, cols, null, 'Visiting node above', [], [13, 14]));
      }
      if (
        //Search Left
        searchNode.column - 1 >= 0 &&
        !grid[searchNode.row][searchNode.column - 1].isBlocked &&
        !grid[searchNode.row][searchNode.column - 1].isDiscovered
      ) {
        grid[searchNode.row][searchNode.column - 1].isDiscovered = true;
        queue.push({
          row: searchNode.row,
          column: searchNode.column - 1,
          prevNode: searchNode,
        });
        vid.push(generateFrame(grid, rows, cols, null, 'Visiting node to the left', [], [15, 16]));
      }
      if (
        //Search Down
        searchNode.row + 1 < rows &&
        !grid[searchNode.row + 1][searchNode.column].isBlocked &&
        !grid[searchNode.row + 1][searchNode.column].isDiscovered
      ) {
        grid[searchNode.row + 1][searchNode.column].isDiscovered = true;
        queue.push({
          row: searchNode.row + 1,
          column: searchNode.column,
          prevNode: searchNode,
        });
        vid.push(generateFrame(grid, rows, cols, null, 'Visiting node below', [], [17, 18]));
      }
      if (
        //Search Right
        searchNode.column + 1 < cols &&
        !grid[searchNode.row][searchNode.column + 1].isBlocked &&
        !grid[searchNode.row][searchNode.column + 1].isDiscovered
      ) {
        grid[searchNode.row][searchNode.column + 1].isDiscovered = true;
        queue.push({
          row: searchNode.row,
          column: searchNode.column + 1,
          prevNode: searchNode,
        });
        vid.push(generateFrame(grid, rows, cols, null, 'Visiting node to the right', [], [19, 20]));
      }
    }
  }
  return vid;
}

function generateFrame(grid, rows, cols, path, message, highlightCode) {
  let frame = {info: {rows: rows, cols: cols, message: message, highlightCode: highlightCode}, grid: []};
  for (let i = 0; i < rows; i++) {
    let thisRow = [];
    for (let j = 0; j < cols; j++) {
      let isOnPath = false;
      if (path){
        path.forEach(node => {
          if (node.row == i && node.column == j){
            isOnPath = true;
          }
        })
      }
      thisRow.push({
        row: i,
        col: j,
        isStart: grid[i][j].isStart,
        isEnd: grid[i][j].isEnd,
        isBlocked: grid[i][j].isBlocked,
        isDiscovered: grid[i][j].isDiscovered,
        isExplored: grid[i][j].isExplored,
        isPath: isOnPath 
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
//   let vid = bfs(grid);
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
// let vid = bfs(grid);

// let grid = [[{ isStart: true, isEnd: false, isBlocked: false, isExplored: false }],[{ isStart: false, isEnd: true, isBlocked: false, isExplored: false }]]

// console.log(bfs(grid)[2][0].path);