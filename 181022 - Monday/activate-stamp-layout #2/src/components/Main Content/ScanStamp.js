import React, { Component } from 'react';
import ScanButton from '../ScanButton';
import {
    Row
  } from 'reactstrap';

class ScanStamp extends Component {
    render() {
        return (
            <div class="scan-stamp-item scan-stamp-armv">
                <div class="card-title"><b>{this.props.stampLabel}</b></div>
                <ScanButton></ScanButton>
            </div>
        );
    }
}

export default ScanStamp;