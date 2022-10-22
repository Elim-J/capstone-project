function aStar(g) {
    //grid must be a rectangle
    let grid = structuredClone(g);
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
            startPos = { row: i, column: j, prevNode: null};
          } else if (grid[i][j].isEnd) {
            endNodes.push({ row: i, column: j, prevNode: null, heuristic: 0})
          }
        }
      }
      if (!foundStartingPos) {
        throw "No starting position";
      }
    } catch (E) {
      return E;
    }

    startPos.heuristic = findHeuristic(startPos.row, startPos.column, endNodes, 'Manhattan');
    let vid = [generateFrame(grid, rows, cols, null, 'Starting A* algorithm...', [])];
    grid[startPos.row][startPos.column].isExplored = true;
    grid[startPos.row][startPos.column].isDiscovered = true;
    queue.push(startPos);
    while (queue.length > 0) {
      shuffleArray(queue);
      let lowestHeuristicVal = queue[0].heuristic;
      let lowestHeuristicPos = 0;
      queue.forEach((node, i) => {
        if (node.heuristic < lowestHeuristicVal){
          lowestHeuristicVal = node.heuristic;
          lowestHeuristicPos = i;
        }
      })
      let searchNode = queue.splice(lowestHeuristicPos, 1);
      delete searchNode.heuristic;
      searchNode = searchNode[0];
      searchNode.isExplored = true;
      grid[searchNode.row][searchNode.column].isExplored = true;
      vid.push(generateFrame(grid, rows, cols, null, 'Chose node with lowest heuristic', []));
      delete grid[searchNode.row][searchNode.column].heuristic;
      if (grid[searchNode.row][searchNode.column].isEnd) {
        let path = [];
        let currentNode = searchNode;
        while (currentNode != null) {
          path.push({ row: currentNode.row, column: currentNode.column });
          currentNode = currentNode.prevNode;
        }
        path.reverse();
        for (let i = 0; i < path.length; i++){
          let currentPath = path.slice(0, i);
          vid.push(generateFrame(grid, rows, cols, currentPath, 'Returning path', []));
        }
        return vid;
      } else {
        if (
          //Search Up
          searchNode.row - 1 >= 0 &&
          !grid[searchNode.row - 1][searchNode.column].isBlocked &&
          !grid[searchNode.row - 1][searchNode.column].isDiscovered
        ) {
          let heuristicVal = findHeuristic(searchNode.row - 1, searchNode.column, endNodes, 'Manhattan');
          grid[searchNode.row - 1][searchNode.column].isDiscovered = true;
          grid[searchNode.row - 1][searchNode.column].heuristic = heuristicVal;
          queue.push({
            row: searchNode.row - 1,
            column: searchNode.column,
            prevNode: searchNode,
            heuristic: heuristicVal
          });
          vid.push(generateFrame(grid, rows, cols, null, 'Visiting node above', []));
        }
        if (
          //Search Left
          searchNode.column - 1 >= 0 &&
          !grid[searchNode.row][searchNode.column - 1].isBlocked &&
          !grid[searchNode.row][searchNode.column - 1].isDiscovered
        ) {
          let heuristicVal = findHeuristic(searchNode.row, searchNode.column - 1, endNodes, 'Manhattan');
          grid[searchNode.row][searchNode.column - 1].isDiscovered = true;
          grid[searchNode.row][searchNode.column - 1].heuristic = heuristicVal;
          queue.push({
            row: searchNode.row,
            column: searchNode.column - 1,
            prevNode: searchNode,
            heuristic: heuristicVal
          });
          vid.push(generateFrame(grid, rows, cols, null, 'Visiting node to the left', []));
        }
        if (
          //Search Down
          searchNode.row + 1 < rows &&
          !grid[searchNode.row + 1][searchNode.column].isBlocked &&
          !grid[searchNode.row + 1][searchNode.column].isDiscovered
        ) {
          let heuristicVal = findHeuristic(searchNode.row + 1, searchNode.column, endNodes, 'Manhattan');
          grid[searchNode.row + 1][searchNode.column].isDiscovered = true;
          grid[searchNode.row + 1][searchNode.column].heuristic = heuristicVal;
          queue.push({
            row: searchNode.row + 1,
            column: searchNode.column,
            prevNode: searchNode,
            heuristic: heuristicVal
          });
          vid.push(generateFrame(grid, rows, cols, null, 'Visiting node below', []));
        }
        if (
          //Search Right
          searchNode.column + 1 < cols &&
          !grid[searchNode.row][searchNode.column + 1].isBlocked &&
          !grid[searchNode.row][searchNode.column + 1].isDiscovered
        ) {
          let heuristicVal = findHeuristic(searchNode.row, searchNode.column + 1, endNodes, 'Manhattan');
          grid[searchNode.row][searchNode.column + 1].isDiscovered = true;
          grid[searchNode.row][searchNode.column + 1].heuristic = heuristicVal;
          queue.push({
            row: searchNode.row,
            column: searchNode.column + 1,
            prevNode: searchNode,
            heuristic: heuristicVal
          });
          vid.push(generateFrame(grid, rows, cols, null, 'Visiting node to the right', []));
        }
      }
    }
    vid.push(generateFrame(grid, rows, cols, null, 'Failed to find path', []))
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
          heuristic: grid[i][j].heuristic,
          isPath: isOnPath 
        });
      }
      frame.grid.push(thisRow);
    }
    return frame;
  }
  
  function printFrame(frame) {
    for (let i = 0; i < frame.grid.length; i++) {
      for (let j = 0; j < frame.grid[i].length; j++) {
        if (frame.grid[i][j].isStart) {
          process.stdout.write("B ");
        } else if (frame.grid[i][j].isEnd) {
          process.stdout.write("E ");
        } else if (frame.grid[i][j].isBlocked) {
          process.stdout.write("X ");
        } else if (frame.grid[i][j].isExplored) {
          process.stdout.write("v ");
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

function findHeuristic(x, y, endNodes, type){
  let lowestHeuristicSoFar;
  endNodes.forEach(endNode => {
    if (endNode.row == x && endNode.column == y){
      lowestHeuristicSoFar = 0;
    }
  })
  if (type == 'Manhattan' && lowestHeuristicSoFar != 0){
    endNodes.forEach(node => {
      let thisHeuristic = Math.abs(node.row - x) + Math.abs(node.column - y);
      if (!lowestHeuristicSoFar || lowestHeuristicSoFar > thisHeuristic){
        lowestHeuristicSoFar = thisHeuristic;
      }
    })
  } else if (type == 'Euclidean' && lowestHeuristicSoFar != 0){
    endNodes.forEach(node => {
      let thisHeuristic = Math.sqrt(Math.pow(node.row - x, 2) + Math.pow(node.column - y, 2));
      if (!lowestHeuristicSoFar || lowestHeuristicSoFar > thisHeuristic){
        lowestHeuristicSoFar = thisHeuristic;
      }
    })
  }
  if (!lowestHeuristicSoFar && lowestHeuristicSoFar != 0){
    lowestHeuristicSoFar = 1; //no ending node
  }
  return lowestHeuristicSoFar;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

// let grid = [
//   [
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//   ],
//   [
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//   ],
//   [
//     { isStart: true, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
//     { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
//     { isStart: false, isEnd: true, isBlocked: false, isExplored: false },
//   ]
// ];

// function generateStartingGrid(rows, cols){
//   let grid = [];
//   for (let i = 0; i < rows; i++){
//     let row = [];
//     for (let j = 0; j < cols; j++){
//       row.push({ isStart: false, isEnd: false, isBlocked: false, isExplored: false });
//     }
//     grid.push(row);
//   }
//   grid[0][0].isStart = true;
//   grid[rows - 1][cols - 1].isEnd = true;
//   return grid;
// }

// console.log(JSON.stringify(generateStartingGrid(15, 25)));

export default aStar;