import React, { Component } from 'react';
import Card from '../Card';
import ProductTableRow from './ProductTableRow';
import styled from 'styled-components';

const Wrapper = styled(Card)`
    /* Create scroll table */
    .table-wrapper-scroll-y table thead, .table-wrapper-scroll-y table tbody tr { 
    display:table; width:100%; table-layout:fixed; 
    }
    .table-wrapper-scroll-y table tbody { 
    display:block; max-height:210px; overflow-y:scroll; 
    }
    
    table thead tr{
        background-color: #F4F8FB;
    }  
    .table thead tr th{
        border-bottom: 1px;
        color: #94A5A5;
    }
    .product-total{
        float: right;
    }
`;


class ProductStamp extends Component {
    render() {
        return (
            <Wrapper>
                <div class="card-header">
                        <span>Product Stamp</span>
                        <span className="product-total">Total product stamps: <b>50</b></span>
                    </div>
                    <div class="table-wrapper-scroll-y">
                        <table class="table">
                            <thead>
                                <tr className="d-flex">
                                    <th  className="col-1">No</th>
                                    <th  className="col-2">ID</th>
                                    <th  className="col-9">Code</th>
                                </tr>
                            </thead>
                            <tbody>
                            <ProductTableRow productNo="01" productID="013" productCode="hhsSDHsdJF"></ProductTableRow>
                            <ProductTableRow productNo="01" productID="013" productCode="hhsSDHsdJF"></ProductTableRow>
                            <ProductTableRow productNo="01" productID="013" productCode="hhsSDHsdJF"></ProductTableRow>
                            <ProductTableRow productNo="01" productID="013" productCode="hhsSDHsdJF"></ProductTableRow>
                            <ProductTableRow productNo="01" productID="013" productCode="hhsSDHsdJF"></ProductTableRow>
                            <ProductTableRow productNo="01" productID="013" productCode="hhsSDHsdJF"></ProductTableRow>
                            <ProductTableRow productNo="01" productID="013" productCode="hhsSDHsdJF"></ProductTableRow>
                            </tbody>
                        </table>
                    </div>
            </Wrapper>
        );
    }
}

export default ProductStamp;