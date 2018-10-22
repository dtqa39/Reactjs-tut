import React, { Component } from 'react';

class FruitDetail extends Component {
    render() {
        return (
            <div className="form-group row fruit-detail">
                <label className={"col-sm-" + this.props.col1 + " fruit-detail-label"}>{this.props.label}</label>
                <div className={"col-sm-" + this.props.col2} style={{padding: 0}}>
                {this.props.detail}
                </div>
            </div>
        );
    }
}

export default FruitDetail;