import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/GlobalNavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import SortWrapper from '../components/visualizers/sorting/SortWrapper'

const BubblesortPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <SortWrapper />

        </>
    )
}

export default BubblesortPage