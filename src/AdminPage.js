import React, { Component } from "react";
import ReactDOM from 'react-dom';

export default class Student extends Component {
  constructor(props){
    super(props);
    this.state = {username : "vybhav", password : "vybhav"}
  }

  handleUserNameChange(username){
    this.setState({username : username.target.value})
  }

  handlePasswordChange(password){
    console.log(password.target.value)
    this.setState({password : password.target.value})
  }

  handleAdminFormSubmit(event){
    if(this.state.username === "vybhav" && this.state.password === "vybhav"){
      this.props.history.push('/admin_homepage')
    }
    else{
      this.props.history.push('/error')
    }
  }

  clearFormValues(event){
    this.setState({username : "", password : ""})
    ReactDOM.findDOMNode(this.refs.userName).focus();
  }

  render() {
    return (
      <div>
        <h2>Admin Login</h2>
        <form ref = "admin_form" onSubmit = {this.handleAdminFormSubmit.bind(this)}>
          <input type = "text" name = "UserName" value = {this.state.username} ref = "userName" placeholder = "Enter your username here" onChange = {this.handleUserNameChange.bind(this)} /><br />
          <input type = "password" name = "Password" value = {this.state.password} ref = "password" placeholder = "Enter your Password here" onChange = {this.handlePasswordChange.bind(this)} /><br />
          <button type = "submit" ref = "submitButton"> Login </button>
          <button type = "reset" ref = "resetButton" onClick = {this.clearFormValues.bind(this)}> Reset </button>
        </form>
      </div>
    );
  }
}
