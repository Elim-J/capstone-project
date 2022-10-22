import React, {useRef} from 'react';
import "../../../css/Cell.css";
import {PathfindingAlgs} from '../../../constants/PathfindingAlgs';

const Cell = ({row, col, alg, isStart, isEnd, isBlocked, isExplored, heuristic, isDiscovered, isPath, 
  onMouseLeave, onMouseEnter, onMouseDown, onMouseUp, onContextMenu, showAni}) => {

  const nodeType = isStart ? "cell-start" : isEnd ? "cell-end" : isPath ? "cell-path" : isExplored ? 
  "cell-explored" : isDiscovered ? "cell-discovered" : isBlocked ? "cell-wall" : "";
  
  const showAnimation = showAni ? "" : "no-animation";

  return (
    <div 
      className={`cell ${nodeType} ${showAnimation} prevent-select`} 
      id={`cell-${row}-${col}`}
      onContextMenu={(e) =>{
        e.preventDefault();
        onContextMenu(row, col);
      } }
      onMouseLeave={() => onMouseLeave(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseDown={(e) => {
        if(e.button === 0){
          onMouseDown(row,col);
        }
          
      }}
      onMouseUp={() => onMouseUp(row, col)}
      >
        {alg == PathfindingAlgs.Astar && !isStart && !isEnd && !isBlocked && heuristic}
    </div>
    );
}

export default Cell;