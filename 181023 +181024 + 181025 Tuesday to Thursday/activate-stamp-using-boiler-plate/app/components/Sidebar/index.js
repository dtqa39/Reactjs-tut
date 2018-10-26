import React, { Component } from 'react';
import logo from './logo.jpg';
import SidebarMenuItems from './SidebarMenuItems.js';
import styled from 'styled-components';
import A from '../A';

const Img = styled.img`
  width: 100%;
`;
const Wrapper = styled.div`
    width: 20%;
    flex: 1;
    margin:0;
    background-color: #34495E;
    color: #7D8E93;
    text-transform: uppercase;
    .sidebar-menu i{
        padding: 0px 0px 0px 40px;
    }
    .sidebar-menu span{
        font-size: 13px; 
      }
    .sidebar-menu div:first-child div{
        padding-top: 1.5em;
    }
`;
class Sidebar extends Component {
    render() {
        return (
            <Wrapper>
                <A href="#"><Img src={logo}></Img></A>
                <div className="sidebar-menu">
                    <SidebarMenuItems icon ="fas fa-tachometer-alt" text="Dash board"></SidebarMenuItems>
                    <SidebarMenuItems icon ="fas fa-bezier-curve" text="Stamp orders"></SidebarMenuItems>
                    <SidebarMenuItems icon ="fas fa-cog" text="Stamp management"></SidebarMenuItems>
                    <SidebarMenuItems icon ="fas fa-truck" text="Delivery orders"></SidebarMenuItems>
                    <SidebarMenuItems icon ="fas fa-book" text="Sold items"></SidebarMenuItems>
                </div>
            </Wrapper>
        );
    }
}

export default Sidebar;