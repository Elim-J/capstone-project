import React from 'react';

function Rectangle({data, color}) {
  return (
    <div className='rect' style={{height: `${data*20}px`, backgroundColor: color}}>
        <div className='rect-data'> 
            {data}
        </div>
    </div>
  )
}

export default Rectangle