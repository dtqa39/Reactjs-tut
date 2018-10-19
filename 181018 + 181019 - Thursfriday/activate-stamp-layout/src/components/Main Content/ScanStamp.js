import React, { Component } from 'react';
import ScanButton from '../ScanButton';
import {
    Row
  } from 'reactstrap';

class ScanStamp extends Component {
    render() {
        return (
            <div class="scan-stamp-item scan-stamp-armv">
                <b class="card-title">{this.props.stampLabel}</b><br/>
                <ScanButton></ScanButton>
            </div>
        );
    }
}

export default ScanStamp;