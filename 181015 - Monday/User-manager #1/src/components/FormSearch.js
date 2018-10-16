import React, { Component } from 'react';

class FormSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUserForm: true,
        }
    }
    changeAddUserForm = () => {
        this.setState(
            {addUserForm: !this.state.addUserForm}
        );
    }
    render() {
        return (
            <div className="form-group">
            <div className="btn-group">
                <input type="text" className="form-control" placeholder="Enter the keyword" style={{width: 600}} />
                <div className="btn btn-info"> Search</div>
            </div>
            <div><hr /></div>
            </div>
        );
    }
}

export default FormSearch;