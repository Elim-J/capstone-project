import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import Navbar from '../components/GlobalNavBar';
import Sidebar from '../components/Sidebar';
import '../css/Trello.css';


export default function Trello(){

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Navbar toggle= {toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            {/* <Navbar /> */}
            <h1>Hello World!</h1>
        </>
    )
}

