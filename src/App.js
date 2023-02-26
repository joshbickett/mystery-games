import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Game } from "./Game";
import { GameCharacter } from "./GameCharacter";
import { Landing } from "./Landing";

import { Payments } from "./Payments";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/character" element={<GameCharacter />} />
      </Routes>
    </Router>
  );
};

export default App;
