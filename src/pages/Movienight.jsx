import React, { Component } from "react";
import { genres } from "../genres.json";
import QueryHandled from "../components/MovieNight/QueryHandled";
import RoomCreated from "../components/MovieNight/RoomCreated";
import CreateNight from "../components/MovieNight/CreateNight";

const importedGenres = genres;
const importedGenreArr = Object.keys(importedGenres[0]);

class Movienight extends Component {
  state = {
    roomCreated: false,
  };

  handleCreateNight = (event) => {
    event.preventDefault();
    console.log(event);
    if (this.props.roomName === "" || this.props.roomPassword === "") {
      return this.setState({
        error: "The necessary fields must not be empty",
      });
    }
    if (this.props.participants < 1) {
      return this.setState({
        error: "There needs to be at least one participant",
      });
    }
    this.setState({
      roomCreated: true,
    });
  };

  handleQuery = (event) => {
    event.preventDefault();
    this.props.handleQuery(event).then(() => {
      this.redirect();
    });
  };

  redirect = () => {
    this.props.history.push(`/room/${this.props.roomID}`);
  };

  redirectToWaitingRoom = () => {
    this.props.history.push(`/results/${this.props.roomID}`);
  };

  handleRightButton = (event) => {
    event.preventDefault();
    this.props.handleRightButton(event).then(() => {
      if (this.props.userReady) {
        this.redirectToWaitingRoom();
      }
    });
  };

  //The Left button only renders the next element
  handleLeftButton = (event) => {
    event.preventDefault();
    this.props.handleLeftButton(event).then(() => {
      if (this.props.userReady) {
        this.redirectToWaitingRoom();
      }
    });
  };

  render() {
    if (this.props.queryHandled) {
      return (
        // <div>
        <QueryHandled
          roomName={this.props.roomName}
          roomID={this.props.roomID}
          participants={this.props.participants}
          movieNumber={this.props.movieNumber}
          movieArray={this.props.movieArray}
          handleLeftButton={this.handleLeftButton}
          handleRightButton={this.handleRightButton}
        />
      );
    } else {
      if (this.state.roomCreated) {
        return (
          <div>
            <RoomCreated
              participants={this.props.participants}
              roomName={this.props.roomName}
              handleQuery={this.handleQuery}
              handleInputChange={this.props.handleInputChange}
              importedGenreArr={importedGenreArr}
            />
            {this.props.error ? <p>{this.props.error}</p> : <div></div>}
          </div>
        );
      } else {
        return (
          <div>
            <CreateNight
              handleCreateNight={this.handleCreateNight}
              handleInputChange={this.props.handleInputChange}
            />
            {this.state.error ? <p>{this.state.error}</p> : <div></div>}
          </div>
        );
      }
    }
  }
}

export default Movienight;
