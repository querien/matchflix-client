import React from "react";
import logo from "../../MATCHFLIX.png";
import "../../pages/homepage.css";

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
      <img className="logoSizingMovienight" src={logo} alt="Matchflix" />
      <div className="titleContainer">
        <h4 className="noMargins">Your Movie Night: </h4>
        <h2 className="noMargins">{roomName}</h2>
      </div>
      <br></br>
      <form className="formStyle" onSubmit={handleQuery} action="">
        <label htmlFor="genre">Select the genre</label>
        <br />
        <select
          onChange={handleInputChange}
          name="genre"
          id="genre"
          defaultValue="Action"
          className="inputField"
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
        <label className="inputLabels" htmlFor="numberMovies">
          How many movies to choose from?
        </label>
        <br />
        <input
          className="inputField"
          name="numberMovies"
          onChange={handleInputChange}
          type="number"
          placeholder="Example: 3"
        />{" "}
        <br />
        <label className="inputLabels" htmlFor="imdbScore">
          Minimum movie rating (1-10)?
        </label>
        <br />
        <input
          className="inputField"
          name="imdbScore"
          onChange={handleInputChange}
          type="number"
          placeholder="Example: 7"
        />{" "}
        <br />
        <br />
        <button className="smallButton">Start Voting!</button>
      </form>
    </div>
  );
};

export default RoomCreated;
