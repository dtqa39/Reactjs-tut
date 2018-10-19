import React, { Component } from 'react';

class SidebarMenuItem extends Component {
    render() {
        return (
            <div className="sidebar-menu-item">
                <i class={this.props.icon}></i><span>{this.props.text}</span> 
            </div>
        );
    }
}

export default SidebarMenuItem;