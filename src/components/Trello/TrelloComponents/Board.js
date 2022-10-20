import React from 'react' 
import '../../../css/Board.css'


 export default function Board({title, description, members}){
    return(
        <div>
            <h2 className='text'>Description: {description}</h2>
            <h2>members: {members}</h2>
            <button className='squareBoard'>
                <h1>Title: {title}</h1>
            </button>
        </div>
    )
}