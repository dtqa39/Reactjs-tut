import React, { Component } from 'react';

class FormSearch1 extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="form-group">
            <div className="btn-group">
                <input type="text" className="form-control" placeholder="Enter the keyword" style={{width: 600}} />
                <div className="btn btn-info"> Search</div>
            </div>
            <div className="btn-group1">
                    <div className="btn btn-block btn-outline-secondary" onClick = {() => this.props.changeAddUserForm()}>Add new</div>
                    <div className="btn btn-block btn-outline-info" onClick = {() => this.props.changeAddUserForm()}>Close Adding</div>
            </div>
            <div><hr /></div>
            </div>
        );
    }
}

export default FormSearch1;