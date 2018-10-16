import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUserForm : true
        }
    }
    changeAddUserForm = () => {
        this.setState({addUserForm: !this.state.addUserForm});
    }
    addUserFormShow = () => {
        //true => button Add
        //false => button Close + form AddUser
        if(this.state.addUserForm === true){
            console.log("true");
            return(
                <div className="btn btn-block btn-outline-secondary" onClick = {() => this.changeAddUserForm()}>Add new</div>
            );
        }
        else{
            return(
                <div>
                    <div className="btn btn-block btn-outline-info" onClick = {() => this.changeAddUserForm()}>Close Adding</div>
                    <div className="card border-primary mb-3 mt-2">
                    <div className="card-header">Add new user</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <label> Username</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label> Phone number</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                        <label> Author</label>
                        <select className="custom-select">
                            <option>Default</option>
                            <option>Admin</option>
                            <option>Moderator</option>
                            <option>User</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block btn-primary">
                        Add
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="col-3">
            {this.addUserFormShow()}
            </div>
        );
    }
}

export default AddUser;