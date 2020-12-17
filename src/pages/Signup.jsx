import React, { Component } from "react";
import { signup } from "../services/auth";
import "./auth.css";
import "./homepage.css";
import logo from "../MATCHFLIX.png";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    error: null,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };
    signup(credentials).then((res) => {
      // successful signup
      console.log(res);
      if (!res.status) {
        // unsuccessful signup
        // there was a not goot singup
        // deal with it here
        this.setState({ error: res.errorMessage });
      } else {
        localStorage.setItem("accessToken", res.data.accessToken);
        this.props.authenticate(res.data.user);
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <div>
        <img className="logoSizing" src={logo} alt="logo" />
        <h2>Join us!</h2>
        <form onSubmit={this.handleFormSubmission} className="auth__form">
          <label htmlFor="input-username">Create a username</label>
          <input
            className="inputField"
            id="input-username"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="input-password">Create a password</label>
          <input
            className="inputField"
            id="input-password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
            minLength="8"
          />
          <button className="buttonSignup" type="submit">
            Submit
          </button>

          {this.state.error && (
            <div className="error-block">
              <p>There was an error submiting the form:</p>
              <p>{this.state.error}</p>
            </div>
          )}
        </form>
      </div>
    );
  }
}
