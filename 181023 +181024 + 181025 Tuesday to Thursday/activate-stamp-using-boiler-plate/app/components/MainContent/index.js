import React, { Component } from 'react';
import styled from 'styled-components';
import BatchInfomation from './BatchInformation';
import ScanStamps from './ScanStamps';
import ProductStamp from './ProductStamp';
import PackageStamp from './PackageStamp';
import SimpleButton from '../SimpleButton';

const Wrapper = styled.div`
    form > * {
        margin: 0px 10px;
    }
    .container-fluid{
        background-color: #ECF0F1;
        padding: 0px 30px;
      }
    .container-fluid > *{
        background-color: #fff;
      }
    form .form-group{
        margin-bottom: 8px;
      }
    .product-total{
        text-transform: capitalize;
        font-weight: bold;
    }
    .product-total b{
        color: #85C440;
        margin-left: 3px;
    }
    .total-package{
        clear: both;
        margin-left: 20px;
        background-color: #ECF0F1;
      }
    .total-package b{
        color: #85C440;
      }
      .main-button{
        display: flex;
        justify-content: center;
        padding: 20px;
      }
      .main-button .btn {
        width: 300px;
        margin: 10px;
        font-weight: bold;
        color: #fff;
        font-size: 14px;
      }
      .main-button .btn:first-child{
        background-color: #85C440;
      }
      .main-button .btn:last-child{
        background-color: #34495E;
      }
`;

class MainContent extends Component {
    render() {
        return (
            <Wrapper>
                <div className="container-fluid">
                <BatchInfomation></BatchInfomation>
                <ScanStamps></ScanStamps>
                <ProductStamp></ProductStamp>
                <PackageStamp></PackageStamp>
                <div className="total-package"><i>Total scan package: <b> 08</b></i></div>
                </div>
                <div className="main-button">
                    <SimpleButton buttonValue="Next"></SimpleButton>
                    <SimpleButton buttonValue="Complete"></SimpleButton>
                </div>
            </Wrapper>
        );
    }
}

export default MainContent;