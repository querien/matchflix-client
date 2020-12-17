import React, { Component } from "react";
import { login } from "../services/auth";
import "./Signup";
import "./homepage.css";
import logo from "../MATCHFLIX.png";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    error: null,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`${name}: ${value}`);
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
    login(credentials).then((res) => {
      if (!res.status) {
        console.log(res);
        console.log(`The error gets here: ${res.errorMessage}`);
        this.setState({ error: res.errorMessage });
      } else {
        localStorage.setItem("accessToken", res.data.accessToken);
        this.props.authenticate(res.data.user);
        this.props.history.push("/profile");
      }
    });
  };

  render() {
    return (
      <div>
        <img className="logoSizing" src={logo} alt="logo" />
        <h1>Log In</h1>

        <form onSubmit={this.handleFormSubmission} className="signup__form">
          <label htmlFor="input-username">Username</label>
          <br />
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
          <br />
          <label htmlFor="input-password">Password</label> <br />
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
          <br />
          <button className="buttonSignup" type="submit">
            Submit
          </button>
        </form>

        {this.state.error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{this.state.error}</p>
          </div>
        )}
      </div>
    );
  }
}
