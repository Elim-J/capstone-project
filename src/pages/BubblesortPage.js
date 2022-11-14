import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/GlobalNavBar';
import Sidebar from '../components/Sidebar/globalSidebarIndex';
import SortWrapper from '../components/visualizers/sorting/SortWrapper'

const BubblesortPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <br></br>
            <br></br>
            <br></br>
            <SortWrapper />
        </>
    )
}

export default BubblesortPage