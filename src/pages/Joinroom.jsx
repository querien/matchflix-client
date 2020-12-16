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
          <label htmlFor="roomName">
            Enter the name of the room you're trying to join
          </label>
          <input
            className="inputField"
            name="roomName"
            onChange={this.props.handleInputChange}
            type="text"
            placeholder="Room name"
          />
          <br />
          <label htmlFor="roomPassword">Enter the room's password</label>
          <input
            className="inputField"
            name="roomPassword"
            onChange={this.props.handleInputChange}
            placeholder="Enter password"
            type="password"
          />
          <br />
          <button className="smallButton" type="submit">
            Join a movie night!
          </button>
        </form>

        <p>{this.props.joinErr}</p>
      </div>
    );
  }
}
