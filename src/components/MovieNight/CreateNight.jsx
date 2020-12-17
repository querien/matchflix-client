import React from "react";

const CreateNight = (props) => {
  const { handleCreateNight, handleInputChange } = props;
  return (
    <div>
      <h1>Create your movie night</h1>

      <form className="inputContainer" onSubmit={handleCreateNight} action="">
        <label htmlFor="roomName">
          What should be the name of your movie night?
        </label>
        <input
          className="inputField"
          name="roomName"
          onChange={handleInputChange}
          type="text"
          placeholder="Room name"
        />

        <br />
        <label htmlFor="roomPassword">What should be the password?</label>
        <input
          className="inputField"
          name="roomPassword"
          onChange={handleInputChange}
          type="text"
          placeholder="Password"
        />
        <br />
        <label htmlFor="participants">
          How many people are joining the voting?
        </label>
        <input
          className="inputField"
          name="participants"
          onChange={handleInputChange}
          type="number"
        />
        <br />
        <button className="smallButton " type="submit">
          Go the next step
        </button>
      </form>
    </div>
  );
};

export default CreateNight;
