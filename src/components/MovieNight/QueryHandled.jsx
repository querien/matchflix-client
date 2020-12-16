import React from "react";

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
      <h2>ID: {roomID}</h2>
      <p>Number of participants: {participants}</p>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movieArray[movieNumber].poster_path}`}
          alt="movie poster"
          style={{ width: "200px" }}
        />
        <p>Title: {movieArray[movieNumber].title}</p>
        <p>Overview: {movieArray[movieNumber].overview}</p>
        <p>Rating: {movieArray[movieNumber].vote_average}</p>
        <button onClick={handleLeftButton}>Dislike</button>
        <button onClick={handleRightButton}>Like</button>
      </div>
    </div>
  );
};

export default QueryHandled;
