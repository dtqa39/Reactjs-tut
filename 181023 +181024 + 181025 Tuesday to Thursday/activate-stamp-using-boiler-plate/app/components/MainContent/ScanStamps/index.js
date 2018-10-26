import React, { Component } from 'react';
import { Row, } from 'reactstrap';
import Card from './../Card';
import ScanButton from './ScanButton';
import ScanStamp from './ScanStamp';
import styled from 'styled-components';

const Wrapper = styled(Card)`
    .scan-stamp-range{
        border: 1px solid #DFDFDF;
        padding: 10px 10px 20px 20px;
        margin-right: 1%;
        float: left;
        border-radius: 3px;
        position: relative;
        width: 49%;
        height: 100%;
    }
    .scan-stamp-range-label1{
        padding: 0px 20px 0px 0px;
        position: relative;
        top: 10%;
    }
    .scan-stamp-range-label2{
        padding: 0px 10px 0px 0px;
        position: relative;
        top: 10%;
    }
    .card-title{
        margin: 0px 0px 20px 0px;
`;
class ScanStamps extends Component {
    render() {
        return (
            <Wrapper>
                <div className="card-header">
                        Scan Stamps
                    </div>
                    <div className="card-body">
                        <ScanStamp stampLabel = "Add Stamps"></ScanStamp>
                        <ScanStamp stampLabel = "Remove Stamps"></ScanStamp>
                        <div className="scan-stamp-item scan-stamp-range">
                            <div className="card-title">
                            <b>Add Range of Stamp</b>
                            </div>
                            <Row>
                                <div className="scan-stamp-range-item col-6">
                                    <span className="scan-stamp-range-label1">From</span>
                                    <ScanButton></ScanButton>
                                </div>
                                <div className="scan-stamp-range-item col-6">
                                    <span className="scan-stamp-range-label2">To</span>
                                    <ScanButton></ScanButton>
                                </div>
                            </Row> 
                        </div>
                    </div>
            </Wrapper>
        );
    }
}

export default ScanStamps;