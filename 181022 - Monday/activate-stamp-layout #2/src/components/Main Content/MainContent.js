import React, { Component } from 'react';
import {
    Row,
  } from 'reactstrap';
import FruitDetail from './FruitDetail';
import ScanButton from '../ScanButton';
import ScanStamp from './ScanStamp';
import ProductTableRow from './ProductTableRow';
import SimpleButton from '../SimpleButton';

class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="container-fluid">
                <div class="card">
                    <div class="card-header">
                        Batch Information
                    </div>
                    <div class="card-body">
                            <Row>
                                <div className="col-sm-4">   
                                <form>
                                    <FruitDetail col1="5" col2="7" label="Batch Name" detail="Batch_1234"></FruitDetail>
                                    <FruitDetail col1="5" col2="7" label="Type of Fruit" detail="Mango"></FruitDetail>
                                    <FruitDetail col1="5" col2="7" label="Production Date" detail="1/1/2018"></FruitDetail>
                                </form>
                                </div>
                                <div className="col-sm-8">
                                <FruitDetail col1="3" col2="9" label="Product category" detail="Yellow Cat Chu Mango"></FruitDetail>
                                <FruitDetail col1="3" col2="9" label="Description" detail="They can be round, oval, kidney-shape or egg-shaped, with yellow, green, red or purple"></FruitDetail>
                                </div>
                            </Row>
                    </div>
                </div>
                <div class="card">
                    <div className="card-header">
                        Scan Stamps
                    </div>
                    <div className="card-body">
                        <ScanStamp stampLabel = "Add Stamps"></ScanStamp>
                        <ScanStamp stampLabel = "Remove Stamps"></ScanStamp>
                        <div className="scan-stamp-item scan-stamp-range">
                            <div  className="card-title">
                            <b>Add Range of Stamp</b>
                            </div>
                            <Row>
                                <div className="scan-stamp-range-item col-sm-6">
                                    <span className="scan-stamp-range-label1">From</span>
                                    <ScanButton></ScanButton>
                                </div>
                                <div className="scan-stamp-range-item col-sm-6">
                                    <span className="scan-stamp-range-label2">To</span>
                                    <ScanButton></ScanButton>
                                </div>
                            </Row> 
                        </div>
                    </div>
                </div>
                <div class="card">
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
                </div>
                <div className="card">
                    <div className="card-header">
                        Package Stamp
                    </div>
                    <div className="card-body product-total">
                        Package Stamp Code  <b> fdsAjKCs</b>
                    </div>
                </div>
                <div className="total-package"><i>Total scan package: <b> 08</b></i></div>
                <div className="main-button">
                    <SimpleButton buttonValue="Next"></SimpleButton>
                    <SimpleButton buttonValue="Complete"></SimpleButton>
                </div>
            </div>
            </div>
        );
    }
}

export default MainContent;