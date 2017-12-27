import React, { Component } from "react";
import ReactDOM from 'react-dom';
 
class Student extends Component {
  constructor(props){
    super(props);
    this.state = {username : "vybhav", password : "password"}
  }
  handleUserNameChange(username){
    this.setState({username : username.target.value})
  }
  handlePasswordChange(password){
    alert(password.target.value)
  }
  handleStudentFormSubmit(event){
    alert(this.state.username)
  }
  clearFormValues(event){
    this.setState({username : "", password : ""})
    ReactDOM.findDOMNode(this.refs.userName).focus();
  }
  render() {
    return (
      <div>
        <h2>Student Login</h2>
        <form ref = "student_form" onSubmit = {this.handleStudentFormSubmit.bind(this)}>
          <input type = "text" name = "UserName" value = {this.state.username} ref = "userName" placeholder = "Enter your username here" onChange = {this.handleUserNameChange.bind(this)} /><br />
          <input type = "password" name = "Password" value = {this.state.password} ref = "password" placeholder = "Enter your Password here" onChange = {this.handlePasswordChange.bind(this)} /><br />
          <button type = "submit" ref = "submitButton"> Login </button>
          <button type = "reset" ref = "resetButton" onClick = {this.clearFormValues.bind(this)}> Reset </button>
        </form>
      </div>
    );
  }
}

export default Student;
