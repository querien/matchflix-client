import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function HomePage(props) {
  return (
    <div className="App">
      <Link to="/" className="nav__projectName">
        Matchflix TEST
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to="/protected" className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
            <Profile user={props.user} />
          </>
        ) : (
          <>
            <Link to="/auth/signup" className="authLink">
              Signup
            </Link>
            <Link to="/auth/login" className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
