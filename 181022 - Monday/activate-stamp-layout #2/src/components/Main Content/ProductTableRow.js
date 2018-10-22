import React, { Component } from 'react';

class ProductTableRow extends Component {
    render() {
        return (
            <tr className="d-flex">
                <td scope="row" className="col-1">{this.props.productNo}</td>
                <td className="col-2">{this.props.productID}</td>
                <td className="col-9">{this.props.productCode}</td>
            </tr>
        );
    }
}

export default ProductTableRow;