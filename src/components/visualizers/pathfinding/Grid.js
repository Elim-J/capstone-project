import React, {useState, useEffect, useRef} from "react";
import Cell from "./Cell";
import "../../../css/Grid.css";
import GridToolbar from "./GridToolbar";
import {PathfindingAlgs, StartingGrid} from "../../../constants/PathfindingAlgs";
import aStar from "./aStar";
import PathfindActionBar from "./PathfindActionBar";


const Grid = () => {

    //These will have to be states when we want to adjust size
    const row = 15;
    const col = 25;

    let START_CELL_ROW = 0,
        START_CELL_COL = 0,
        END_CELL_ROW = row - 1,
        END_CELL_COL = col - 1;

    let startingVid = aStar(StartingGrid);

    const [grid, setGrid] = useState(startingVid[0].grid);
    const [startCell, setStart] = useState(null);
    const [alg, setAlg] = useState(PathfindingAlgs.Astar);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [vid, setVid] = useState(startingVid);
    const [isPaused, setIsPaused] = useState(true);
    const [speed, setSpeed] = useState(250); //ms

    const [editMode, setEditMode] = useState(false);

    //used as a lock
    const [isBusy, setIsBusy] = useState(false);

    //mouse events
    const [mouseClicked, setMouseClicked] = useState(false);
    const [endMove, setEndMove] = useState(false);
    const [startMove, setStartMove] = useState(false);    

    useEffect(() => {
        setGrid(createGrid);
        setIsPaused(true);
    }, []);

    const randomizeStartAndEnd = () => {
        START_CELL_ROW = Math.floor(Math.random() * row);
        START_CELL_COL = Math.floor(Math.random() * col);

        do {
            END_CELL_ROW = Math.floor(Math.random() * row);
            END_CELL_COL = Math.floor(Math.random() * col);
        } while(START_CELL_ROW === END_CELL_ROW && START_CELL_COL === END_CELL_COL);
        // console.log(START_CELL_ROW + ' ' + START_CELL_COL + ' ' + END_CELL_ROW + ' ' + END_CELL_COL);
    };

    const createCell = (row, col) => {

        return {
            row,
            col,
            isStart: row === START_CELL_ROW && col === START_CELL_COL,
            isEnd: row === END_CELL_ROW && col === END_CELL_COL,
            isBlocked : false,
            isExplored: false,
        };
    };

    const createGrid = () => {
        const g = [];
        for(let i = 0; i < row; i++){
            const r = [];
            for(let j = 0; j < col; j++){
                r.push(createCell(i, j));
            }
            g.push(r);
        }
        setStart(g[START_CELL_ROW][START_CELL_COL]);
        // setEnd(g[END_CELL_ROW][END_CELL_COL]);
        return g;
    };

    const randomizeGrid = () => {
        randomizeStartAndEnd();
        let g = createGrid();
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                if(!g[i][j].isStart && !g[i][j].isEnd)
                    g[i][j].isBlocked = Math.random() < .2 ? true : false;
            }
        }
        let rndVid = aStar(g);
        setVid(rndVid);
        setGrid(rndVid[0].grid);
        setCurrentFrame(0);
        console.log(JSON.stringify(rndVid[0].grid));
    };

    const clearGrid = () => {
        console.log('Clearing grid');
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                let n = grid[i][j];
                if(n.isBlocked)
                    n.isBlocked = !n.isBlocked;
            }
        }
        setGrid(grid.slice());
    };

    const searchHandler = (targetAlg) => {
        //TODO add isBusy state to check if search can be ran
        console.log('search handler targetAlg: ' + targetAlg);
        if(targetAlg == PathfindingAlgs.None){
            //send error?
        } else if (targetAlg == PathfindingAlgs.Astar){
            console.log('setting vid to astar');
            setVid(aStar(grid));
            setAlg(targetAlg);
        }
    };

    const gridWithNodes = (
        <div className="grid-with-nodes">
            {grid.map((row, i) => {
                return(
                    <div key={i} className="row-container">
                        {row.map((c, j) => {
                            const {isStart, isEnd, isBlocked, isExplored, heuristic, isDiscovered, isPath} = c;
                            return(
                                <Cell key={j} row={i} col={j} alg={alg} isStart={isStart} 
                                    isEnd={isEnd} isBlocked={isBlocked} isExplored={isExplored} 
                                    heuristic={heuristic}
                                    isDiscovered={isDiscovered}
                                    isPath={isPath}
                                    onMouseLeave={(r, co) => mouseLeaveHandler(r, co)}
                                    onMouseEnter={(r, co) => mouseEnterHandler(r, co)}
                                    onMouseDown={(r, co) => mouseDownHandler(r, co)}
                                    onMouseUp={(r, co) => mouseUpHandler(r, co)}
                                    onContextMenu={(r, co) => contextMenuHandler(r, co)}>
                                </Cell>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );

    //mouse handlers
    //only refreshing the dom if return a new object?
    const updateGridWall = (row, col) => {
        console.log("wall");
        grid[row][col].isBlocked = !grid[row][col].isBlocked;
        setGrid(grid.slice());
    };

    //TODO running into issues where clicking quickly causes mouse up and down events to do weird things

    const updateGridEndCell = (row, col) => {
        // console.log("end");
        grid[row][col].isEnd = !grid[row][col].isEnd;
        setGrid(grid.slice());
    };

    const updateGridStartCell = (row, col) => {
        // console.log("start");
        grid[row][col].isStart = !grid[row][col].isStart;
        setGrid(grid.slice());
    };

    const mouseLeaveHandler = (row, col) => {
        if (!mouseClicked)
            return;
        if (startMove) {
            updateGridStartCell(row, col);
        } else if (endMove) {
            updateGridEndCell(row, col);
        }
    };

    const mouseEnterHandler = (row, col) => {
        if (!mouseClicked)
            return;
        // console.log("entering");
        if (startMove) {
            updateGridStartCell(row, col);
        } else if (endMove) {
            updateGridEndCell(row, col);
        } else {
            updateGridWall(row, col);
        }
    };

    const mouseDownHandler = (row, col) => {
        if (isBusy) {
            // setError("Clear path before editing!");
            return;
        };
        setMouseClicked(true);
        if (grid[row][col].isStart) {
            setStartMove(true);
        } else if (grid[row][col].isEnd) {
            setEndMove(true);
        } else {
            updateGridWall(row, col);
        }


    };

    const mouseUpHandler = (row, col) => {
        // console.log(row, col);
        // console.log("up");
        if (endMove) {
            grid[row][col].isWall = false;
            setGrid(grid.slice());
            // setEnd(grid[row][col]);
        }
        if (startMove) {
            grid[row][col].isWall = false;
            setGrid(grid.slice());
            setStart(grid[row][col]);
        }
        setMouseClicked(false);
        setEndMove(false);
        setStartMove(false);
    };

    const contextMenuHandler = (row, col) => {
        console.log('in menu handler');
        grid[row][col].isEnd = !grid[row][col].isEnd;
        setGrid(grid.slice());
    };
    // end mouse handlers


    return (
        <>
        <GridToolbar onSearch={searchHandler} setAlg={setAlg} 
            onClearWalls={clearGrid} onRandomGrid={randomizeGrid} 
            // onStepForward={handleStepForward} onStepBackward={handleStepBackward}
        />
        <div className="grid-container">
            {gridWithNodes}
        </div>
        <PathfindActionBar grid={grid} setGrid={setGrid} 
            currentFrame={currentFrame} setCurrentFrame={setCurrentFrame} vid={vid} setVid={setVid}
            speed={speed} setSpeed={setSpeed}
            isPaused={isPaused} setIsPaused={setIsPaused}/>
        </>
    );
}

export default Grid;