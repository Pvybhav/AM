import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from "react-bootstrap"
import login from './Login.js'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              {/*<NavItem eventKey={1}><NavLink to = "/">Home</NavLink></NavItem>*/}
              <NavLink to = "/">AM</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}><NavLink to = "/home">Home</NavLink></NavItem>
              <NavItem eventKey={2}><NavLink to = "/stuff">Stuff</NavLink></NavItem>
              <NavDropdown eventKey={3} title="Login as" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} ><NavLink to = "/student">Student</NavLink></MenuItem>
                <MenuItem eventKey={3.2}><NavLink to = "/lecturer">Lecturer</NavLink></MenuItem>
                <MenuItem eventKey={3.3}><NavLink to = "/admin">Admin</NavLink></MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <NavItem eventKey={4}><NavLink to = "/contact">Contact</NavLink></NavItem>
              <NavItem eventKey={5}><NavLink to = "/signup">signup</NavLink></NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1}>Logged in As : vybhav</NavItem>
              <NavItem eventKey={2}><NavLink to = "/home">Logout</NavLink></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
