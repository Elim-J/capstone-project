import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksPages,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false)


  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#FFF' }} >
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>CS</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              
              <NavItem>
                <NavLinksPages
                  to='/algorithms'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='false'
                  offset={-80}
                  activeClass='active'
                >Algorithms</NavLinksPages>
              </NavItem>

              <NavItem>
                <NavLinksPages
                  to='/trello'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='false'
                  offset={-80}
                  activeClass='active'
                >Trello</NavLinksPages>
              </NavItem>
              
            <NavItem>
                <NavLinksPages
                  to='/sorting'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='false'
                  offset={-80}
                  activeClass='active'
                >Sorting</NavLinksPages>
              </NavItem>

              <NavItem>
                <NavLinksPages
                  to='/pathfind'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='false'
                  offset={-80}
                  activeClass='active'
                >Pathfinding</NavLinksPages>
              </NavItem>
              
            </NavMenu>



            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar