import React, { Component } from "react";
import Spinner from "../components/Loading/Spinner";
import "./waiting.css";
import { updateFinishedUsers } from "../services/individualMovie";
import { getMovieNight } from "../services/individualMovie";

class FinalPage extends Component {
  state = {
    choices: null,
    loading: true,
    intervalId: null,
  };
  getMovieNight = () => {
    return getMovieNight(this.props.roomID).then((response) => {
      console.log(response.data);
      if (response.data.length) {
        clearInterval(this.state.intervalId);
        return this.setState({ loading: false, results: response.data });
      }
    });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  componentDidMount() {
    const userFinished = {
      participantID: this.props.user._id,
      movienightID: this.props.roomID,
    };

    updateFinishedUsers(userFinished).then(() => {
      const intervalId = setInterval(this.getMovieNight, 5000);
      this.setState({ intervalId });
    });
  }

  render() {
    console.log("HELLO", this.state);
    console.log("PROPS", this.props);
    if (this.state.loading) {
      return (
        <div>
          <h1>Waiting for the others to finish</h1>
          <Spinner />
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <p>All the users have voted, this is the outcome!</p>
          {this.state.results.map((element) => {
            return (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                  alt="movie poster"
                  style={{ width: "200px" }}
                />
                <h2> {element.title}</h2>
                <p className="description phoneContainer">{element.overview}</p>
                <p>Rating: {element.vote_average}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default FinalPage;
