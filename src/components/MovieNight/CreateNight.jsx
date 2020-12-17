import React from "react";
import logo from "../../MATCHFLIX.png";
import "../../pages/homepage.css";

const CreateNight = (props) => {
  const { handleCreateNight, handleInputChange } = props;
  return (
    <div>
      <img className="logoSizingMovienight" src={logo} alt="Matchflix" />
      <h1>Create Your Movie Night</h1>
      <br></br>

      <form className="inputContainer" onSubmit={handleCreateNight} action="">
        <label htmlFor="participants">
          How many friends should join the voting?
        </label>
        <input
          className="inputField"
          name="participants"
          onChange={handleInputChange}
          type="number"
        />
        <br></br>
        <label htmlFor="roomName">What is the name of your movie night?</label>
        <input
          className="inputField"
          name="roomName"
          onChange={handleInputChange}
          type="text"
          placeholder="Share With Friends!"
        />

        <br />
        <label htmlFor="roomPassword">
          What should be the password?<br></br>
        </label>
        <input
          className="inputField"
          name="roomPassword"
          onChange={handleInputChange}
          type="text"
          placeholder="Share With Friends!"
        />
        <br />

        <br />
        <h5>
          <i>
            Before you continue, let your friends know the name and the password
            of the movie night
          </i>
        </h5>
        <button className="smallButton " type="submit">
          Select the movie characteristics
        </button>
      </form>
    </div>
  );
};

export default CreateNight;
