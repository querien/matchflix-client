import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import logo from "../MATCHFLIX.png";

function HomePage(props) {
  return (
    <div className="App">
      <Link to="/" className="nav__projectName"></Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <img className="logoStyling" src={logo} alt="Matchflix" />
            <br />

            <Profile user={props.user} />
            <button
              className="nav-logoutbtn buttonClass"
              onClick={props.handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <br></br>
            <br></br>
            <h1>Welcome to Matchflix!</h1>
            <br></br>
            <h2>Creat, Join and Vote on a Movienight! </h2>
            <br></br>
            <Link to="/auth/signup" className=" buttonClass authLink">
              Signup
            </Link>
            <Link to="/auth/login" className="buttonClass authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
