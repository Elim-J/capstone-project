import React, {useState, useEffect, useRef} from "react";
import Cell from "./Cell";
import "../../../css/Grid.css";
import GridToolbar from "./GridToolbar";
import PathfindingAlgs from "../../../constants/PathfindingAlgs";
import aStar from "./aStar";


const Grid = () => {

    //These will have to be states when we want to adjust size
    const row = 15;
    const col = 25;

    let START_CELL_ROW = 0,
        START_CELL_COL = 0,
        END_CELL_ROW = row - 1,
        END_CELL_COL = col - 1;

    const [grid, setGrid] = useState([]);
    const [startCell, setStart] = useState(null);
    const [endCell, setEnd] = useState(null);
    const [alg, setAlg] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        setGrid(createGrid);
    }, []);

    const randomizeStartAndEnd = () => {
        START_CELL_ROW = Math.floor(Math.random() * row);
        START_CELL_COL = Math.floor(Math.random() * col);

        do {
            END_CELL_ROW = Math.floor(Math.random() * row);
            END_CELL_COL = Math.floor(Math.random() * col);
        } while(START_CELL_ROW === END_CELL_ROW && START_CELL_COL === END_CELL_COL);
        console.log(START_CELL_ROW + ' ' + START_CELL_COL + ' ' + END_CELL_ROW + ' ' + END_CELL_COL);
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
        setEnd(g[END_CELL_ROW][END_CELL_COL]);
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
        setGrid(g);
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

    const handleStepForward = (vid) => {
        console.log(vid[currentFrame + 1]);
        // setGrid(vid[currentFrame + 1]);
        setCurrentFrame(currentFrame + 1);
        
    };


    const handleStepBackward = () => {
        setCurrentFrame(currentFrame - 1);
    };

    // fully loop through the grid each frame, changing cell classes
    // const visualizePath = (vid) => {
    //     for(let i = 0; i < vid.length; i++){ //frame
    //         //setTimeout here for each frame
    //         for(let j = 1; j < vid[i].length; j++){ //row
    //             for(let k = 0; k < vid[i][j].length; k++){ //cell
    //                 console.log(vid[i][j][k]);
    //             }
    //         }
    //     }

    // };

    const searchHandler = () => {
        if(alg == PathfindingAlgs.None){
            //send error?
        } else if (alg == PathfindingAlgs.Astar){
            let vid = aStar(grid);
            handleStepForward(vid);
            // console.log(grid);
            // console.log(vid[currentFrame]);
            // console.log(grid == vid[0].shift());
            
            // visualizePath(vid);
        }
    };

    const gridWithNodes = (
        <div className="grid-with-nodes">
            {grid.map((row, i) => {
                return(
                    <div key={i} className="row-container">
                        {row.map((c, j) => {
                            const {isStart, isEnd, isBlocked} = c;

                            return(
                                <Cell key={j} row={i} col={j} isStart={isStart} isEnd={isEnd} isBlocked={isBlocked}></Cell>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );


    return (
        <>
        <GridToolbar onSearch={searchHandler} setAlg={setAlg} onClearWalls={clearGrid} onRandomGrid={randomizeGrid} />
        <div className="grid-container">
            {gridWithNodes}
        </div>
        </>
    );
}

export default Grid;