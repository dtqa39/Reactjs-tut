import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
    width: 150px;
    border: none;
    font-size: 13px;
    height: 40px;
    margin: 0 auto;
    padding: 0;
    display: table-cell;
    vertical-align: middle;
    line-height: 40px;
    color: #fff;
`;
class SimpleButton extends Component {
    render() {
        return (
            <Button name="" id="" className="btn" href="#" role="button">{this.props.buttonValue}</Button>
        );
    }
}

export default SimpleButton;