import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import RoutingURL from '../Router/RoutingURL';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <RoutingURL></RoutingURL>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
