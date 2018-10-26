import React, { Component } from 'react';
import styled from 'styled-components';
import A from '../../A';

const Wrapper = styled.div`
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;

    &:hover{
      color: #85C441;
      border-bottom: 5px solid #85C441;
      margin-bottom: 15px;
    }
`;

class TopMenuItem extends Component {
    render() {
        return (
            <Wrapper>
                <A>{this.props.TopMenuItem}</A>
            </Wrapper>
        );
    }
}

export default TopMenuItem;