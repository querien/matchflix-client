import React from "react";

const CreateNight = (props) => {
  const { handleCreateNight, handleInputChange, error } = props;
  return (
    <div>
      <h1>Create your movie night</h1>

      <form onSubmit={handleCreateNight} action="">
        <label htmlFor="roomName">Enter your room name</label>
        <input
          className="inputField"
          name="roomName"
          onChange={handleInputChange}
          type="text"
          placeholder="Room name"
        />
        <br />
        <label htmlFor="roomPassword">Enter your room password</label>
        <input
          className="inputField"
          name="roomPassword"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <br />
        <label htmlFor="participants">Enter number of participants</label>
        <input
          className="inputField"
          name="participants"
          onChange={handleInputChange}
          type="number"
        />
        <br />
        <button className="smallButton " type="submit">
          Create movie night!
        </button>
      </form>

      {error ? <p>{error}</p> : <div></div>}
    </div>
  );
};

export default CreateNight;
