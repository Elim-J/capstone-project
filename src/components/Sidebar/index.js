import React from 'react'
import { 
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLinkR,
    SideBtnWrap,
    SidebarRoute
 } from './SidebarElements'

const Sidebar = ({ isOpen, toggle  }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'  onClick={toggle}> About</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}> Discover </SidebarLink>
                    <SidebarLink to='tools' onClick={toggle}> Tools</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                    <SidebarLinkR to='/algorithms' onClick={toggle}> Algorithms</SidebarLinkR>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar