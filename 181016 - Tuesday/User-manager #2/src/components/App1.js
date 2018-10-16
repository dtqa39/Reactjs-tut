import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import FormSearch1 from './FormSearch1';
import TableData from './TableData';
import AddUser1 from './AddUser1';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addUserForm : true
    }
  }
  changeAddUserForm = () => {
    this.setState(
      {addUserForm: !this.state.addUserForm,}
    )
}
 
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
        <div className="row">
          <FormSearch1 changeAddUserForm = {() => this.changeAddUserForm()} addUserForm={this.state.addUserForm}></FormSearch1>
          <TableData></TableData>
          <AddUser1 addUserForm={this.state.addUserForm}></AddUser1>
        </div>
      </div>
      </div>
    );
  }
}

export default App1;
