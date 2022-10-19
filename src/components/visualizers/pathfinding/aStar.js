function aStar(grid) {
    console.log('in astar');
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
    queue.push(startPos);
    while (queue.length > 0) {
      let lowestHeuristicVal = queue[0].heuristic;
      let lowestHeuristicPos = 0;
      queue.forEach((node, i) => {
        if (node.heuristic < lowestHeuristicVal){
          lowestHeuristicVal = node.heursitic;
          lowestHeuristicPos = i;
        }
      })
      let searchNode = queue.splice(lowestHeuristicPos, 1);
      searchNode = searchNode[0];
      if (grid[searchNode.row][searchNode.column].isEnd) {
        grid[searchNode.row][searchNode.column].isExplored = true;
        let path = [];
        let currentNode = searchNode;
        while (currentNode != null) {
          path.push({ row: currentNode.row, column: currentNode.column });
          currentNode = currentNode.prevNode;
        }
        path.reverse();
        vid.push(generateFrame(grid, rows, cols, path, 'Returning path', []));
        return vid;
      } else {
        if (
          //Search Up
          searchNode.row - 1 >= 0 &&
          !grid[searchNode.row - 1][searchNode.column].isBlocked &&
          !grid[searchNode.row - 1][searchNode.column].isExplored
        ) {
          grid[searchNode.row - 1][searchNode.column].isExplored = true;
          queue.push({
            row: searchNode.row - 1,
            column: searchNode.column,
            prevNode: searchNode,
            heuristic: findHeuristic(searchNode.row - 1, searchNode.column, endNodes, 'Manhattan')
          });
          vid.push(generateFrame(grid, rows, cols, null, 'Visiting node above', []));
        }
        if (
          //Search Left
          searchNode.column - 1 >= 0 &&
          !grid[searchNode.row][searchNode.column - 1].isBlocked &&
          !grid[searchNode.row][searchNode.column - 1].isExplored
        ) {
          grid[searchNode.row][searchNode.column - 1].isExplored = true;
          queue.push({
            row: searchNode.row,
            column: searchNode.column - 1,
            prevNode: searchNode,
            heuristic: findHeuristic(searchNode.row, searchNode.column - 1, endNodes, 'Manhattan')
          });
          vid.push(generateFrame(grid, rows, cols, null, 'Visiting node to the left', []));
        }
        if (
          //Search Down
          searchNode.row + 1 < rows &&
          !grid[searchNode.row + 1][searchNode.column].isBlocked &&
          !grid[searchNode.row + 1][searchNode.column].isExplored
        ) {
          grid[searchNode.row + 1][searchNode.column].isExplored = true;
          queue.push({
            row: searchNode.row + 1,
            column: searchNode.column,
            prevNode: searchNode,
            heuristic: findHeuristic(searchNode.row + 1, searchNode.column, endNodes, 'Manhattan')
          });
          vid.push(generateFrame(grid, rows, cols, null, 'Visiting node below', []));
        }
        if (
          //Search Right
          searchNode.column + 1 < cols &&
          !grid[searchNode.row][searchNode.column + 1].isBlocked &&
          !grid[searchNode.row][searchNode.column + 1].isExplored
        ) {
          grid[searchNode.row][searchNode.column + 1].isExplored = true;
          queue.push({
            row: searchNode.row,
            column: searchNode.column + 1,
            prevNode: searchNode,
            heuristic: findHeuristic(searchNode.row, searchNode.column + 1, endNodes, 'Manhattan')
          });
          vid.push(generateFrame(grid, rows, cols, null, 'Visiting node to the right', []));
        }
      }
    }
    return vid;
  }
  function generateFrame(grid, rows, cols, path, message, highlightCode) {
    let frame = {info: {rows: rows, cols: cols, path: path, message: message, highlightCode: highlightCode}, grid: []};
    for (let i = 0; i < rows; i++) {
      let thisRow = [];
      for (let j = 0; j < cols; j++) {
        thisRow.push({
          row: i,
          col: j,
          isStart: grid[i][j].isStart,
          isEnd: grid[i][j].isEnd,
          isBlocked: grid[i][j].isBlocked,
          isExplored: grid[i][j].isExplored,
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
          process.stdout.write("B ");
        } else if (frame[i][j].isEnd) {
          process.stdout.write("E ");
        } else if (frame[i][j].isBlocked) {
          process.stdout.write("X ");
        } else if (frame[i][j].isExplored) {
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
  if (type == 'Manhattan'){
    endNodes.forEach(node => {
      let thisHeuristic = Math.abs(node.row - x) + Math.abs(node.column - y);
      if (!lowestHeuristicSoFar || lowestHeuristicSoFar > thisHeuristic){
        lowestHeuristicSoFar = thisHeuristic;
      }
    })
  } else if (type == 'Euclidean'){
    endNodes.forEach(node => {
      let thisHeuristic = Math.sqrt(Math.pow(node.row - x, 2) + Math.pow(node.column - y, 2));
      if (!lowestHeuristicSoFar || lowestHeuristicSoFar > thisHeuristic){
        lowestHeuristicSoFar = thisHeuristic;
      }
    })
  }
  if (!lowestHeuristicSoFar){
    lowestHeuristicSoFar = 1; //no ending node
  }
  return lowestHeuristicSoFar;
}


let grid = [
  [
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
  ],
  [
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
  ],
  [
    { isStart: true, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: false, isExplored: false },
    { isStart: false, isEnd: false, isBlocked: true, isExplored: false },
    { isStart: false, isEnd: true, isBlocked: false, isExplored: false },
  ]
];


export default aStar;