import React from "react";
import { Switch } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Movienight from "./pages/Movienight";
import ProtectedPage from "./pages/ProtectedPage";
import Signup from "./pages/Signup";
import Joinroom from "./pages/Joinroom";
import FinalPage from "./pages/FinalPage";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import { getLoggedIn, logout } from "./services/auth";
import * as PATHS from "./utils/paths";
import { movienightCreate } from "./services/protectedservices";
import { updateSingleMovie } from "./services/individualMovie";
import { removeParticipant } from "./services/individualMovie";
import { joinRoom } from "./services/protectedservices";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
    roomName: "",
    roomPassword: "",
    movieArray: [],
    numberMovies: 0,
    genre: "",
    imdbScore: 0,
    participants: 0,
    roomID: "",
    joinErr: "",
    movieNumber: 0,
    userReady: false,
  };

  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        console.log("RES IN CASE OF FAILURE", res);
        // deal with failed backend call
        return this.setState({
          isLoading: false,
        });
      }
      this.setState({
        user: res.data.user,
        isLoading: false,
      });
    });
  };

  handleQuery = (event) => {
    event.preventDefault();
    const movieQueryData = {
      numberMovies: this.state.numberMovies,
      genre: this.state.genre,
      imdbScore: this.state.imdbScore,
      host: this.state.user._id,
      roomName: this.state.roomName,
      roomPassword: this.state.roomPassword,
      participants: this.state.participants,
    };
    return movienightCreate(movieQueryData)
      .then((response) => {
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
      })
      .catch((error) => console.log("this is the error:", error));
  };

  handleJoinNight = (event) => {
    event.preventDefault();
    const roomData = {
      roomName: this.state.roomName,
      roomPassword: this.state.roomPassword,
    };
    return joinRoom(roomData).then((response) => {
      console.log("the response in app.js,", response);
      const {
        movieArray,
        genre,
        imdbScore,
        roomName,
        _id,
        participants,
      } = response.data.roomToJoin;
      console.log(_id);
      if (_id) {
        this.setState({
          movieArray: movieArray,
          genre: genre,
          imdbScore: imdbScore,
          roomID: _id,
          roomName: roomName,
          partipants: participants,
          queryHandled: true,
        });
      } else {
        this.setState({ joinErr: response.data.joinErr });
      }
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(this.state[name]);
    this.setState({
      [name]: value,
    });
  };

  handleLogout = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return this.setState({
        user: null,
        isLoading: false,
      });
    }
    this.setState(
      {
        isLoading: true,
      },
      () => {
        logout(accessToken).then((res) => {
          if (!res.status) {
            // deal with error here
            console.log("SOMETHING HAPPENED", res);
          }

          localStorage.removeItem("accessToken");
          return this.setState({
            isLoading: false,
            user: null,
          });
        });
      }
    );
  };

  handleRightButton = (event) => {
    event.preventDefault();
    console.log("The like button has been pressed!");
    const movieQueryData = {
      MovienightID: this.state.roomID,
      currentMovie: this.state.movieNumber,
      participantID: this.state.user._id,
      vote: 1,
    };

    console.log("CURRENT MOVIE NUMBER", this.state.movieNumber);
    console.log("MOVIE LENGTH", this.state.movieArray.length);

    if (this.state.movieNumber < this.state.movieArray.length - 1) {
      console.log(this.state.movieNumber < this.state.movieArray.length);
      return updateSingleMovie(movieQueryData).then((response) => {
        console.log("This is the response in the JSX file", response);
        this.setState({
          movieNumber: this.state.movieNumber + 1,
        });
      });
    } else {
      return new Promise((resolve) => {
        this.setState(
          {
            userReady: true,
          },
          resolve
        );
      });
    }
  };

  handleLeftButton = (event) => {
    event.preventDefault();
    return new Promise((resolve) => {
      if (this.state.movieNumber < this.state.movieArray.length - 1) {
        console.log(this.state.movieNumber < this.state.movieArray.length);
        this.setState(
          {
            movieNumber: this.state.movieNumber + 1,
          },
          resolve
        );
      } else {
        this.setState(
          {
            userReady: true,
          },
          resolve
        );
      }
    });
  };

  authenticate = (user) => {
    this.setState({
      user,
    });
  };

  listener = () => {
    window.addEventListener("load", (event) => {
      console.log("Listening to the loading");
      const removeUser = {
        ParticipantID: this.state.user._id,
        MovienightID: this.state.roomID,
      };
      return removeParticipant(removeUser).then((response) => {
        console.log(this.state.user.username, "deleted");
      });
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }
    return (
      <div className="App">
        {/* // */}
        <Switch>
          <NormalRoute
            exact
            path={PATHS.HOMEPAGE}
            component={HomePage}
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
          <NormalRoute
            exact
            path={PATHS.SIGNUPPAGE}
            authenticate={this.authenticate}
            component={Signup}
          />
          <NormalRoute
            exact
            path={PATHS.LOGINPAGE}
            authenticate={this.authenticate}
            component={LogIn}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDPAGE}
            component={ProtectedPage}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROFILE}
            component={Profile}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={"/settings"}
            component={Settings}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={"/movienight"}
            component={Movienight}
            user={this.state.user}
            handleQuery={this.handleQuery}
            handleInputChange={this.handleInputChange}
            {...this.state}
          />
          <ProtectedRoute
            exact
            path={"/room/:id"}
            user={this.state.user}
            component={Movienight}
            handleRightButton={this.handleRightButton}
            handleLeftButton={this.handleLeftButton}
            {...this.state}
          />

          <ProtectedRoute
            exact
            path={"/joinroom"}
            component={Joinroom}
            user={this.state.user}
            handleJoinNight={this.handleJoinNight}
            handleInputChange={this.handleInputChange}
            {...this.state}
          />
          <ProtectedRoute
            exact
            path={`/results/${this.state.roomID}`}
            component={FinalPage}
            user={this.state.user}
            {...this.state}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
