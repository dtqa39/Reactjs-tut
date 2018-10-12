import React, { Component } from 'react';
import './../css/App.css';
import Nav from "./../components/Nav";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
// import Download from './Download';
// import Feature from './Feature';
// import Contact from './Contact';
import RoutingURL from '../Router/RoutingURL';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
          <div id="page-top">
            <Nav></Nav>
            {/* <Header></Header> */}
            <RoutingURL></RoutingURL>
            {/* <Download></Download>
            <Feature></Feature>
            <Contact></Contact> */}
            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
