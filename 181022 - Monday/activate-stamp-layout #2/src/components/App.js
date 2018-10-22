import React, { Component } from 'react';
import './../css/App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import Sidebar from './Sidebar/Sidebar';
import TopMenu from './Top Menu/TopMenu';
import MainContent from './Main Content/MainContent';
class App extends Component {
  constructor(props) {
      super(props);

      
      this.state = {
         
      };
  }

 
  render() {
      return (
          <div className="ctn">
                <Sidebar></Sidebar>
                <div className="main">
                    <TopMenu></TopMenu>
                    <MainContent></MainContent>
                </div>
                
          </div>
      );
  }
}

export default App;