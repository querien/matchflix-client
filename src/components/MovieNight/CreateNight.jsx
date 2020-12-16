import React from "react";

const CreateNight = (props) => {
  const { handleCreateNight, handleInputChange } = props;
  return (
    <div>
      <h1>Create your movie night</h1>

      <form onSubmit={handleCreateNight} action="">
        <label htmlFor="roomName">Enter your room name</label>
        <input
          name="roomName"
          onChange={handleInputChange}
          type="text"
          placeholder="Room name"
        />
        <br />
        <label htmlFor="roomPassword">Enter your room password</label>
        <input
          name="roomPassword"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <br />
        <label htmlFor="participants">Enter number of participants</label>
        <input name="participants" onChange={handleInputChange} type="number" />
        <br />
        <button type="submit">Create movie night!</button>
      </form>
    </div>
  );
};

export default CreateNight;
