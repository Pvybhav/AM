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
import HomePage from "./HomePage.js"
import Contact from "./Contact";
import Stuff from "./Stuff"
import RadioButton from "./RadioButton.js"
import Login from './Login.js';
import Student from "./StudentPage.js"
import Lecturer from "./LecturerPage.js"
import Admin from "./AdminPage.js"
import Student_HomePage from "./Student_Home.js"
import Lecturer_HomePage from "./Lecturer_Home.js"
import Admin_HomePage from "./Admin_Home.js"
import Error from "./Error.js"

// import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from "react-bootstrap"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            {/*<RadioButton />*/}
            <div className="content">
              <Route path="/" component={Home}/>
              <Route path="/home" component={HomePage}/>              
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/login" component={Login}/>
              <Route path="/student" component={Student}/>
              <Route path="/lecturer" component={Lecturer}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/student_homepage" component={Student_HomePage}/>
              <Route path="/lecturer_homepage" component={Lecturer_HomePage}/>
              <Route path="/admin_homepage" component={Admin_HomePage}/>
              <Route path="/listOfUsers" component={RadioButton}/>

              <Route path="/error" component={Error}/>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
