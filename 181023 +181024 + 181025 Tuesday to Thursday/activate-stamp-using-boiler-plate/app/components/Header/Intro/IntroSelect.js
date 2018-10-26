import React, { Component } from 'react';
import styled from 'styled-components';
import SimpleButton from '../../SimpleButton';

const Wrapper = styled.form`
    float: right;
    margin-top: 10px;

    label{
        color: #556372;
        font-weight: bold;
        margin-right: 20px;
      }
    select:focus{
        border-color: #D9D9D9;
        box-shadow: 0 0 0 0 #fff;
      }
    select:required:invalid {
        color: #DCDFE0;
        font-style: italic;
        font-size: 12px;
      }
    option[value=""][disabled] {
        display: none;
      }
    option{
        color: #2D3E4F;
        font-style: normal;
        font-size: 13px;
        border: 1px solid gray;
      }
    .vl {
        border: 1px solid #EEEEEE;
        height: 35px;
        margin-left: 20px;
      }
    .btn{
        background-color: #85C441;
      }
    .btn:hover{
        background-color: #34495E;
        color: #a0b6bf;
    }
`;

class IntroSelect extends Component {
    render() {
        return (
            <Wrapper className="col-6 form-inline">
                <label for=""> Select a Batch</label>
                <select className="form-control" name="" id="" width="320" style={{width: 320}} required>
                <option value="" selected hidden disable>Select a Batch</option>
                <option>Batch_123</option>
                <option>Batch_1234</option>
                <option>Batch_12345</option>
                </select>
                <span className="vl"></span>
                <SimpleButton buttonValue="Add a batch"></SimpleButton>
            </Wrapper>
        );
    }
}

export default IntroSelect;