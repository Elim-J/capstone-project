import React from 'react';
import "../../../css/Cell.css";
import PathfindingAlgs from '../../../constants/PathfindingAlgs';

const Cell = ({row, col, alg, isStart, isEnd, isBlocked, isExplored, heuristic, isDiscovered, isPath, 
  onMouseLeave, onMouseEnter, onMouseDown, onMouseUp}) => {

  const nodeType = isStart ? "cell-start" : isEnd ? "cell-end" : isPath ? "cell-path" : isExplored ? 
  "cell-explored" : isDiscovered ? "cell-discovered" : isBlocked ? "cell-wall" : "";

  return (
    <div 
      className={`cell ${nodeType} prevent-select`} 
      id={`cell-${row}-${col}`}
      onMouseLeave={() => onMouseLeave(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseDown={() => onMouseDown(row,col)}
      onMouseUp={() => onMouseUp(row, col)}>
        {alg == PathfindingAlgs.Astar && !isStart && !isEnd && !isBlocked && heuristic}
    </div>
    );
}

export default Cell;