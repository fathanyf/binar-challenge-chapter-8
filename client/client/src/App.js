import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddPlayer from "./components/AddPlayer";
import PlayerList from "./components/PlayerList";
import EditPlayer from "./components/EditPlayer";
import { PlayersCrudContextProvider } from "./context/PlayerCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <PlayersCrudContextProvider>
          <Routes>
            <Route path="/" element={<PlayerList />} />
            <Route path="/add" element={<AddPlayer />} />
            <Route path="/edit" element={<EditPlayer />} />
          </Routes>
        </PlayersCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
