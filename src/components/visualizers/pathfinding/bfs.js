function bfs(grid){ //grid must be a rectangle
    let gridHeight = grid.length;
    let gridWidth = grid[0].length;
    let foundStartingPos = false;
    let startPos;
    let queue = [];
    let vid = [generateFrame(grid, gridHeight, gridWidth)];

    try {
        for (let i = 0; i < gridHeight; i++){
            for (let j = 0; j < gridWidth; j++){
                if (foundStartingPos && grid[i][j].isStart){
                    throw 'Multiple starting positions';
                }
                else if (grid[i][j].isStart){
                    foundStartingPos = true;
                    startPos = {x: i, y: j, prevNode: null};
                }
            }
        }
        if (!foundStartingPos){
            throw 'No starting position';
        }
    } catch (E){
        return E;
    }
    queue.push(startPos);
    while(queue.length > 0){
        const searchNode = queue.shift();
        if (grid[searchNode.x][searchNode.y].isEnd){
            grid[searchNode.x][searchNode.y].isExplored = true;
            let path = [{x: searchNode.x, y: searchNode.y}];
            let currentNode = searchNode;
            vid.push(generateFrame(grid, gridHeight, gridWidth));
            while (currentNode != null) {
                path.push({x: currentNode.x, y: currentNode.y});
                currentNode = currentNode.prevNode;
            }
            path.reverse();
            console.log(path);
            return vid;
        } else {
            if(searchNode.x - 1 >= 0 && !grid[searchNode.x - 1][searchNode.y].isBlocked && !grid[searchNode.x - 1][searchNode.y].isExplored){
                queue.push({x: searchNode.x - 1, y: searchNode.y, prevNode: searchNode});
            }
            if(searchNode.x + 1 < gridWidth && !grid[searchNode.x + 1][searchNode.y].isBlocked && !grid[searchNode.x + 1][searchNode.y].isExplored){
                queue.push({x: searchNode.x + 1, y: searchNode.y, prevNode: searchNode});
            }
            if(searchNode.y - 1 >= 0 && !grid[searchNode.x][searchNode.y - 1].isBlocked && !grid[searchNode.x][searchNode.y - 1].isExplored){
                queue.push({x: searchNode.x, y: searchNode.y - 1, prevNode: searchNode});
            }
            if(searchNode.y + 1 < gridHeight && !grid[searchNode.x][searchNode.y + 1].isBlocked && !grid[searchNode.x][searchNode.y + 1].isExplored){
                queue.push({x: searchNode.x, y: searchNode.y + 1, prevNode: searchNode});
            }
        }
        grid[searchNode.x][searchNode.y].isExplored = true;
        vid.push(generateFrame(grid, gridHeight, gridWidth));
    }

    return vid;
}
function generateFrame(grid, gridHeight, gridWidth){
    let frame = [{}];
    for (let i = 0; i < gridHeight; i++){
        let thisRow = [];
        for (let j = 0; j < gridWidth; j++){
            thisRow.push({isStart: grid[i][j].isStart, isEnd: grid[i][j].isEnd, isBlocked: grid[i][j].isBlocked, isExplored: grid[i][j].isExplored})
        }
        frame.push(thisRow);
    }
    return frame;
}

function printFrame(frame){
    for (let i = 1; i < frame.length; i++){
        for (let j = 0; j < frame[i].length; j++){
            if (frame[i][j].isStart){
                process.stdout.write('S ');
            }
            else if (frame[i][j].isEnd){
                process.stdout.write('E ');
            }
            else if (frame[i][j].isBlocked){
                process.stdout.write('X ');
            }
            else if (frame[i][j].isExplored){
                process.stdout.write('s ');
            }
            else {
                process.stdout.write('O ');
            }
        }
        console.log();
    }
}

function printVid(vid){
    for (let i = 0; i < vid.length; i++){
        printFrame(vid[i]);
        console.log();
    }
}

let testGrid = [[{isStart: true, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: true, isBlocked: false, isExplored: false}]];

let testGridBlocked = [[{isStart: true, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: true, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: true, isBlocked: false, isExplored: false}]];

let testGridBlockedFully = [[{isStart: true, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: true, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: true, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false}],
[{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: false, isBlocked: false, isExplored: false},{isStart: false, isEnd: true, isBlocked: false, isExplored: false}]];

printVid(bfs(testGridBlocked, 4, 4));