import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import Navbar from '../components/GlobalNavBar';
import Sidebar from '../components/Sidebar/globalSidebarIndex';
import '../css/Trello.css';
import MainContent from '../components/Trello/TrelloComponents/MainContent';


export default function Trello(){

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle= {toggle}/>
            <MainContent />
        </>
    )
}

