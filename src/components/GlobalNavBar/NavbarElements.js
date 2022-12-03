import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : '#000')};
  height: 90px;
  margin-top: -80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 900px) {
  transition: 0.8s all ease;
  }

  @media  screen and (min-width: 2000px) {
    display: flex-end;
    font-size: 1.7rem;
    height: 150px;
  }
    /* 4k monitor styles */
    @media  screen and (min-width: 4096px) {
    display: flex-end;
    font-size: 2rem;
  }

`


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 2000px;
@media  screen and (min-width: 2000px) {
  max-width: 4096px;
}
`


export const NavLogo = styled(LinkR)`
  color: #0076bf;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  margin-left: 24px;
  font-weight: bold;
  font-size: 1.8rem;
  text-decoration: none;
  @media  screen and (min-width: 2000px) {
  font-size: 2.8rem;
  }
  @media  screen and (min-width: 4096px) {
  font-size: 3.2rem;
  }
`


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #FFF;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: fit-content;

  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #0076bf;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0076bf
  }
`

export const NavLinksPages = styled(LinkR)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #0076bf;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0076bf
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #0076bf;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #08b9b4;
    color: #010606
  }
  @media  screen and (min-width: 2000px) {
  font-size: 28px;
  }
  @media  screen and (min-width: 4096px) {
  font-size: 32px;
  }
`