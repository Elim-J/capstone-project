import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/GlobalNavBar';
import Sidebar from '../components/Sidebar/globalSidebarIndex';
import Footer from '../components/Footer';
import QuickSortWrapper from '../components/visualizers/sorting/QuickSortWrapper';


const QuickSortPage = () => {

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
            <QuickSortWrapper />
            {/* <Footer /> */}
        </>
    )
}

export default QuickSortPage