import React from "react";

const RoomCreated = (props) => {
  const {
    roomName,
    roomPassword,
    handleQuery,
    handleInputChange,
    importedGenreArr,
  } = props;
  console.log(roomPassword);
  return (
    <div>
      <h1>{roomName} !</h1>
      <h3>Choose movie specifics</h3>
      <h4>Generate movies based on your preferences</h4>
      <form onSubmit={handleQuery} action="">
        <label htmlFor="genre">Select the genre</label>
        <select onChange={handleInputChange} name="genre" id="genre">
          <option selected key="Action" value="Action">
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
        <label htmlFor="numberMovies">How many movies?</label>
        <input
          className="inputField"
          name="numberMovies"
          onChange={handleInputChange}
          type="number"
        />{" "}
        <br />
        <label htmlFor="imdbScore">Minimum movie rating (1-10)</label>
        <input
          className="inputField"
          name="imdbScore"
          onChange={handleInputChange}
          type="number"
        />{" "}
        <br />
        <p>
          When you're ready, click submit to generate your movie night and start
          voting{" "}
        </p>
        <br />
        <button className="smallButton">Generate movies!</button>
      </form>
    </div>
  );
};

export default RoomCreated;
