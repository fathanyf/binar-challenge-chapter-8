import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user.svg";

const PlayerDetail = () => {
  const location = useLocation();
  const { username, email, experience } = location.state.player;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{username}</div>
          <div className="description">{email}</div>
          <div className="description">{experience}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to Player List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
