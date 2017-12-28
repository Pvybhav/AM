import React from 'react';

export default class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption: 'Student'}
  }
  handleOptionChange(changeEvent) {
      console.log(changeEvent.target.value)
      this.setState({selectedOption: changeEvent.target.value});
  }
  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.input.value);
  //   event.preventDefault();
  // }
  handleFormSubmit(formSubmitEvent) {
  formSubmitEvent.preventDefault();
  // alert('Redirecting to: ' + this.state.selectedOption);
  this.props.history.push('/' + this.state.selectedOption.toLowerCase());
  }
    render() {
        return (
            <div>
              {/*<form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                  Name:
                  <input type="text" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit" />
              </form>*/}

              <form onSubmit={this.handleFormSubmit.bind(this)}>
              <div className="radio">
                <label>
                  <input type="radio" value="Student" checked={this.state.selectedOption === 'Student'}
                      onChange={this.handleOptionChange.bind(this)} />
                  Student
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="Lecturer" checked={this.state.selectedOption === 'Lecturer'}
                      onChange={this.handleOptionChange.bind(this)} />
                  Lecturer
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="Admin" checked={this.state.selectedOption === 'Admin'}
                      onChange={this.handleOptionChange.bind(this)} />
                  Admin
                </label>
              </div>
              <button type="submit">Login</button>
              </form>
            </div>
        );
    }
};
