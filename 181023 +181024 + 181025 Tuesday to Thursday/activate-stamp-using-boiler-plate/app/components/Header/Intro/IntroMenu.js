import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, } from 'reactstrap';

const Wrapper = styled.div`
    float: left;
    .intro-icon{
        float: left;
        font-size: 32px;
        width: 64px;
      }
    .icon-intro{
        color: #fff;
        font-size: 32px;
      }
    
    .icon-intro-bg{
        color: #85C441;
        font-size: 64px;
      }
    .intro-text{
        float: left;
        margin: 5px 30px 10px 30px;
      }
    .intro-text > *{
        margin: 5px 0px;
      }
    .intro-text div > *{
        margin-right: 3px;
    }
    .intro-text div span:nth-child(1){
        color: #9AA9A9;
      }
    .intro-text div i:nth-child(2){
        color: #9AA9A9;
        margin: 0px 2px;
      }
    .intro-text div span:nth-child(3){
        color: #4CA4DE;
      }
    .intro-text div:nth-child(2){
        text-transform: uppercase;
        font-size: 18px;
        color: #314254;
        font-weight: bold;
      }
      & .fa-stack-2x{
          text-align: left;
      }
`;
class IntroMenu extends Component {
    render() {
        return (
            <Wrapper className="col-4">
                <div className="col-12">
                <div className="fa-stack intro-icon">
                        <i className="fa fa-circle fa-stack-2x icon-intro-bg"></i>
                        <i className="fas fa-mobile-alt fa-stack-1x icon-intro"></i>
                </div>
                <div className="intro-text">
                    <div>
                    <span>Stamp Management  </span>
                    <i class="fas fa-angle-right"></i>
                    <span>  Activate Stamp</span>
                    </div>
                    <div> Activate Stamp</div>
                </div>
                </div>
            </Wrapper>
        );
    }
}

export default IntroMenu;