import React, { Component } from 'react';

class FormSearch1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    isChange = (event) => {console.log(event.target.value);
        this.setState({
            searchValue: event.target.value
        });
    }
    showButton = () => {
        if(this.props.addUserForm){
            return(<div className="btn btn-block btn-outline-info" onClick = {() => this.props.changeAddUserForm()}>Add new</div>);   
        }
        else{
            return(<div className="btn btn-block btn-outline-secondary" onClick = {() => this.props.changeAddUserForm()}>Close Adding</div>);
        }
    }
    render() {
        return (
            <div className="form-group">
            <div className="btn-group">
                <input type="text" className="form-control" placeholder="Enter the keyword" style={{width: 600}} onChange = {(e) => {this.isChange(e)}} />
                <div className="btn btn-info" onClick = {(x) => this.props.search(this.state.searchValue)}> Search</div>
            </div>
            <div className="btn-group1 mt-3">
                    {this.showButton()}
            </div>
            <div><hr /></div>
            </div>
        );
    }
}

export default FormSearch1;