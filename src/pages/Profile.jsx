import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../MATCHFLIX.png";
import "./homepage.css";

class Profile extends Component {
  render() {
    return (
      <div className="flexContainer">
        <h1> Hello, {this.props.user.username}!</h1>
        <br></br>
        <Link className=" buttonClass" to={"/movienight"}>
          <strong>
            <span color="red">Create</span> a Movie Night
          </strong>
        </Link>
        <Link className=" buttonClass" to={"/joinroom"}>
          <strong>Join a Movie Night</strong>
        </Link>
        <br></br>
        <br></br>
        <Link className=" buttonClass" to={"/settings"}>
          Edit Your Profile
        </Link>
      </div>
    );
  }
}

export default Profile;
