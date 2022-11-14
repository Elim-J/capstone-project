import React, {useState} from "react";
import Board from '../TrelloComponents/Board'
import uuid from 'react-uuid'
import { FaPray } from "react-icons/fa";
import imgArr from './Data'
export default function Form({isActive, newBoard, setNewBoard, updateBoard}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newBoard);
        updateBoard();
        e.target.reset();
    }

    const onChange = (e) => {
        setNewBoard({...newBoard, image: imgArr[randomImg()], id:this.uuid(), [e.target.name]: e.target.value})
    }

    const randomImg = () => {
        let x = Math.floor(Math.random() * imgArr.length)
        return x;
    }
    
    return(
        <div>
            <form className={isActive? 'formB' : 'formA'}  onSubmit={handleSubmit}>
                <div className='inputs'>
                    <input
                        className='input--title'
                        type='text' 
                        name='title' 
                        placeholder="Title"
                        label= 'Title'
                        onChange={onChange}
                        required
                    />
                    <input 
                        className='input--description'
                        type="text" 
                        name='description' 
                        placeholder="Description" 
                        label='Description'
                        onChange={onChange}
                        required
                     />
                    <input
                        className='input--members'
                        type="text"  
                        name='members' 
                        placeholder="Members"
                        label='Description'
                        onChange={onChange}
                        required
                    />
                    <button className='submit--btn' type="submit"><span className='text'>Submit</span></button>
                </div>
            </form>
        </div>
    )
}