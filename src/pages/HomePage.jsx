import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import logo from "../MATCHFLIX.png";
import "./homepage.css";

function HomePage(props) {
  return (
    <div className="App">
      <Link to="/" className="nav__projectName"></Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <img className="logoSizing" src={logo} alt="Matchflix" />
            <br />
            <Profile user={props.user} />
            <button className="buttonClass" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <div className="homepageContainer">
            <img className="logoSizing" src={logo} alt="logo" />
            <h3>The new way to browse movies</h3>
            <h4 className="subtitle">
              Create a movie night, vote and decide on a movie with friends
            </h4>
            <br></br>
            <Link to="/auth/signup" className=" buttonClass authLink">
              Sign up
            </Link>
            <Link to="/auth/login" className="buttonClass authLink">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
