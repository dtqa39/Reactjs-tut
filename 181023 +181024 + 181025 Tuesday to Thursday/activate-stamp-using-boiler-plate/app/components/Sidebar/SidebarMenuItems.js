import React, { Component } from 'react';
import {Row} from 'reactstrap'; 
import styled from 'styled-components';
import A from '../A';

const Wrapper = styled.div`
  a i{
    color: #7D8E93;
    font-size: 2em;
  }
  a span{
    color: #7D8E93;
  }
  &:hover{
    color: #fff;
    background-color: #233342;
  }
  &:hover i{
    color: #71A741;
  }
  &:hover a{
    color: #fff;
    text-decoration: none;
  }
`;
class SidebarMenuItems extends Component {
    render() {
        return (
            <Wrapper className="py-3">
                <A href="#">
                <Row>
                    <i className={this.props.icon + " fa-2x col-3"}></i>
                    <span className="col-9">{this.props.text}</span> 
                </Row>
                </A>
            </Wrapper>
        );
    }
}

export default SidebarMenuItems;