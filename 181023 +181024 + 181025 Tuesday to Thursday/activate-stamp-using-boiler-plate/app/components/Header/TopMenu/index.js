import React, { Component } from 'react';
import styled from 'styled-components';
import TopMenuUser from './TopMenuUser';
import TopMenuItem from './TopMenuItem';

const Wrapper = styled.div`
    float: right;

    > *{
      float: left;
      margin: 25px 30px 25px 0px;
      padding-bottom: 20px;
      color: #9AA9A9;
    }
    >div:last-child{
        float: right;
    }
`;

class TopMenu extends Component {
    render() {
        return (
            <Wrapper className="col-6">
                <TopMenuItem TopMenuItem="Crea stamp order"></TopMenuItem>
                <TopMenuItem TopMenuItem="Activate Stamp"></TopMenuItem>
                <TopMenuItem TopMenuItem="Create delivery order"></TopMenuItem>
                <TopMenuUser></TopMenuUser>
            </Wrapper>
        );
    }
}

export default TopMenu;