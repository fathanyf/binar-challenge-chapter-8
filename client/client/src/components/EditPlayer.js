import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePlayersCrud } from "../context/PlayerCrudContext";

const EditPlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, username, email, experience } = location.state.player;
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newExperience, setNewExperience] = useState(experience);
  const { updatePlayerHandler } = usePlayersCrud();

  const update = (e) => {
    e.preventDefault();
    if (newUsername === "" || newEmail === "" || newExperience === "") {
      alert("All the fields need to be fill!");
      return;
    }
    updatePlayerHandler({
      id,
      username: newUsername,
      email: newEmail,
      experience: newExperience,
    });
    setNewUsername("");
    setNewEmail("");
    setNewExperience("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Player</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={newExperience}
            onChange={(e) => setNewExperience(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditPlayer;
