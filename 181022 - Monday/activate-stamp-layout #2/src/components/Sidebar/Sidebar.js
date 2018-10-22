import React, { Component } from 'react';
import logo from './logo.PNG'
import SidebarMenuItem from './SidebarMenuItem';
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <a href="#"><img src={logo} className="logo"></img></a>
                <div className="sidebar-menu  pt-3">
                    <SidebarMenuItem icon ="fas fa-tachometer-alt" text="Dash board"></SidebarMenuItem>
                    <SidebarMenuItem icon ="fas fa-bezier-curve" text="Stamp orders"></SidebarMenuItem>
                    <SidebarMenuItem icon ="fas fa-cog" text="Stamp management"></SidebarMenuItem>
                    <SidebarMenuItem icon ="fas fa-truck" text="Delivery orders"></SidebarMenuItem>
                    <SidebarMenuItem icon ="fas fa-book" text="Sold items"></SidebarMenuItem>
                </div>
            </div>
        );
    }
}

export default Sidebar;