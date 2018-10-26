import React, { Component } from 'react';
import Card from './../Card';
import styled from 'styled-components';

const Wrapper = styled(Card)`
.card-body{
    float: none;
}
`;
class PackageStamp extends Component {
    render() {
        return (
            <Wrapper>
                <div className="card-header">
                        Package Stamp
                    </div>
                    <div className="card-body product-total">
                        Package Stamp Code  <b> fdsAjKCs</b>
                    </div>
            </Wrapper>
        );
    }
}

export default PackageStamp;