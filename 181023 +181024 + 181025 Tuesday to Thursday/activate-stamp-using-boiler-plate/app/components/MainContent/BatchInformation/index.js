import React, { Component } from 'react';
import { Row, } from 'reactstrap';
import Card from './../Card';
import FruitDetail from './FruitDetail';

class BatchInfomation extends Component {
    render() {
        return (
            <Card>
                <div class="card-header">
                    Batch Information
                </div>
                <div class="card-body">
                        <Row>
                            <div className="col-3">   
                            <form>
                                <FruitDetail col1="6" col2="6" label="Batch Name" detail="Batch_1234"></FruitDetail>
                                <FruitDetail col1="6" col2="6" label="Type of Fruit" detail="Mango"></FruitDetail>
                                <FruitDetail col1="6" col2="6" label="Production Date" detail="1/1/2018"></FruitDetail>
                            </form>
                            </div>
                            <div className="col-9">
                            <FruitDetail col1="2" col2="10" label="Product category" detail="Yellow Cat Chu Mango"></FruitDetail>
                            <FruitDetail col1="2" col2="10" label="Description" detail="They can be round, oval, kidney-shape or egg-shaped, with yellow, green, red or purple-flushed skin"></FruitDetail>
                            </div>
                        </Row>
                </div>
            </Card>
        );
    }
}

export default BatchInfomation;