import React, { Component } from "react";
import { movienightCreate } from "../services/protectedservices";
import { genres } from "../genres.json";

const importedGenres = genres;
const importedGenreArr = Object.keys(importedGenres[0]);

class Movienight extends Component {
  props = {
    roomCreated: false,
    queryHandled: false,
  };

  handleCreateNight = (event) => {
    event.preventDefault();
    this.setState({
      roomCreated: true,
    });
  };

  handleQuery = (event) => {
    this.props.handleQuery(event).then(() => {
      this.redirect();
    });
  };

  redirect = () => {
    this.props.history.push(`/room/${this.props.roomID}`);
  };

  render() {
    // if (this.state.queryHandled) {
    //   return (
    //     <div>
    //       <h1>{this.state.roomName}</h1>
    //       <h2>ID: {this.state.roomID}</h2>
    //       <p>Number of participants: {this.state.participants}</p>
    //       {this.state.movieArray.map((movie) => {
    //         return (
    //           <div>
    //             <img
    //               src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
    //               alt="movie poster"
    //               style={{ width: "100px" }}
    //             />
    //             <p>Title: {movie.title}</p>
    //             <p>Overview: {movie.overview}</p>
    //             <p>Rating: {movie.vote_average}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // } else {
    if (this.state.roomCreated) {
      return (
        <div>
          <h2> You are creating a room called {this.props.roomName} </h2>
          <h2>The number of participants will be {this.props.participants}</h2>

          <form onSubmit={this.handleQuery} action="">
            <label htmlFor="genre">Select the genre</label>
            <select
              onChange={this.props.handleInputChange}
              name="genre"
              id="genre"
            >
              {importedGenreArr.map((element) => {
                return (
                  <option key={element} value={element}>
                    {element}
                  </option>
                );
              })}
            </select>
            <br />
            <label htmlFor="numberMovies">How many movies?</label>
            <input
              name="numberMovies"
              onChange={this.props.handleInputChange}
              type="number"
            />{" "}
            <br />
            <label htmlFor="imdbScore">Minimum IMDB rating</label>
            <input
              name="imdbScore"
              onChange={this.props.handleInputChange}
              type="number"
            />{" "}
            <br />
            <button>Generate movies!</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Create your movie night</h1>

          <form onSubmit={this.handleCreateNight} action="">
            <label htmlFor="roomName">Enter your room name</label>
            <input
              name="roomName"
              onChange={this.props.handleInputChange}
              type="text"
              placeholder="Room name"
            />
            <br />
            <label htmlFor="roomPassword">Enter your room password</label>
            <input
              name="roomPassword"
              onChange={this.props.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <br />
            <label htmlFor="participants">Enter number of participants</label>
            <input
              name="participants"
              onChange={this.props.handleInputChange}
              type="number"
            />
            <br />
            <button type="submit">Create movie night!</button>
          </form>
        </div>
      );
    }
  }
  // }
}

export default Movienight;
