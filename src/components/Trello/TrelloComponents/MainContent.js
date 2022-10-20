import React, {useState} from "react";
import Board from "./Board.js";
import '../../../css/TrelloMainContent.css';
import Form from './Form'
import uuid from 'react-uuid'


export default function MainContent(){
    
    const [newBoard, setNewBoard] = useState({
        id: null,
        title: '',
        description: '',
        members: ''
    })

    const [boards, setBoards] = useState([
        {
            id: uuid(),
            title:'test', 
            description: 'test description', 
            members:'cool kids'},
        {
            id: uuid(),
            title: '1',
            description: '2',
            members: '3'
        },
        {
            id: uuid(),
            title: 'a',
            description: 'b',
            members: 'c'
        },
        {
            id: uuid(),
            title: '1',
            description: '2',
            members: '3'
        },
        {
            id: uuid(),
            title: 'a',
            description: 'b',
            members: 'c'
        },
        {
            id: uuid(),
            title: '1',
            description: '2',
            members: '3'
        },
        {
            id: uuid(),
            title: 'a',
            description: 'b',
            members: 'c'
        }
    ]);

    const [isActive, setIsActive] = useState(false);
    
    // open menu function for button
    function openMenuOverlay(){
        setIsActive(active => !active);
    }

    function updateBoards(){
        setBoards(prevBoards => [...prevBoards, newBoard])
    }
   
    return(
        <>
            <h2 id='test'>Your Boards</h2>
            <button className={isActive? 'btnA' : 'btnB'} onClick={openMenuOverlay}>{isActive? 'Close Menu' : 'Add Board'}</button>
            <Form 
                isActive = {isActive}
                newBoard = {newBoard}
                setNewBoard = {setNewBoard}
                updateBoard = {updateBoards}
            />
        
            <div className='allBoards'>
            {boards.map(board => (
                <Board key={board.id} title={board.title} description={board.description} members={board.members}/>
            ))}
            </div>     
        </>
    )

}