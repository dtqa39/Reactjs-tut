import React, { Component } from 'react';
import './../App.css';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RoutingURL from '../Router/RoutingURL';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Nav></Nav>
        <RoutingURL></RoutingURL>
        <Footer></Footer>
      </div>
      </Router>
    );
  }
}

export default App;
