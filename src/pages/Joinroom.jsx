import React, { Component } from "react";

export default class Joinroom extends Component {
  handleJoinNight = (event) => {
    this.props.handleJoinNight(event).then(() => {
      if (this.props.roomID) {
        this.redirect();
      } else {
        console.log("You pressed the button and nothing happend");
      }
    });
  };

  redirect = () => {
    this.props.history.push(`/room/${this.props.roomID}`);
  };

  render() {
    return (
      <div>
        <form
          className="inputContainer"
          onSubmit={this.handleJoinNight}
          action=""
        >
          <label htmlFor="roomName">What is the name of the movie night?</label>
          <input
            className="inputField"
            name="roomName"
            onChange={this.props.handleInputChange}
            type="text"
            placeholder="Ask the host"
          />
          <br />
          <label htmlFor="roomPassword">What is the password?</label>
          <input
            className="inputField"
            name="roomPassword"
            onChange={this.props.handleInputChange}
            placeholder="Ask the host"
            type="password"
          />
          <br />
          <button className="smallButton" type="submit">
            Start Voting!
          </button>
        </form>

        <p>{this.props.joinErr}</p>
      </div>
    );
  }
}
