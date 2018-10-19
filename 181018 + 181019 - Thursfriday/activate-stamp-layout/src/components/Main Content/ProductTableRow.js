import React, { Component } from 'react';

class ProductTableRow extends Component {
    render() {
        return (
            <tr>
                <td scope="row">{this.props.productNo}</td>
                <td>{this.props.productID}</td>
                <td>{this.props.productCode}</td>
            </tr>
        );
    }
}

export default ProductTableRow;