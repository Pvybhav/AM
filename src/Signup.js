import React, { Component } from "react";
var users_list = require('./users.json');

export default class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {username : "", password : "", confirm_password : ""}
  }
  handleUserNameChange(username){
    this.setState({username : username.target.value})
    console.log(this.state.username);
  }
  handlePasswordChange(password){
    this.setState({password : password.target.value})
    console.log(this.state.password);
  }
  handleConfirmPasswordChange(confirm_password){
    this.setState({confirm_password : confirm_password.target.value})
    console.log(this.state.confirm_password);
  }
  handleSignup(e) {
    e.preventDefault();
    Object.keys(users_list).map(function(keyName, keyIndex) {
      // console.log(users_list[keyName]);
      users_list[keyName].map((user) => {console.log(user)
                                        })
    {/*users_list[keyName].map((user) => {
                             if(user["username"] === this.state.username){
                               console.log("duplicate")
                               alert("please choose another username")
                             }
                             else{
                               if(this.state.password === this.state.confirm_password){
                                 console.log("matched");
                               }
                             }
                           }
                  )*/}
    })

  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSignup.bind(this)}>
        <h3>Signup</h3>
        <input type="text" ref="username" placeholder="enter your username" onChange = {this.handleUserNameChange.bind(this)}/>
        <input type="password" ref="password" placeholder="enter your password" onChange = {this.handlePasswordChange.bind(this)}/>
        <input type="password" ref="confirm-password" placeholder="re-enter your password" onChange = {this.handleConfirmPasswordChange.bind(this)}/>
        <input type="submit" value="Login" />
      </form>
      </div>
    );
  }
}
