import { createContext, useContext, useState } from "react";
import api from "../api/players";
import { v4 as uuidv4 } from "uuid";

const playersCrudContext = createContext();

export function PlayersCrudContextProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrievePlayers = async () => {
    const response = await api.get("/players");
    if (response.data) {
      setPlayers(response.data);
    }
  };

  const addPlayerHandler = async (player) => {
    const request = {
      id: uuidv4(),
      ...player,
    };
    const response = await api.post("/players", request);
    setPlayers([...players, response.data]);
  };

  const removePlayerHandler = async (id) => {
    await api.delete(`/players/${id}`);
    const newPlayerList = players.filter((player) => {
      return player.id !== id;
    });

    setPlayers(newPlayerList);
  };

  const updatePlayerHandler = async (player) => {
    const response = await api.put(`/players/${player.id}`, player);
    const { id } = response.data;
    setPlayers(
      players.map((player) => {
        return player.id === id ? { ...response.data } : player;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    setText(searchTerm);
    if (searchTerm !== "") {
      const newPlayerList = players.filter((player) => {
        console.log(player);
        return Object.values(player)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newPlayerList);
    } else {
      setSearchResults(players);
    }
  };

  const value = {
    player,
    players,
    retrievePlayers,
    addPlayerHandler,
    removePlayerHandler,
    updatePlayerHandler,
    searchHandler,
    text,
    searchResults,
  };

  return (
    <playersCrudContext.Provider value={value}>
      {children}
    </playersCrudContext.Provider>
  );
}

export function usePlayersCrud() {
  return useContext(playersCrudContext);
}
