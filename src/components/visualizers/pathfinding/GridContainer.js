import React, { useState } from 'react'
import Grid from "./Grid";
import ScrollToTop from '../../ScrollToTop'
import Navbar from '../../GlobalNavBar';
import Sidebar from '../../Sidebar/globalSidebarIndex';

const GridContainer = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="grid-wrapper">
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <br></br>
            <br></br>
            <br></br>
            <Grid />
        </div>
    )
}

export default GridContainer;