import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import Tools from '../components/Tools';
import Footer from '../components/Footer';


function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection />
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <Tools />
          <InfoSection {...homeObjThree} />
          <Footer />
        </>
    )
}

export default Home;