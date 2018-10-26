import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .fruit-detail-label{
        color: #96A6A6;
    }
`;

class FruitDetail extends Component {
    render() {
        return (
            <Wrapper className="form-group row">
                <label className={"col-sm-" + this.props.col1 + " fruit-detail-label"}>{this.props.label}</label>
                <div className={"col-sm-" + this.props.col2} style={{padding: 0}}>
                {this.props.detail}
                </div>
            </Wrapper>
        );
    }
}

export default FruitDetail;