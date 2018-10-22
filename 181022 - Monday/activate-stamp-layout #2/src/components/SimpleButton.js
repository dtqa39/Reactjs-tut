import React, { Component } from 'react';

class SimpleButton extends Component {
    render() {
        return (
            <a name="" id="" className="btn" href="#" role="button">{this.props.buttonValue}</a>
        );
    }
}

export default SimpleButton;