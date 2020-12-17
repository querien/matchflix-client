import React, { Component } from "react";
import Spinner from "../components/Loading/Spinner";
import "./waiting.css";
import "./finalPage.css";
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
    if (this.state.loading) {
      return (
        <div>
          <h2>And the winner is ... </h2>
          <Spinner />
          <h3>Waiting for your friends to finish voting</h3>
        </div>
      );
    } else {
      return this.state.results.map((element, index) => {
        return (
          <div className="resultsContainer">
            <div className="background">
              <img
                className="posterStyling"
                src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                alt="movie poster"
              />
              <p className="layer">{index + 1}</p>
            </div>

            <table className="resultsContainerSub">
              <tr>
                <td className="movieTitle">{element.title}</td>
              </tr>
              <tr>
                <td className="description">{element.overview}</td>
              </tr>
              <tr>
                <td>Likes: {element.numVotes}</td>
              </tr>
              <tr>
                <td> Rating: {element.vote_average}</td>
              </tr>
            </table>
          </div>
        );
      });
    }
  }
}

export default FinalPage;
