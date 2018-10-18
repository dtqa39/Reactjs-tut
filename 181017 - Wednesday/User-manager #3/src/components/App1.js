import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import FormSearch1 from './FormSearch1';
import TableData from './TableData';
import AddUser1 from './AddUser1';
import Data from './Data.json';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addUserForm : true,
      data: Data
    }
  }
  changeAddUserForm = () => {
    this.setState(
      {addUserForm: !this.state.addUserForm,}
    )
}
 search = (v) => {
   console.log(v);
 }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
        <div className="row">
          <FormSearch1 changeAddUserForm = {() => this.changeAddUserForm()} addUserForm={this.state.addUserForm} search = {(value) => this.search(value)}></FormSearch1>
          <TableData data = {this.state.data}></TableData>
          <AddUser1 addUserForm={this.state.addUserForm}></AddUser1>
        </div>
      </div>
      </div>
    );
  }
}

export default App1;
