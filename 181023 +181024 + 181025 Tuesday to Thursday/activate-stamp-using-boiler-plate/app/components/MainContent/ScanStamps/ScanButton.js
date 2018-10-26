import React, { Component } from 'react';
import styled from 'styled-components';
import A from './../../A'

const Wrapper = styled(A)`
    background-color: #85C441;
    padding: 10px 40px 10px 15px;
    border-radius: 4px;
    > *{
        color: #fff;
        text-transform: none;
    }
    i{
        margin: 0px 10px 0px 0px;
      }
    span{
        font-size: 12px;
    }
`;
class ScanButton extends Component {
    render() {
        return (
                <Wrapper name="" id="" class="btn" href="#" role="button">
                    <i class="fas fa-qrcode"></i>
                    <span> Click here to start scanning</span>
                </Wrapper>
        );
    }
}

export default ScanButton;