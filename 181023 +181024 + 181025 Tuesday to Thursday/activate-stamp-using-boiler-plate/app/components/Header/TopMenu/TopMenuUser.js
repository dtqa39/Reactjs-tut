import React, { Component } from 'react';
import styled from 'styled-components';
import A from '../../A';

const Wrapper = styled.div`
   a > *{
    margin: 0px 2px;
   }
   .fa-bell{
       margin-right:10px;
   }
`;
class TopMenuUser extends Component {
    render() {
        return (
            <Wrapper>
                <A><i class="far fa-bell"></i></A>
                <A>
                    <i class="far fa-user-circle"></i>
                    <span> Nhu Nguyen</span>
                    <i class="fas fa-angle-down"></i>
                </A>
            </Wrapper>
        );
    }
}

export default TopMenuUser;