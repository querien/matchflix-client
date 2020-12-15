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
        <h1>{this.props.roomName}</h1>
        <h2>ID: {this.props.roomID}</h2>
        <p>Number of participants: {this.props.participants}</p>
        {this.props.movieArray.map((movie) => {
          return (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie poster"
                style={{ width: "100px" }}
              />
              <p>Title: {movie.title}</p>
              <p>Overview: {movie.overview}</p>
              <p>Rating: {movie.vote_average}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Moviedisplay;
