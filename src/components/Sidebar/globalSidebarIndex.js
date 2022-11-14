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
                    <SidebarLinkR to='/algorithms' onClick={toggle}> Algorithms</SidebarLinkR>
                    <SidebarLinkR to='/trello' onClick={toggle}> Trello</SidebarLinkR>
                    <SidebarLinkR to='/sorting' onClick={toggle}> Sorting</SidebarLinkR>
                    <SidebarLinkR to='/pathfind' onClick={toggle}> Pathfinding</SidebarLinkR>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar