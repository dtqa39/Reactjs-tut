import React, { Component } from 'react';
import {Row} from 'reactstrap'; 

class SidebarMenuItem extends Component {
    render() {
        return (
            <div className="sidebar-menu-item py-3">
                <a href="#">
                <Row>
                    <i className={this.props.icon + " fa-2x col-sm-3"}></i>
                    <span className="col-sm-9">{this.props.text}</span> 
                </Row>
                </a>
            </div>
        );
    }
}

export default SidebarMenuItem;