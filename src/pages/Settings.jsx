import React, { Component } from "react";
import { settings } from "../services/protectedservices";

class Settings extends Component {
  state = {
    username: this.props.user.username,
    password: this.props.user.password,
    confirmPassword: this.props.user.password,
    errorMessage: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        errorMessage: "Passwords must be the same",
      });
      return;
    } else if (this.state.password.length < 8) {
      this.setState({
        errorMessage: "New password is too short",
      });
    }
    console.log("passwords match!");

    const credentials = {
      id: this.props.user._id,
      username: this.state.username,
    };

    if (this.props.user.password !== this.state.password) {
      credentials.password = this.state.password;
    }

    settings(credentials).then((res) => {
      console.log(res);
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Edit Your Profile</h1>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="Username">Change Username</label>
          <input
            className="inputField"
            name="username"
            type="text"
            placeholder={this.props.user.username}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          <p>
            <label htmlFor="Password">Change Password</label>
            <input
              className="inputField"
              type="password"
              name="password"
              placeholder="Type New Password"
              onChange={this.handleInputChange}
            />{" "}
            <input
              className="inputField"
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              onChange={this.handleInputChange}
            />{" "}
          </p>
          <br />
          <button className="smallButton" type="submit">
            Confirm Changes
          </button>
          {/* <button className="smallButton" type="submit">
            Delete profile
          </button> */}
        </form>
        {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : <> </>}
      </div>
    );
  }
}

export default Settings;
