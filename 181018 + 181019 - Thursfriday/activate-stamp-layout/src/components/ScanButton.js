import React, { Component } from 'react';

class ScanButton extends Component {
    render() {
        return (
            <a name="" id="" class="btn btn-success scan-button" href="#" role="button">
                <i class="fas fa-qrcode"></i>
                <span> Click here to start scanning</span>
            </a>
        );
    }
}

export default ScanButton;