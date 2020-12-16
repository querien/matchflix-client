import React, { Component } from "react";
import "./waiting.css";
//User status: User ready
// If the user is ready, we can render the loading screen, that has a set interval and refreshes.
//

class FinalPage extends Component {
  render() {
    return (
      <div>
        <h1>Waiting for the others to finish</h1>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default FinalPage;
