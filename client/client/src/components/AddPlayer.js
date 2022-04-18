import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayersCrud } from "../context/PlayerCrudContext";

const AddPlayer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");

  const { addPlayerHandler } = usePlayersCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || experience === "") {
      alert("ALl the fields need to be fil!");
      return;
    }
    addPlayerHandler({ username, email, experience });
    setUsername("");
    setEmail("");
    setExperience("");
    navigate("/");
  };
  return (
    <div className="ui main">
      <h2>Add Player</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddPlayer;
