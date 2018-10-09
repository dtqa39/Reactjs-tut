import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header';
import Section1 from './Component/Section/Section1';

class App extends Component {
  render() {
    return (
      <div className="_014">
        <TopMenu></TopMenu>
        <Header></Header>
        <Section1></Section1>
      </div>
    );
  }
}

export default App;
