import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import FormSearch from './FormSearch';
import TableData from './TableData';
import AddUser from './AddUser';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
        <div className="row">
          <FormSearch></FormSearch>
          <TableData></TableData>
          <AddUser></AddUser>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
