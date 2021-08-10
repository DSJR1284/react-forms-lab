import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  state = {
    username: "",
    password: ""
  } 

  handleInputChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

   // another way of handling submit without conditional? 
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.handleLogin(this.state)
  //   this.setState({usernamme: "", password: ""})
  // }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            value={this.state.username}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            value={this.password}
            onChange={this.handleInputChange}  />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
