import React, { Component } from 'react';

class AddUser1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
   
    addUserFormShow = () => {
        //true => button Add
        //false => button Close + form AddUser
        if(this.props.addUserForm === false){
            return(
                <div className="col">
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
        console.log(this.props.addUserForm);
        return (
            <div>
            {this.addUserFormShow()}
            </div>
        );
    }
}

export default AddUser1;