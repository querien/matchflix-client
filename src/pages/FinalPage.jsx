import React, { Component } from "react";
import Spinner from "../components/Loading/Spinner";
import FinalResults from "./FinalResults";
import "./waiting.css";

import { updateFinishedUsers } from "../services/individualMovie";

import { getMovieNight } from "../services/individualMovie";

//User status: User ready
// If the user is ready, we can render the loading screen, that has a set interval and refreshes.
//

class FinalPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.listener = this.listener.bind(this);
  // }
  state = {
    choices: null,
    loading: true,
    intervalId: null,
  };

  //Some function that renders the page at SOME interval
  //If a condition is satisfied, render results
  getMovieNight = () => {
    return getMovieNight(this.props.roomID).then((response) => {
      console.log(response.data);
      if (response.data.length == this.props.participants) {
        clearInterval(this.state.intervalId);
        return this.setState({ loading: false });
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
      return <p>All the users have voted, this is the outcome!</p>;
    }
  }
}

export default FinalPage;
