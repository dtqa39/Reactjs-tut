import React, { Component } from 'react';

class TopMenuItem extends Component {
    render() {
        return (
            <div>
                <a>{this.props.TopMenuItem}</a>
            </div>
        );
    }
}

export default TopMenuItem;