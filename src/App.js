import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Route,
  // NavLink,
  // HashRouter,
  BrowserRouter
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import Contact from "./Contact";
import Stuff from "./Stuff"
import Login from './Login.js';
import Student from "./StudentPage.js"
import Lecturer from "./LecturerPage.js"
import Admin from "./AdminPage.js"
import Student_HomePage from "./Student_Home.js"
import Lecturer_HomePage from "./Lecturer_Home.js"
import Admin_HomePage from "./Admin_Home.js"
import Error from "./Error.js"

import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from "react-bootstrap"

class App extends Component {
  handleNavItem(event){
    event.props.history.push('/login')
  }

  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            AM
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>Link</NavItem>
            <NavItem eventKey={2} href="/login">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

        <BrowserRouter>
            {/*<RadioButton />*/}
            <div className="content">
              <Route path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/login" component={Login}/>
              <Route path="/student" component={Student}/>
              <Route path="/lecturer" component={Lecturer}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/student_homepage" component={Student_HomePage}/>
              <Route path="/lecturer_homepage" component={Lecturer_HomePage}/>
              <Route path="/admin_homepage" component={Admin_HomePage}/>
              <Route path="/error" component={Error}/>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
