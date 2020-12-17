import React, { Component } from "react";
import { settings } from "../services/protectedservices";

class Settings extends Component {
  state = {
    username: this.props.user.username,
    password: this.props.user.password,
<<<<<<< HEAD
    confirmPassword: "",
=======
    confirmPassword: this.props.user.password,
>>>>>>> dev
    errorMessage: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        errorMessage: "Passwords must be the same",
      });
      return;
<<<<<<< HEAD
=======
    } else if (this.state.password.length < 8) {
      this.setState({
        errorMessage: "New password is too short",
      });
>>>>>>> dev
    }
    console.log("passwords match!");

    const credentials = {
      id: this.props.user._id,
      username: this.state.username,
<<<<<<< HEAD
      password: this.state.password,
    };
    settings(credentials).then((res) => {
      console.log(res);
    });
  };

=======
    };

    if (this.props.user.password !== this.state.password) {
      credentials.password = this.state.password;
    }

    settings(credentials).then((res) => {
      console.log(res);
    });
  };

>>>>>>> dev
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
<<<<<<< HEAD
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="Username">Change username</label>
          <input
=======
        <h2>Settings</h2>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="Username">Change username</label>
          <input
            className="inputField"
>>>>>>> dev
            name="username"
            type="text"
            placeholder={this.props.user.username}
            onChange={this.handleInputChange}
          />{" "}
          <br />
<<<<<<< HEAD
          <label htmlFor="Password">Change password</label>
          <input
            type="password"
            name="password"
            placeholder="Type new password"
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            onChange={this.handleInputChange}
          />
          <button type="submit">Update settings</button>
=======
          <p>
            <label htmlFor="Password">Change password</label>
            <input
              className="inputField"
              type="password"
              name="password"
              placeholder="Type new password"
              onChange={this.handleInputChange}
            />{" "}
            <input
              className="inputField"
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              onChange={this.handleInputChange}
            />{" "}
          </p>
          <br />
          <button className="smallButton" type="submit">
            Update settings
          </button>
          {/* <button className="smallButton" type="submit">
            Delete profile
          </button> */}
>>>>>>> dev
        </form>
        {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : <> </>}
      </div>
    );
  }
}

export default Settings;
