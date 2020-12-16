import React from "react";

const RoomCreated = (props) => {
  const {
    roomName,
    participants,
    handleQuery,
    handleInputChange,
    importedGenreArr,
  } = props;
  return (
    <div>
      <h2> You are creating a room called {roomName} </h2>
      <h2>The number of participants will be {participants}</h2>

      <form onSubmit={handleQuery} action="">
        <label htmlFor="genre">Select the genre</label>
        <select
          onChange={handleInputChange}
          name="genre"
          id="genre"
          value="Action"
        >
          {importedGenreArr.map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
        </select>
        <br />
        <label htmlFor="numberMovies">How many movies?</label>
        <input
          name="numberMovies"
          onChange={handleInputChange}
          type="number"
        />{" "}
        <br />
        <label htmlFor="imdbScore">Minimum IMDB rating</label>
        <input
          name="imdbScore"
          onChange={handleInputChange}
          type="number"
        />{" "}
        <br />
        <button>Generate movies!</button>
      </form>
    </div>
  );
};

export default RoomCreated;
