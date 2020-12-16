import React, { Component } from "react";
import { movienightCreate } from "../services/protectedservices";
import { genres } from "../genres.json";

const importedGenres = genres;
const importedGenreArr = Object.keys(importedGenres[0]);

class Movienight extends Component {
  state = {
    roomCreated: false,
    roomName: "",
    roomPassword: "",
    movieArray: [],
    numberMovies: 0,
    genre: "",
    imdbScore: 0,
    participants: 0,
    roomID: "",
    queryHandled: false,
    movieNumber: 0,
  };

  handleCreateNight = (event) => {
    event.preventDefault();
    this.setState({
      roomCreated: true,
    });
  };

  handleQuery = (event) => {
    event.preventDefault();
    const movieQueryData = {
      numberMovies: this.state.numberMovies,
      genre: this.state.genre,
      imdbScore: this.state.imdbScore,
      host: this.props.user._id,
      roomName: this.state.roomName,
      roomPassword: this.state.roomPassword,
      participants: this.state.participants,
    };
    movienightCreate(movieQueryData).then((response) => {
      console.log("This is the response in the JSX file", response);
      let dataReturned = JSON.parse(response.config.data);
      console.log(`host: ${dataReturned.host}`);
      this.setState({
        movieArray: response.data.movieArray,
        numberMovies: response.data.movieArray.length,
        genre: response.data.genre,
        imdbScore: response.data.imdbScore,

        roomID: response.data._id,
        queryHandled: true,
      });
      //this.redirect();
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(this.state[name]);
    this.setState({
      [name]: value,
    });
  };

  handleRightButton() {
    this.setState({
      movieNumber: this.state.movieNumber + 1,
    });
  }

  //The Left button only renders the next element
  handleLeftButton() {
    return;
  }

  redirect = () => {
    this.props.history.push(`/room/${this.state.roomName}`);
  };

  render() {
    if (this.state.queryHandled) {
      return (
        <div>
          <h1>{this.state.roomName}</h1>
          <h2>ID: {this.state.roomID}</h2>
          <p>Number of participants: {this.state.participants}</p>(
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                this.state.movieArray[this.state.movieNumber].poster_path
              }`}
              alt="movie poster"
              style={{ width: "100px" }}
            />
            <p>Title: {this.state.movieArray[this.state.movieNumber].title}</p>
            <p>
              Overview: {this.state.movieArray[this.state.movieNumber].overview}
            </p>
            <p>
              Rating:{" "}
              {this.state.movieArray[this.state.movieNumber].vote_average}
            </p>
            <button onClick={() => this.handleLeftButton()}>Dislike</button>
            <button onClick={() => this.handleRightButton()}>Like</button>
          </div>
          );
        </div>
      );
    } else {
      if (this.state.roomCreated) {
        return (
          <div>
            <h2> You are creating a room called {this.state.roomName} </h2>
            <h2>
              The number of participants will be {this.state.participants}
            </h2>

            <form onSubmit={this.handleQuery} action="">
              <label htmlFor="genre">Select the genre</label>
              <select onChange={this.handleInputChange} name="genre" id="genre">
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
                onChange={this.handleInputChange}
                type="number"
              />{" "}
              <br />
              <label htmlFor="imdbScore">Minimum IMDB rating</label>
              <input
                name="imdbScore"
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                type="text"
                placeholder="Room name"
              />
              <br />
              <label htmlFor="roomPassword">Enter your room password</label>
              <input
                name="roomPassword"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              />
              <br />
              <label htmlFor="participants">Enter number of participants</label>
              <input
                name="participants"
                onChange={this.handleInputChange}
                type="number"
              />
              <br />
              <button type="submit">Create movie night!</button>
            </form>
          </div>
        );
      }
    }
  }
}

export default Movienight;
