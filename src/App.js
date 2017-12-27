import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Route,
  // NavLink,
  // HashRouter,
  BrowserRouter
} from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Stuff from "./Stuff"
import Login from './Login.js';
import Student from "./StudentPage.js"
import Lecturer from "./LecturerPage.js"
import Admin from "./AdminPage.js"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*<RadioButton />*/}
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
            <Route path="/student" component={Student}/>
            <Route path="/lecturer" component={Lecturer}/>
            <Route path="/admin" component={Admin}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
