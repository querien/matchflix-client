import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div className="flexContainer">
        <h1> Hello there {this.props.user.username}!</h1>

        <Link className=" buttonClass" to={"/settings"}>
          Edit your profile
        </Link>
        <Link className=" buttonClass" to={"/movienight"}>
          Create a movie night
        </Link>
        <Link className=" buttonClass" to={"/joinroom"}>
          Join a movie night
        </Link>
      </div>
    );
  }
}

export default Profile;
