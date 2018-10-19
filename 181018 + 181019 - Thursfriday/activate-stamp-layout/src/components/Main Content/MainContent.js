import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron
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
                        Featured
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
                    <div class="card-header">
                        Scan Stamp
                    </div>
                    <div class="card-body">
                        <ScanStamp stampLabel = "Add Stamp"></ScanStamp>
                        <ScanStamp stampLabel = "Add Stamp"></ScanStamp>
                        <div class="scan-stamp-item scan-stamp-range">
                            <b class="card-title">Add range of stamp</b><br/>
                            <Row>
                                <div className="col-sm-6">
                                    <span>From</span>
                                    <ScanButton></ScanButton>
                                </div>
                                <div className="col-sm-6">
                                    <span>From</span>
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
                                <tr>
                                    <th>No</th>
                                    <th>ID</th>
                                    <th>Code</th>
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
                <div class="card">
                    <div class="card-header">
                        Package Stamp
                    </div>
                    <div class="card-body">
                        Package Stamp Code  <b> fdsAjKCs</b>
                    </div>
                </div>
                <div><i>Total scan package: <b> 08</b></i></div>
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