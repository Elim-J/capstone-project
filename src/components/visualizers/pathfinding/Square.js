import React from 'react';

function Square({data, color}) {
  return (
    <div className='sq' style={{height: `${data*50}px`, backgroundColor: color}}>
        <div className='sq-data'> 
            {data}
        </div>
    </div>
  )
}

export default Square