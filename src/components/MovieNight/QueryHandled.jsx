import React from "react";
import like from "../../heart.png";
import dislike from "../../close.png";

const QueryHandled = (props) => {
  const {
    roomName,
    roomID,
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
      <p>Number of participants: {participants}</p>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movieArray[movieNumber].poster_path}`}
          alt="movie poster"
          style={{ width: "200px" }}
        />
        <h2> {movieArray[movieNumber].title}</h2>
        <p className="description phoneContainer">
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
