import React from 'react';
import LoginForm from './LoginForm.js'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  signIn(username, password) {
      this.setState({
        user: {
          username,
          password,
        }
      })
  }

  signOut() {
      this.setState({user: null})
  }

  render() {
    const Welcome = ({user, onSignOut})=> {
    return (
        <div>
          Welcome <strong>{user.username}</strong>!
          <a href="javascript:;" onClick={onSignOut}>Sign out</a>
        </div>
      )
    }
    return (
        <div>
        <h1>My cool App</h1>
        {
          (this.state.user) ?
            <Welcome
             user={this.state.user}
             onSignOut={this.signOut.bind(this)}
            />
          :
            <LoginForm
             onSignIn={this.signIn.bind(this)}
            />
        }
        </div>
    );
  }
};
