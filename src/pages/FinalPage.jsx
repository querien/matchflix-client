import React, { Component } from "react";
import Spinner from "../components/Loading/Spinner";
import "./waiting.css";
import { removeParticipant } from "../services/individualMovie";
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
  };

  //Some function that renders the page at SOME interval
  //If a condition is satisfied, render results
  componentDidMount() {
    const removeUser = {
      ParticipantID: this.props.user._id,
      MovienightID: this.props.match.params.id,
    };
    console.log(removeUser, this.props);
    return removeParticipant(removeUser).then((response) => {
      console.log(response, "deleted");
      setInterval(
        () =>
          getMovieNight(this.props.match.params.id).then((response) => {
            console.log(response);
          }),
        10000
      );

      // HERE OU SET THE INTERVAL
      // google for syntax of setInterval(()=> doSomething(), 5000) // need to connect this somehow with react (need to be able to clear the interval)
    });

    // set an interval after i remove partiipants and every 5 seconds call the database to see amount of votes
    // everyone will do this because that is when the component mounts
    // as soon as the length of array is empty:
    // clear interval
    // update loading to false and show voting data
  }

  // method here that reaches back to the db to see current status of voting
  // inside perform if satement: if (> 0) do nothing. return see you again in 5 seconds
  // else clear interval, update state to show right data

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Waiting for the others to finish</h1>
          <Spinner />
        </div>
      );
    }
  }
}

export default FinalPage;
