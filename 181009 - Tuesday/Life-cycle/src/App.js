import React, { Component } from 'react';
import './App.css';
import Ex1 from './Example/Ex1'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "init"
    }
  }
  
  
  componentWillMount() {
    console.log("componentWillMount is running");
  }
  componentDidMount() {
    console.log("componentDidMount is running");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate is running");
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate is running");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate is running");
  }
  
  stateUpdate = () => {
    this.setState({
      status: "Updated status"
    })
  }
  render() {
    console.log("This is render running");
    return (
      <div className="App">
        <Ex1 name = {this.state.status}></Ex1>
        <button onClick={() => this.stateUpdate()}>Change State</button>
      </div>
    );
  }
}

export default App;
