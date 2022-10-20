import React, {useState} from "react";
import Board from '../TrelloComponents/Board'
import uuid from 'react-uuid'
import { FaPray } from "react-icons/fa";
export default function Form({isActive, newBoard, setNewBoard, updateBoard}) {


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newBoard);
        updateBoard();
        e.target.reset();
    }

    const onChange = (e) => {
        setNewBoard({...newBoard, id:uuid(), [e.target.name]: e.target.value})
    }
    
    return(
        <div>
            <form className={isActive? 'formB' : 'formA'}  onSubmit={handleSubmit}>
                <div>
                    <input
                        className='input--title'
                        type='text' 
                        name='title' 
                        placeholder="Title"
                        label= 'Title'
                        onChange={onChange}
                    />
                    <input 
                        className='input--description'
                        type="text" 
                        name='description' 
                        placeholder="Description" 
                        label='Description'
                        onChange={onChange}
                     />
                    <input
                        className='input--members'
                        type="text"  
                        name='members' 
                        placeholder="Members"
                        label='Description'
                        onChange={onChange}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}