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

    // // console.log(removeUser, this.props);
    // return updateFinishedUsers(userFinished).then((response) => {
    //   setInterval(
    //     () =>
    //       getMovieNight(this.props.roomID).then((response) => {
    //         clearInterval();
    //         this.setState({ loading: false });
    //         console.log(("this is the response n the frontEnd", response));
    //       }),
    //     5000
    //   );

    // HERE OU SET THE INTERVAL
    // google for syntax of setInterval(()=> doSomething(), 5000) // need to connect this somehow with react (need to be able to clear the interval)
    //.// });

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
