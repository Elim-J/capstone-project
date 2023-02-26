import React, {useState, useEffect, useRef} from "react";
import Cell from "./Cell";
import "../../../css/Grid.css";
import GridToolbar from "./GridToolbar";
import {PathfindingAlgs, StartingGrid, AStarHeuristics} from "../../../constants/PathfindingAlgs";
import aStar from "./aStar";
import {bfs} from "./bfs";
import PathfindActionBar from "./PathfindActionBar";
import { mitmbfs } from "./mitmbfs";
import CodeContent from '../shared/CodeContent';



const Grid = () => {

    //These will have to be states when we want to adjust size
    const row = 15;
    const col = 25;

    let START_CELL_ROW = 0,
        START_CELL_COL = 0,
        END_CELL_ROW = row - 1,
        END_CELL_COL = col - 1;

    let lastStartCellRow = 0,
        lastStartCellCol = 0;

    let startingVid = aStar(StartingGrid, AStarHeuristics.Manhattan);

    const [grid, setGrid] = useState(startingVid[0].grid);
    const [lastStartCell, setLastStartCell] = useState({row: 0, col: 0});
    const [alg, setAlg] = useState(PathfindingAlgs.Astar);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [vid, setVid] = useState(startingVid);
    const [isPaused, setIsPaused] = useState(true);
    const [speed, setSpeed] = useState(250); //ms
    const [showAni, setShowAni] = useState(true);
    const [mouseInGrid, setMouseInGrid] = useState(false);
    const [openCode, setOpenCode] = useState(true);
    const [openInfo, setOpenInfo] = useState(true);
    const [heuristic, setHeuristic] = useState(AStarHeuristics.Manhattan);

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

    useEffect(() => {
        highlightCodeLine(vid[currentFrame]?.highlightedLines);
    }, [currentFrame, vid]);

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
        // setStart(g[START_CELL_ROW][START_CELL_COL]);
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
        // setVid(rndVid);
        setGrid(rndVid[0].grid);
        // setCurrentFrame(0);
        // console.log(JSON.stringify(rndVid[0].grid));
    };

    const clearGrid = () => {
        // console.log('Clearing grid');
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                grid[i][j].isBlocked = false;
            }
        }
        setGrid(grid.slice());
    };

    const searchHandler = () => {
        //TODO add isBusy state to check if search can be ran
        // console.log('search handler targetAlg: ' + alg);
        if(alg == PathfindingAlgs.None){
            //send error?
        } else if (alg == PathfindingAlgs.Astar){
            // console.log('setting vid to astar');
            setVid(aStar(grid, heuristic));
            // setAlg(targetAlg);
        } else if (alg == PathfindingAlgs.Bfs){
            let vid = bfs(grid);
            setVid(vid);
            setCurrentFrame(0);
            setGrid(vid[0].grid);
        } else if (alg == PathfindingAlgs.MitmBfs){
            let vid = mitmbfs(grid);
            setVid(vid);
            setCurrentFrame(0);
            setGrid(vid[0].grid);
            // console.log('line 135');
        }
    };

    const highlightCodeLine = (lines) => {
        const prevHighlight = document.querySelectorAll('.highlight');
        console.log(lines);
        prevHighlight?.forEach((element, i) => {
            element.className = '';
        });
        lines?.forEach((element, i) => {
            document.getElementById(`code-${element}`).className = 'highlight';
        });
    };

    const getMessage = () => {
        if (vid && vid[currentFrame] && vid[currentFrame]?.info?.message){
            return vid[currentFrame].info.message;
        } else {
            return "";
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
                                    onContextMenu={(r, co) => contextMenuHandler(r, co)}
                                    showAni={showAni}>
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
        // console.log("updateGridWall", row, col);
        grid[row][col].isBlocked = !grid[row][col].isBlocked;
        setGrid(grid.slice());
    };

    //TODO running into issues where clicking quickly causes mouse up and down events to do weird things

    const updateGridEndCell = (row, col, isEnter) => {
        // console.log("updateGridEndCell", row, col);
        if (grid[row][col].isStart){
            return;
        }
        if (endMove){
            grid[row][col].isEnd = !grid[row][col].isEnd;
            if (grid[row][col].wasEnd){
                grid[row][col].isEnd = true;
                delete grid[row][col].wasEnd
            }
            if (isEnter && !grid[row][col].isEnd){
                grid[row][col].isEnd = true;
                grid[row][col].wasEnd = true;
            }
        }
        setGrid(grid.slice());
    };

    const updateGridStartCell = (row, col) => {
        // console.log("updateGridStartCell", row, col);
        if (mouseInGrid){
            grid[row][col].isStart = !grid[row][col].isStart;
            if (grid[row][col].isStart){
                setLastStartCell({row: row, col: col});
            }
            setGrid(grid.slice());
        }
    };

    const mouseLeaveHandler = (row, col) => {
        // console.log("mouseLeaveHandler", row, col)
        if (!mouseClicked)
            return;
        if (startMove) {
            updateGridStartCell(row, col);
        } else if (endMove) {
            updateGridEndCell(row, col, false);
        }
    };

    const mouseEnterHandler = (row, col) => {
        // console.log("mouseEnterHandler", row, col);
        if (!mouseClicked)
            return;
        if (startMove) {
            updateGridStartCell(row, col);
        } else if (endMove) {
            updateGridEndCell(row, col, true);
        } else {
            updateGridWall(row, col);
        }
    };

    const mouseDownHandler = (row, col) => {
        // console.log('mouseDownHandler:', row, col)
        if (!editMode) {
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
        // console.log('mouseUpHandler', row, col)
        delete grid[row][col].wasEnd;
        if (endMove) {
            grid[row][col].isBlocked = false;
            setGrid(grid.slice());
        }
        if (startMove) {
            grid[row][col].isBlocked = false;
            grid[row][col].isEnd = false;
            setGrid(grid.slice());
            // setStart(grid[row][col]);
        }
        setMouseClicked(false);
        setEndMove(false);
        setStartMove(false);
    };

    const contextMenuHandler = (row, col) => {
        // console.log("contextMenuHandler", row, col)
        if (!editMode || grid[row][col].isStart)
            return;
        // console.log('in menu handler');
        grid[row][col].isBlocked = false;
        grid[row][col].isEnd = !grid[row][col].isEnd;
        setGrid(grid.slice());
    };
    // end mouse handlers

    
    const handleReset = () => {
        setCurrentFrame(0);
        setGrid(vid[0].grid);
        setIsPaused(true);
        clearTimeout(childStateRef.current.getTimeoutId());
    };
    const childStateRef = useRef();
    const handleAnimationToggle = (e) => {
        // console.log('handle animation toggle' + e.target.checked);
        setShowAni(e.target.checked);  
    };

    const handleMouseLeaveGrid = () => {
        // console.log('handleMouseLeaveGrid');
        if (startMove){
            // console.log('here', lastStartCell.row, lastStartCell.col);
            grid[lastStartCell.row][lastStartCell.col].isBlocked = false;
            grid[lastStartCell.row][lastStartCell.col].isEnd = false;
            grid[lastStartCell.row][lastStartCell.col].isStart = true;
            setGrid(grid.slice());
            // setStart(grid[lastStartCell.row][lastStartCell.col]);
        }
        setMouseClicked(false);
        setEndMove(false);
        setStartMove(false);
        setMouseInGrid(false);
    }

    const handleMouseEnterGrid = () => {
        // console.log('handleMouseEnterGrid');
        setMouseInGrid(true);
    }


    return (
        <>
        <GridToolbar onSearch={searchHandler} alg={alg} setAlg={setAlg} 
            onClearWalls={clearGrid} onRandomGrid={randomizeGrid} 
            edit={editMode} setEditMode={setEditMode}
            handleReset={handleReset}
            setShowAni={handleAnimationToggle}
            setHeuristic={setHeuristic}
        />
        <div onMouseEnter={handleMouseEnterGrid} onMouseLeave={handleMouseLeaveGrid} className="grid-container"> 
            {gridWithNodes}
        </div>
        <div className="code-wrapper">
                    <CodeContent 
                    alg={alg}
                    heuristic={heuristic} 
                    open={openCode} 
                    setOpen={setOpenCode}
                    getMessage={getMessage}/>
                </div>
        {!editMode && 
        <PathfindActionBar ref={childStateRef} grid={grid} setGrid={setGrid} 
        currentFrame={currentFrame} setCurrentFrame={setCurrentFrame} vid={vid} setVid={setVid}
        speed={speed} setSpeed={setSpeed}
        isPaused={isPaused} setIsPaused={setIsPaused}
        handleReset={handleReset} openCode={openCode}
        setOpenCode={setOpenCode}
        />}
        {console.log(vid[currentFrame])}        
        </>
    );
}

export default Grid;