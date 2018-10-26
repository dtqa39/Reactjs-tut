import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.tr`
    
`;

class ProductTableRow extends Component {
    render() {
        return (
            <Wrapper className="d-flex">
                <td scope="row" className="col-1">{this.props.productNo}</td>
                <td className="col-2">{this.props.productID}</td>
                <td className="col-9">{this.props.productCode}</td>
            </Wrapper>
        );
    }
}

export default ProductTableRow;