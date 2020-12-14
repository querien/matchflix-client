import React, { Component } from "react";
import io from "socket.io-client";

class Moviedisplay extends Component {
  state = {
    movieArr: [],
    score: [],
  };

  componentDidMount() {
    // const socket = io("ws://localhost:5005");
    // //socket.on('connection', )
    // socket.on("message", (response) => {
    //   console.log(`${response}`);
    // });
  }

  //Steps in rendering of the movies
  //Load the array incl images
  //Then loop over the object and display each movie title, description and image

  //The right button both increases score property by 1 and goes the next element of the loop
  handleRightButton() {
    //this.setState;

    return;
  }

  //The Left button only renders the next element
  handleLeftButton() {
    return;
  }

  render() {
    return (
      <div>
        <h2>The movies are supposed to be displayed here</h2>

        <button onClick={() => this.handleRightButton()}>Dislike </button>
        <button onClick={() => this.handleRightButton()}>Like</button>
      </div>
    );
  }
}

export default Moviedisplay;
