import React, { Component } from 'react';
import ScanButton from './ScanButton';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid #DFDFDF;
    padding: 10px 10px 20px 20px;
    margin-right: 1%;
    float: left;
    border-radius: 3px;
    position: relative;
    width: 24%;
  }
`;
class ScanStamp extends Component {
    render() {
        return (
            <Wrapper className="scan-stamp-item scan-stamp-armv">
                <div className="card-title"><b>{this.props.stampLabel}</b></div>
                <div>
                    <ScanButton></ScanButton>
                </div>
            </Wrapper>
        );
    }
}

export default ScanStamp;