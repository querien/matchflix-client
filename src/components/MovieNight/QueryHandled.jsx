import React from "react";
import like from "../../heart.png";
import dislike from "../../close.png";
import "../../pages/finalPage.css";

const QueryHandled = (props) => {
  const {
    roomName,
    participants,
    movieNumber,
    movieArray,
    handleLeftButton,
    handleRightButton,
  } = props;
  console.log(movieArray);
  return (
    <div>
      <h1>{roomName}</h1>
      {/* <h2>ID: {roomID}</h2> */}
      <p>Number of friends joining: {participants}</p>
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
    </div>
  );
};

export default QueryHandled;
