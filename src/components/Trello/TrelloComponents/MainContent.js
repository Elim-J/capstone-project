import React, {useState} from "react";
import '../../../css/TrelloMainContent.css';
import Form from './Form';
import uuid from 'react-uuid';
import Board from './Board';
import imgArr from './Data';

import DrawingPad from './DrawingPad'


export default function MainContent(){
    
    const [newBoard, setNewBoard] = useState({
        id: null,
        title: '',
        description: '',
        members: ''
    })
    
    const [boards, setBoards] = useState([
        {
            id: 1111111110,
            title:'Test Board', 
            description: 'test description', 
            members:'Sabrina, Waj, Zach, Vince, Erik',
            image: imgArr[0]
        },
        {
            id: uuid(),
            title:'Board One', 
            description: 'test description', 
            members:'Sabrina, Waj, Zach, Vince, Erik',
            image: imgArr[0]
        },
        {
            id: uuid(),
            title: 'Board Two',
            description: 'Another test description',
            members: 'Sabrina',
            image: imgArr[1]
        },
        {
            id: uuid(),
            title: 'Board Three',
            description: 'Another test description',
            members: 'Weird people I don\'t want to work with',
            image: imgArr[2]
        },
        {
            id: uuid(),
            title: 'Board Four',
            description: 'Another test description',
            members: 'Also Sabrina',
            image: imgArr[3]
        },
        {
            id: uuid(),
            title: 'Board Five',
            description: 'Another test description',
            members: 'Another Sabrina',
            image: imgArr[9]
        },
        {
            id: uuid(),
            title: 'Board Six',
            description: 'Another test description',
            members: 'Also me',
            image: imgArr[8]
        },
        {
            id: uuid(),
            title: 'Board Seven',
            description: 'Another test description',
            members: 'Imaginary Friends',
            image: imgArr[7]
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
            {/* <button className={isActive? 'btnA' : 'btnB'} onClick={openMenuOverlay}>{isActive? <span className='text'>Close Menu</span> : <span className='text'>Add Board</span>}</button>
            <Form 
                isActive = {isActive}
                newBoard = {newBoard}
                setNewBoard = {setNewBoard}
                updateBoard = {updateBoards}
            />
        
            <div className='allBoards'>
            {boards.map(board => (
                <Board key={board.id} title={board.title} description={board.description} members={board.members} image={board.image}/>
            ))}
            </div>    */}


            <DrawingPad />
        </>
    )

}