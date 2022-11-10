import React, { useState } from 'react'
import Navbar from '../components/GlobalNavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AlgoInfoSection from '../components/AlgoInfoSection/index'

function AlgorithmsHomePage() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <br></br>
      <AlgoInfoSection />
      <Footer />
    </>
)
}

export default AlgorithmsHomePage