import React from "react";
import like from "../../heart.png";
import dislike from "../../close.png";
import "../../pages/finalPage.css";
import logo from "../../MATCHFLIX.png";
import "../../pages/homepage.css";

const QueryHandled = (props) => {
  const {
    roomName,
    participants,
    movieNumber,
    movieArray,
    handleLeftButton,
    handleRightButton,
    error,
  } = props;
  console.log(movieArray);
  return (
    <div>
      <div className="topContainer">
        <div className="subContainer">
          <img className="logoSizingMovienight" src={logo} alt="Matchflix" />
        </div>
        <div className="subContainer">
          <h3 className="movieTitle">{roomName}</h3>
          <p className="noMargins">Number of friends joining: {participants}</p>
        </div>
      </div>
      <div>
        <h5>
          Movie {movieNumber + 1}/{movieArray.length}
        </h5>
        <img
          className="posterStyling"
          src={`https://image.tmdb.org/t/p/original/${movieArray[movieNumber].poster_path}`}
          alt="movie poster"
        />
        <h2> {movieArray[movieNumber].title}</h2>
        <p className="descriptionContainer">
          {movieArray[movieNumber].overview}
        </p>
        <p>Rating: {movieArray[movieNumber].vote_average}</p>
        <button className="likeButton">
          <img
            className="icon"
            src={dislike}
            alt="dislike"
            onClick={handleLeftButton}
          />
        </button>
        <button className="likeButton">
          <img
            className="icon"
            src={like}
            alt="like"
            onClick={handleRightButton}
          />
        </button>
      </div>
      {error ? <p>{error}</p> : <div></div>}
    </div>
  );
};

export default QueryHandled;
