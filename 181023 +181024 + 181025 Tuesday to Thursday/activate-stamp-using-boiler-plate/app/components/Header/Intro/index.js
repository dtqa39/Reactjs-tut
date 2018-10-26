import React, { Component } from 'react';
import styled from 'styled-components';
import IntroMenu from './IntroMenu';
import IntroSelect from './IntroSelect';

const Wrapper = styled.div`
    clear: both;
    overflow: hidden;
    margin-bottom: 15px;
`;
class Intro extends Component {
    render() {
        return (
            <Wrapper>
                <IntroMenu></IntroMenu>
                <IntroSelect></IntroSelect>
            </Wrapper>
        );
    }
}

export default Intro;