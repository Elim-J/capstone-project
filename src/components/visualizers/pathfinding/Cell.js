import React from 'react';
import "../../../css/Cell.css";

const Cell = ({row, col, isStart, isEnd, isBlocked}) => {

  const nodeType = isStart ? "cell-start" : isEnd ? "cell-end" : isBlocked ? "cell-wall" : "";

  return (
    <div className={`cell ${nodeType}`} id={`cell-${row}-${col}`}>

    </div>
    );
}

export default Cell;