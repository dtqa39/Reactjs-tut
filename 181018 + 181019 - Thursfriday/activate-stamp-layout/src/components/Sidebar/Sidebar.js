import React, { Component } from 'react';
import logo from './logo.PNG'
import SidebarMenuItem from './SidebarMenuItem';
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img src={logo} className="logo"></img>
                <div className="sidebar-menu">
                    <SidebarMenuItem icon ="fas fa-cog" text="Dash board"></SidebarMenuItem>
                    <SidebarMenuItem icon ="fas fa-cog"text="Dash board"></SidebarMenuItem>
                    <SidebarMenuItem icon ="fas fa-cog"text="Dash board"></SidebarMenuItem>
                    <SidebarMenuItem icon ="fas fa-cog"text="Dash board"></SidebarMenuItem>
                    <SidebarMenuItem icon ="fas fa-cog" text="Dash board"></SidebarMenuItem>
                </div>
            </div>
        );
    }
}

export default Sidebar;