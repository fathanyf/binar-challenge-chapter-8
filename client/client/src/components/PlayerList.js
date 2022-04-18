import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePlayersCrud } from "../context/PlayerCrudContext";
import PlayerCard from "./PlayerCard";

const PlayerList = (props) => {
  const { players, retrievePlayers, searchHandler, text, searchResults } =
    usePlayersCrud();

  useEffect(() => {
    retrievePlayers();
  }, []);

  const renderPlayerList = (text.length < 1 ? players : searchResults).map(
    (player) => {
      return <PlayerCard player={player} key={player.id} />;
    }
  );

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="main">
      <h2>
        Player List
        <Link to="/add">
          <button className="ui button blue right">Add Player</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Player"
            className="prompt"
            value={text}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderPlayerList.length > 0 ? renderPlayerList : "No Player available"}
      </div>
    </div>
  );
};

export default PlayerList;
