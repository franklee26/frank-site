import React from "react";
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email,
      password: props.user.password,
      password_confirmation: props.user.password_confirmation
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(
      this
    );
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handlePasswordConfirmationChange(event) {
    this.setState({ password_confirmation: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          name="user[name]"
          value={this.state.name}
          onChange={event => this.handleNameChange(event)}
        />
        <label>Email</label>
        <input
          type="email"
          name="user[email]"
          value={this.state.email}
          onChange={event => this.handleEmailChange(event)}
        />
        <label>Password</label>
        <input
          type="password"
          name="user[password]"
          value={this.state.password}
          onChange={event => this.handlePasswordChange(event)}
        />
        <label>Confirm your password</label>
        <input
          type="password"
          name="user[password_confirmation]"
          value={this.state.password_conformation}
          onChange={event => this.handlePasswordConfirmationChange(event)}
        />
        <input type="submit" value="Create User" />
      </div>
    );
  }
}

export default UserForm;
