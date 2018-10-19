import React, { Component } from 'react';
import TopMenuItem from './TopMenuItem';
import {
    Row,
    Col,
  } from 'reactstrap';
import SimpleButton from '../SimpleButton';

class TopMenu extends Component {
    render() {
        return (
            // <div className="top-menu">
            //     <div>
            //         <Row className="top-menu-menu">
            //                 <Col-md-4 className="top-menu-user float-right">
            //                     <span><i class="far fa-bell"></i></span>
            //                     <i class="far fa-user-circle"></i>
            //                     <span> Nhu Nguyen</span>
            //                     <i class="fas fa-angle-down"></i>
            //                 </Col-md-4>
            //                 <Col-md-4 className="float-right">
            //                     <TopMenuItem TopMenuItem="Activate Stamp"></TopMenuItem>
            //                 </Col-md-4>
            //                 <Col-md-4  className="float-right">
            //                     <TopMenuItem TopMenuItem="Activate Stamp"></TopMenuItem>
            //                 </Col-md-4>
            //                 <Col-md-4  className="float-right">
            //                     <TopMenuItem TopMenuItem="Activate Stamp"></TopMenuItem>
            //                 </Col-md-4>
            //             </Row>
            //         </div>
            //         <div className="intro">
            //         <Row>
            //                 <Col-4 className="intro-menu">
            //                     <div className="fa-stack fa-3x intro-icon">
            //                         <i className="fa fa-circle fa-stack-2x icon-intro-bg"></i>
            //                         <i className="fas fa-mobile-alt fa-stack-1x icon-intro"></i>
            //                 </div>
            //                 <div className="intro-text">
            //                     <div>
            //                         <span>Stamp Management  </span>
            //                         <i class="fas fa-angle-right"></i>
            //                         <span>  Activate Stamp</span>
            //                     </div>
            //                     <div> Activate Stamp</div>
            //                 </div>
            //                 </Col-4>
            //                 <Col-6  className="intro-select col-6">
            //                 jhfgksdf
            //                 </Col-6>
            //             </Row>
            //         </div>
            // </div>
            <div className ="top-menu">
                <div className="top-menu-menu">
                    <div className="top-menu-user">
                        <span><i class="far fa-bell"></i></span>
                        <i class="far fa-user-circle"></i>
                        <span> Nhu Nguyen</span>
                        <i class="fas fa-angle-down"></i>
                    </div>
                    <TopMenuItem TopMenuItem="Activate Stamp"></TopMenuItem>
                    <TopMenuItem TopMenuItem="Activate Stamp"></TopMenuItem>
                    <TopMenuItem TopMenuItem="Activate Stamp"></TopMenuItem>
                </div>
                <div className="intro">
                    <div className="intro-menu col-4">
                    <div className="fa-stack fa-3x intro-icon">
                            <i className="fa fa-circle fa-stack-2x icon-intro-bg"></i>
                            <i className="fas fa-mobile-alt fa-stack-1x icon-intro"></i>
                        </div>
                        <div className="intro-text">
                            <div>
                            <span>Stamp Management  </span>
                            <i class="fas fa-angle-right"></i>
                            <span>  Activate Stamp</span>
                            </div>
                            <div> Activate Stamp</div>
                        </div>
                    </div>
                    <form className="intro-select col-6 form-inline">
                          <label for=""> Select a Batch</label>
                          <select class="form-control" name="" id="" placeholder="Select a Batch">
                            <option>Batch_123</option>
                            <option>Batch_1234</option>
                            <option>Batch_12345</option>
                          </select>
                          <SimpleButton buttonValue="Add a batch"></SimpleButton>
                    </form>
                </div>
            </div>
        );
    }
}

export default TopMenu;