import React from "react";

const RoomCreated = (props) => {
  const {
    roomName,
    roomPassword,
    handleQuery,
    handleInputChange,
    importedGenreArr,
    error,
  } = props;
  console.log(roomPassword);
  return (
    <div>
      <h1>Your Movie Night</h1>
      <h2>{roomName}</h2>
      <br></br>
      <form onSubmit={handleQuery} action="">

        <label htmlFor="genre">Select the genre</label>
        <select
          onChange={handleInputChange}
          name="genre"
          id="genre"
          defaultValue="Action"
        >
          <option key="Action" value="Action">
            Action
          </option>
          {importedGenreArr
            .slice(1, importedGenreArr.length)
            .map((element, index) => {
              return (
                <option key={element} value={element}>
                  {element}
                </option>
              );
            })}
        </select>
        <br />
        <label htmlFor="numberMovies">How many movies to choose from?</label>
        <input
          className="inputField"
          name="numberMovies"
          onChange={handleInputChange}
          type="number"
        />{" "}
        <br />
        <label htmlFor="imdbScore">Minimum movie rating (1-10)?</label>
        <input
          className="inputField"
          name="imdbScore"
          onChange={handleInputChange}
          type="number"
        />{" "}
        <br />
        <br />
        <button className="smallButton">Start Voting!</button>
      </form>
    </div>
  );
};

export default RoomCreated;
