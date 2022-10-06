import React, { useState } from 'react'
import Navbar from '../components/GlobalNavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

function AlgorithmsHomePage() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <div>
        Algorithms Page
      </div>

      <Footer />
    </>
)
}

export default AlgorithmsHomePage