import React from "react";
import { Link } from "react-router-dom";
import { usePlayersCrud } from "../context/PlayerCrudContext";
import user from "../images/user.svg";

const PlayerCard = (props) => {
  const { id, username, email, experience } = props.player;

  const { removePlayerHandler } = usePlayersCrud();
  const deletePlayer = (id) => {
    removePlayerHandler(id);
  };

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/players/${id}`} state={{ player: props.player }}>
          <div className="header">{username}</div>
          <div>{email}</div>
          <div>{experience}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => deletePlayer(id)}
      ></i>
      <Link to={`/edit`} state={{ player: props.player }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default PlayerCard;
