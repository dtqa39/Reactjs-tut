import React, { Component } from 'react';
import TopMenu from './TopMenu';
import styled from 'styled-components';
import Intro from './Intro';

const Wrapper = styled.div`
    background-color: #fff;
    clear: both;
    overflow: hidden;
`;

class Header extends Component {
    render() {
        return (
            <Wrapper>
                <TopMenu></TopMenu>
                <Intro></Intro>
            </Wrapper>
        );
    }
}

export default Header;